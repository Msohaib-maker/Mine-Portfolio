"use client";

import { useEffect, useRef } from "react";

// Mostly white dots with a few hazelnut ones, matching the site palette
const COLORS = ["255,255,255", "255,255,255", "255,255,255", "205,167,128"];

type Flake = {
  x: number;
  y: number;
  radius: number;
  speed: number;
  // Each dot spins around its own small circle while it falls, so it drifts in a spiral
  angle: number;
  spin: number;
  orbit: number;
  alpha: number;
  color: string;
};

const createFlake = (width: number, height: number, anywhere: boolean): Flake => ({
  x: Math.random() * width,
  y: anywhere ? Math.random() * height : -10,
  radius: 0.6 + Math.random() * 1.6,
  speed: 0.25 + Math.random() * 0.6,
  angle: Math.random() * Math.PI * 2,
  spin: (Math.random() < 0.5 ? -1 : 1) * (0.004 + Math.random() * 0.012),
  orbit: 8 + Math.random() * 28,
  alpha: 0.25 + Math.random() * 0.5,
  color: COLORS[Math.floor(Math.random() * COLORS.length)],
});

export default function SnowBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let flakes: Flake[] = [];
    let frame = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Density scales with screen area, capped so large monitors stay light
      const count = Math.min(Math.round((width * height) / 9000), 180);
      flakes = Array.from({ length: count }, () => createFlake(width, height, true));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const flake of flakes) {
        const x = flake.x + Math.cos(flake.angle) * flake.orbit;
        const y = flake.y + Math.sin(flake.angle) * flake.orbit * 0.4;
        ctx.beginPath();
        ctx.arc(x, y, flake.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${flake.color},${flake.alpha})`;
        ctx.fill();
      }
    };

    const tick = () => {
      for (let i = 0; i < flakes.length; i++) {
        const flake = flakes[i];
        flake.y += flake.speed;
        flake.angle += flake.spin;
        if (flake.y - flake.orbit > height) flakes[i] = createFlake(width, height, false);
      }
      draw();
      frame = requestAnimationFrame(tick);
    };

    resize();
    if (reducedMotion) draw();
    else frame = requestAnimationFrame(tick);

    const onResize = () => {
      resize();
      if (reducedMotion) draw();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}
