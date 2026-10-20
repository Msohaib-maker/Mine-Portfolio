"use client";

import { useState } from "react";
import { agency, founders } from "../siteConfig";
import { PlayIcon } from "./Icons";
import VideoPlayer from "./VideoPlayer";

const pillars = [
  "Games for mobile, PC and VR",
  "Trading bots and automation",
  "Applied maths for simulation and finance",
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

export default function IntroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = founders[activeIndex];

  return (
    <section id="about" className="scroll-mt-24 px-4 sm:px-8 pt-32 sm:pt-36 pb-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left panel: about the agency */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-hazel-400 mb-5">
            {agency.name}
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white leading-[1.05]">
            {agency.tagline}
          </h1>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-xl">
            We&apos;re a small, founder-led studio. The people you meet here are
            the people who design, build and ship your project, from first
            prototype to launch.
          </p>

          <ul className="mt-8 space-y-3">
            {pillars.map((pillar) => (
              <li key={pillar} className="flex items-center gap-3 text-white/80">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-hazel-500" />
                {pillar}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#services"
              className="rounded-full bg-hazel-300 px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white"
            >
              See our services
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50"
            >
              Start a project
            </a>
          </div>
        </div>

        {/* Right panel: founder videos */}
        <div>
          {active.video ? (
            <VideoPlayer
              key={active.video}
              src={active.video}
              large
              caption={
                <>
                  <p className="text-lg font-semibold text-white">{active.name}</p>
                  <p className="text-sm text-white/60">{active.role}</p>
                </>
              }
            />
          ) : (
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/70 backdrop-blur">
                  <PlayIcon className="h-8 w-8 ml-1" />
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/90 to-transparent p-5 sm:p-6">
                <div>
                  <p className="text-lg font-semibold text-white">{active.name}</p>
                  <p className="text-sm text-white/60">{active.role}</p>
                </div>
                <span className="shrink-0 rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/70">
                  Coming soon
                </span>
              </div>
            </div>
          )}

          {/* The picker only appears once there's more than one founder */}
          {founders.length > 1 && (
          <>
          <p className="mt-6 mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">
            Meet the founders
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {founders.map((founder, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={founder.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  className={`flex items-center gap-3 rounded-xl border p-3 text-left transition-colors ${
                    isActive
                      ? "border-hazel-500 bg-hazel-500/10"
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                      isActive ? "bg-hazel-300 text-black" : "bg-white/10 text-white/70"
                    }`}
                  >
                    {initials(founder.name)}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-white">
                      {founder.name}
                    </span>
                    <span className="block truncate text-xs text-white/50">
                      {founder.role.split(" · ")[0]}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
          </>
          )}
        </div>
      </div>
    </section>
  );
}
