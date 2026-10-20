"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { FullscreenIcon, MuteIcon, PauseIcon, PlayIcon, VolumeIcon } from "./Icons";

const formatTime = (seconds: number) => {
  if (!Number.isFinite(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
};

type VideoPlayerProps = {
  src: string;
  // Overlay shown at the top while the video is paused (title, category, etc.)
  caption?: ReactNode;
  large?: boolean;
  // Vertical (9:16) videos such as reels
  portrait?: boolean;
};

export default function VideoPlayer({ src, caption, large = false, portrait = false }: VideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  const progress = duration ? Math.min((current / duration) * 100, 100) : 0;

  // The video can load its metadata before React hydrates and attaches onLoadedMetadata,
  // so read the duration directly on mount instead of relying only on the event.
  useEffect(() => {
    const video = videoRef.current;
    if (video && video.readyState >= 1 && Number.isFinite(video.duration)) {
      setDuration(video.duration);
      setCurrent(video.currentTime);
    }
  }, []);

  // timeupdate only fires ~4 times a second, so follow playback every frame for a smooth bar
  useEffect(() => {
    if (!playing) return;
    let frame: number;
    const tick = () => {
      const video = videoRef.current;
      if (video) {
        setCurrent(video.currentTime);
        if (Number.isFinite(video.duration)) setDuration(video.duration);
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [playing]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play();
    else video.pause();
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) video.muted = !video.muted;
  };

  const seek = (time: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = time;
    setCurrent(time);
  };

  const toggleFullscreen = () => {
    const container = containerRef.current;
    const video = videoRef.current as (HTMLVideoElement & { webkitEnterFullscreen?: () => void }) | null;
    if (document.fullscreenElement) {
      void document.exitFullscreen();
    } else if (container?.requestFullscreen) {
      void container.requestFullscreen();
    } else {
      // iOS Safari only supports fullscreen on the video element itself
      video?.webkitEnterFullscreen?.();
    }
  };

  return (
    <div
      ref={containerRef}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-black ${
        portrait ? "aspect-[9/16]" : "aspect-video"
      }`}
    >
      <video
        ref={videoRef}
        src={src}
        className="absolute inset-0 h-full w-full cursor-pointer object-contain"
        playsInline
        preload="metadata"
        onClick={togglePlay}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onTimeUpdate={(e) => setCurrent(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onDurationChange={(e) => setDuration(e.currentTarget.duration)}
        onVolumeChange={(e) => setMuted(e.currentTarget.muted)}
      />

      {caption && (
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 bg-gradient-to-b from-black/80 to-transparent p-4 sm:p-6 transition-opacity duration-300 ${
            playing ? "opacity-0" : "opacity-100"
          }`}
        >
          {caption}
        </div>
      )}

      {/* Centre play button, shown while paused */}
      {!playing && (
        <button
          type="button"
          onClick={togglePlay}
          aria-label="Play video"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <span
            className={`flex items-center justify-center rounded-full bg-hazel-300 text-black transition-transform duration-200 hover:scale-110 hover:bg-white ${
              large ? "h-20 w-20" : "h-14 w-14"
            }`}
          >
            <PlayIcon className={large ? "h-8 w-8 ml-1" : "h-6 w-6 ml-0.5"} />
          </span>
        </button>
      )}

      {/* Control bar: always visible while paused, on hover while playing */}
      <div
        className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-3 pb-2 pt-8 sm:px-4 sm:pb-3 transition-opacity duration-300 ${
          playing ? "opacity-0 group-hover:opacity-100 focus-within:opacity-100" : "opacity-100"
        }`}
      >
        {/* Seek bar: styled track with an invisible range input on top for dragging and keyboard access */}
        <div className="relative flex h-4 items-center">
          <div className="h-1 w-full overflow-hidden rounded-full bg-white/20 transition-all group-hover:h-1.5">
            <div
              className="h-full rounded-full bg-hazel-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span
            className="pointer-events-none absolute h-3 w-3 -translate-x-1/2 rounded-full bg-white opacity-0 transition-opacity group-hover:opacity-100"
            style={{ left: `${progress}%` }}
          />
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={current}
            onChange={(e) => seek(Number(e.target.value))}
            aria-label="Seek"
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          />
        </div>

        <div className="mt-1 flex items-center gap-2 text-white">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? "Pause" : "Play"}
            className="rounded-full p-1.5 transition-colors hover:bg-white/10 hover:text-hazel-300"
          >
            {playing ? <PauseIcon className="h-5 w-5" /> : <PlayIcon className="h-5 w-5" />}
          </button>
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? "Unmute" : "Mute"}
            className="rounded-full p-1.5 transition-colors hover:bg-white/10 hover:text-hazel-300"
          >
            {muted ? <MuteIcon className="h-5 w-5" /> : <VolumeIcon className="h-5 w-5" />}
          </button>
          <span className="text-xs tabular-nums text-white/70">
            {formatTime(current)} / {formatTime(duration)}
          </span>
          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label="Fullscreen"
            className="ml-auto rounded-full p-1.5 transition-colors hover:bg-white/10 hover:text-hazel-300"
          >
            <FullscreenIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
