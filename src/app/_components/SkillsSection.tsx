"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";

const skillGroups = [
  {
    id: "engines",
    title: "Engines & XR",
    items: ["Unity", "VR / XR", "Meta Quest", "OpenXR", "Blender", "Shader Graph"],
  },
  {
    id: "languages",
    title: "Languages",
    items: ["C#", "TypeScript", "JavaScript", "Go", "Python", "C++"],
  },
  {
    id: "frameworks",
    title: "Frameworks",
    items: ["Expo React Native", "React", "Next.js", "Node.js", "NestJS", "Tailwind CSS"],
  },
  {
    id: "infra",
    title: "Data & Infra",
    items: ["MongoDB", "PostgreSQL", "Prisma", "Redis", "Supabase", "Docker", "Cloudflare", "CI/CD"],
  },
];

const skills = skillGroups.flatMap((group) =>
  group.items.map((name) => ({ name, groupId: group.id, groupTitle: group.title }))
);

export default function SkillsSection() {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  const filters = [{ id: null, title: "All" }, ...skillGroups];

  return (
    <section id="skills" className="scroll-mt-24 px-4 sm:px-8 py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Skills"
          title="Our stack"
          description="The languages, engines, frameworks and tools we build with every day."
        />

        <div className="mb-12 flex flex-wrap gap-2">
          {filters.map((filter) => {
            const isActive = activeGroup === filter.id;
            return (
              <button
                key={filter.title}
                type="button"
                onClick={() => setActiveGroup(filter.id)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  isActive
                    ? "border-hazel-300 bg-hazel-300 text-black"
                    : "border-white/15 text-white/60 hover:border-white/40 hover:text-white"
                }`}
              >
                {filter.title}
              </button>
            );
          })}
        </div>

        <div className="honeycomb-wrap">
          <ul className="honeycomb">
            {skills.map((skill) => {
              const highlighted = activeGroup === skill.groupId;
              const dimmed = activeGroup !== null && !highlighted;

              return (
                <li
                  key={skill.name}
                  className={`hex group transition-all duration-300 ${
                    highlighted ? "bg-hazel-400" : "bg-white/15 hover:bg-hazel-400"
                  } ${dimmed ? "opacity-25" : "opacity-100"}`}
                >
                  <div
                    className={`hex-inner flex flex-col items-center justify-center px-3 text-center transition-colors duration-300 ${
                      highlighted
                        ? "bg-hazel-700"
                        : "bg-[#0a0a0a] group-hover:bg-hazel-950"
                    }`}
                  >
                    <span className="text-[11px] sm:text-sm font-semibold leading-tight text-white">
                      {skill.name}
                    </span>
                    <span
                      className={`mt-1 text-[9px] sm:text-[10px] uppercase tracking-wider ${
                        highlighted ? "text-hazel-200" : "text-white/35"
                      }`}
                    >
                      {skill.groupTitle}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
