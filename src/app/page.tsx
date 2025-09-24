"use client";
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";
import { Page } from "../../components/Page";
import CodeSVG from "../../SVG/CodeSVG";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="mt-28 px-8 mb-10">
          <div className="grid grid-cols-2 items-stretch h-auto">
            <div className="bg-orange-500 rounded-tl-3xl rounded-bl-3xl flex flex-col items-center justify-center p-10 text-white">
              <CodeSVG />
              <h1 className="text-3xl text-center mt-8 italic font-semibold">
                ❝ Your action matters, not words. ❞
              </h1>
            </div>

            <Page />
          </div>
        </div>

        <div className="p-8">
          <Skills />
        </div>

        <br></br>
        <Analytics />
      </div>
    </div>
  );
}

const Skills = () => {
  const skills = [
    { name: "React", logo: "https://cdn.simpleicons.org/react", level: 10 },
    { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb", level: 10 },
    { name: "Prisma", logo: "https://cdn.simpleicons.org/prisma", level: 10 },
    { name: "NestJS", logo: "https://cdn.simpleicons.org/nestjs", level: 10 },
    { name: "Redis", logo: "https://cdn.simpleicons.org/redis", level: 10 },
    {
      name: "Node.js",
      logo: "https://cdn.simpleicons.org/nodedotjs",
      level: 10,
    },
    {
      name: "Cloudflare",
      logo: "https://cdn.simpleicons.org/cloudflare",
      level: 10,
    },
    {
      name: "Tailwind",
      logo: "https://cdn.simpleicons.org/tailwindcss",
      level: 10,
    },
    {
      name: "Supabase",
      logo: "https://cdn.simpleicons.org/supabase",
      level: 10,
    },
  ];

  return (
    <div className="w-full px-4 py-6 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-12 text-white">Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-white/5 border border-cyan-400/40 rounded-xl p-6 flex items-center gap-4 transition-all duration-300 shadow-[0_0_10px_rgba(34,211,238,0.25),0_0_10px_rgba(168,85,247,0.2)] hover:-translate-y-0.5 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.6),0_0_25px_rgba(168,85,247,0.5)]"
          >
            <Image
              src={skill.logo}
              alt={`${skill.name} Logo`}
              width={50}
              height={50}
            />
            <div className="flex-1">
              <p className="text-xl font-semibold text-white">{skill.name}</p>
              <p className="text-sm text-white/70">
                Core technology in my toolkit
              </p>
              <div className="mt-3">
                <div className="w-full bg-gray-700/50 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.6)] transition-all duration-500"
                    style={{ width: `${skill.level * 10}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
