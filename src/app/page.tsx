"use client";
import { Analytics } from "@vercel/analytics/react";
// import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="mt-28 px-12 mb-10">
          <div className="grid grid-cols-2 items-stretch h-auto">
            <div className="bg-orange-500 rounded-tl-3xl rounded-bl-3xl flex flex-col items-center justify-center p-10 text-white">
              <svg
                color="black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="300"
                height="300"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
                />
              </svg>

              <h1 className="text-3xl text-center mt-8 italic font-semibold">
                ❝ Your action matters, not words. ❞
              </h1>
            </div>

            <AboutMeSection />
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

          {/* Images Section */}
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

const AboutMeSection = () => {
  const pages: string[] = [
    "I’m a full-stack developer with a deep understanding of building scalable and efficient web applications. From crafting responsive UIs with React and Next.js to architecting secure and performant backend services with Node.js and MongoDB, I bring complete, end-to-end solutions to the table. My strong DevOps knowledge ensures seamless CI/CD workflows and deployment practices that reduce friction and improve productivity.",
    "I also specialize in game development using Unity and C#, creating immersive environments with HDRP, realistic lighting, and optimized performance. My experience spans from gameplay mechanics to asset integration and scene design, delivering engaging and visually rich experiences for players.",
  ];
  const [currentPage, setCurrentPage] = useState(0);

  const handleClick = () => {
    setCurrentPage((currentPage + 1) % pages.length);
  };

  return (
    <div className="border-4 border-white rounded-tr-3xl rounded-br-3xl p-10 overflow-y-auto">
      <div className="space-y-4 pt-10 pr-4">
        <div className="description text-left">
          <h1 className="text-5xl font-bold pb-8 text-white">Who am I?</h1>

          {/* Full Stack Dev Box */}
          <div className="bg-white text-black p-6 rounded-lg shadow-md">
            <p className="text-lg">{pages[currentPage]}</p>
          </div>

          <div className="flex justify-between items-center w-full mt-8">
            <button
              className="p-2 bg-white rounded-md border border-white transform transition-transform duration-200 hover:scale-110"
              onClick={handleClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
                viewBox="0 0 25 25"
              >
                <path d="M16 20v-4H1V9h15V5l8 7.5z" fill="black" />
              </svg>
            </button>

            <div className="px-4 py-2 bg-white rounded-md border border-white text-black text-sm font-medium shadow">
              Page {currentPage + 1}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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

type ProjectCardProps = {
  href: string;
  image: string;
  title: string;
  alt?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  image,
  title,
  alt,
}) => {
  return (
    <div className="group relative">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div
          className="relative w-84 h-60 rounded-lg overflow-hidden border-4"
          style={{ borderColor: "white" }}
        >
          <img src={image} alt={alt || title} className="w-full h-full" />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
        </div>
        <p className="text-center mt-2 font-semibold group-hover:text-gray-500 transition-colors duration-300">
          {title}
        </p>
      </a>
    </div>
  );
};
