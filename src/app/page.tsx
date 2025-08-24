"use client";
import { Analytics } from "@vercel/analytics/react";
// import Image from "next/image";
import Link from "next/link";
import { Page } from "../../components/Page";
import { ProjectCard } from "../../components/ProjectCard";
import CodeSVG from "../../SVG/CodeSVG";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="mt-28 px-12 mb-10">
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

        <Link
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="/portfolio"
          passHref
        >
          <button>Check My Portfolio</button>
        </Link>

        <div className="grid grid-cols-2 gap-8 p-8">
          <Skills />

          <div className="flex flex-col space-y-8 items-center">
            <ProjectCard
              href="https://air-quality-frontend-rouge.vercel.app/"
              image="/images/Project-tbnail(7).png"
              title="Climate Analyzer"
            />
            <ProjectCard
              href="https://mranonymous22.itch.io/cyber-futsu"
              image="/images/Project-tbnail(1).png"
              title="Cyber Futsu"
            />
          </div>
        </div>

        <br></br>
        <Analytics />
      </div>
    </div>
  );
}

const Skills = () => {
  const skills = [
    { name: "JavaScript", level: 8 },
    { name: "HTML", level: 8 },
    { name: "CSS", level: 8 },
    { name: "React JS", level: 8 },
    { name: "Next JS", level: 8 },
    { name: "C++", level: 6 },
    { name: "C#", level: 7 },
    { name: "OpenGL", level: 3 },
    { name: "Unity", level: 7 },
    { name: "Java", level: 8 },
    { name: "DevOps", level: 6 },
    { name: "Git", level: 7 },
    { name: "Figma", level: 8 },
    { name: "Node", level: 6 },
  ];

  return (
    <div className="w-full p-8 col-span-1 justify-center justify-self-center border-4 border-white rounded-xl">
      <h1 className="text-4xl font-bold mb-6 text-white">Skills</h1>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <p className="pb-2 text-white">{skill.name}</p>
            <div className="w-96 bg-gray-300 rounded-full h-2.5">
              <div
                className="bg-orange-500 h-2.5 rounded-full"
                style={{ width: `${skill.level * 10}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
