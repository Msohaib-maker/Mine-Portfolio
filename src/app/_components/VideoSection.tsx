"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { PlayIcon } from "./Icons";
import VideoPlayer from "./VideoPlayer";

// Entries without a `src` render as "Coming soon" placeholders.
type Video = { title: string; category: string; src?: string; portrait?: boolean };

type TabId = "game" | "maths" | "trading" | "web";

type Tab = {
  id: TabId;
  label: string;
  // Full class strings so Tailwind picks them up; each tab gets its own shade of hazel
  activeClass: string;
  accentClass: string;
  videos?: Video[];
  site?: { url: string; title: string };
};

const tabs: Tab[] = [
  {
    id: "game",
    label: "Game",
    activeClass: "bg-hazel-200 text-black",
    accentClass: "text-hazel-200",
    videos: [
      {
        title: "Unity connected with Live Binance account",
        category: "Unity",
        src: "/videos/game/unity-binance-portfolio.mp4",
      },
    ],
  },
  {
    id: "maths",
    label: "Maths",
    activeClass: "bg-hazel-300 text-black",
    accentClass: "text-hazel-300",
    videos: [
      {
        title: "Newton–Raphson Method",
        category: "Numerical Methods",
        src: "/videos/math/NewtonRaphsonReel.mp4",
        portrait: true,
      },
      {
        title: "Math Reel",
        category: "Animation",
        src: "/videos/math/math-reel-04.mp4",
        portrait: true,
      },
    ],
  },
  {
    id: "trading",
    label: "Trading",
    activeClass: "bg-hazel-400 text-black",
    accentClass: "text-hazel-400",
    videos: [
      {
        title: "Unity connected with Live Binance account",
        category: "Trading Bot",
        src: "/videos/trading/unity-binance-portfolio.mp4",
      },
    ],
  },
  {
    id: "web",
    label: "Web",
    activeClass: "bg-white text-black",
    accentClass: "text-white/70",
    site: { url: "https://job-hooker.com/", title: "Job Hooker" },
  },
];

const VideoCard = ({
  video,
  accentClass,
  featured = false,
}: {
  video: Video;
  accentClass: string;
  featured?: boolean;
}) => {
  const caption = (
    <div>
      <span className={`text-[11px] font-semibold uppercase tracking-widest ${accentClass}`}>
        {video.category}
      </span>
      <h3
        className={`font-semibold text-white ${
          featured ? "text-xl sm:text-2xl mt-1" : "text-base mt-0.5"
        }`}
      >
        {video.title}
      </h3>
    </div>
  );

  if (video.src) {
    return (
      <VideoPlayer src={video.src} caption={caption} large={featured} portrait={video.portrait} />
    );
  }

  return (
    <div className="group relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
      {/* Placeholder backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`flex items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/70 backdrop-blur ${
            featured ? "h-20 w-20" : "h-12 w-12"
          }`}
        >
          <PlayIcon className={featured ? "h-8 w-8 ml-1" : "h-5 w-5 ml-0.5"} />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/90 to-transparent p-4 sm:p-6">
        {caption}
        <span className="shrink-0 rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/70">
          Coming soon
        </span>
      </div>
    </div>
  );
};

const VideoGrid = ({ videos, accentClass }: { videos: Video[]; accentClass: string }) => {
  // Vertical reels sit side by side; landscape videos get a featured card plus a grid
  if (videos.every((video) => video.portrait)) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video) => (
          <VideoCard key={video.title} video={video} accentClass={accentClass} />
        ))}
      </div>
    );
  }

  const [featured, ...rest] = videos;
  return (
    <>
      <VideoCard video={featured} accentClass={accentClass} featured />
      {rest.length > 0 && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {rest.map((video) => (
            <VideoCard key={video.title} video={video} accentClass={accentClass} />
          ))}
        </div>
      )}
    </>
  );
};

const SitePreview = ({ url, title }: { url: string; title: string }) => (
  <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
    {/* Browser chrome */}
    <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
      <div className="flex gap-1.5">
        <span className="h-3 w-3 rounded-full bg-white/15" />
        <span className="h-3 w-3 rounded-full bg-white/15" />
        <span className="h-3 w-3 rounded-full bg-white/15" />
      </div>
      <div className="min-w-0 flex-1 truncate rounded-full bg-white/5 px-4 py-1 text-xs text-white/60">
        {url}
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 rounded-full bg-hazel-300 px-3 py-1 text-xs font-semibold text-black transition-colors hover:bg-white"
      >
        Visit site
      </a>
    </div>
    <iframe
      src={url}
      title={`${title} website preview`}
      loading="lazy"
      className="block h-[70vh] min-h-[420px] w-full bg-white"
    />
  </div>
);

export default function VideoSection() {
  const [activeId, setActiveId] = useState<TabId>("game");
  const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  return (
    <section id="work" className="scroll-mt-24 px-4 sm:px-8 py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Work"
          title="Recent projects"
          description="Gameplay captures, demos and sites from projects we've shipped."
        />

        <div
          role="tablist"
          aria-label="Project categories"
          className="mb-8 grid grid-cols-4 gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 sm:inline-grid"
        >
          {tabs.map((tab) => {
            const selected = tab.id === activeId;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`work-tab-${tab.id}`}
                aria-selected={selected}
                aria-controls={`work-panel-${tab.id}`}
                onClick={() => setActiveId(tab.id)}
                className={`rounded-full px-3 py-2 text-sm font-semibold transition-all duration-200 sm:px-6 ${
                  selected ? tab.activeClass : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* key remounts the panel so videos from the previous tab stop playing */}
        <div
          key={active.id}
          role="tabpanel"
          id={`work-panel-${active.id}`}
          aria-labelledby={`work-tab-${active.id}`}
        >
          {active.site ? (
            <SitePreview url={active.site.url} title={active.site.title} />
          ) : (
            <VideoGrid videos={active.videos ?? []} accentClass={active.accentClass} />
          )}
        </div>
      </div>
    </section>
  );
}
