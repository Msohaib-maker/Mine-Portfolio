"use client";
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";
import { Page } from "../../components/Page";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="mt-28 px-8 mb-10">
          <div className="grid grid-cols-2 items-stretch h-auto">
            {/* <div className="bg-orange-500 rounded-tl-3xl rounded-bl-3xl flex flex-col items-center justify-center p-10 text-white">
              <CodeSVG />
              <h1 className="text-3xl text-center mt-8 italic font-semibold">
                ❝ Your action matters, not words. ❞
              </h1>
            </div> */}
            <div className="border-4 border-white rounded-tl-3xl rounded-bl-3xl flex flex-col items-center justify-center p-10 text-white">
              <div className="cube transform-style preserve-3d animate-spin-cube">
                <div className="face front bg-orange-600">Hi</div>
                <div className="face back bg-orange-700">Mr</div>
                <div className="face right bg-orange-500">Visitor</div>
                <div className="face left bg-orange-800">Nice to meet you</div>
                <div className="face top bg-orange-400">Stay tuned</div>
                <div className="face bottom bg-orange-900">
                  Thanks for visiting
                </div>
              </div>
            </div>

            <Page />
          </div>
        </div>

        <div className="p-8">
          <Skills />
        </div>

        <Work />

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

const Work = () => {
  const workExperience = [
    {
      company: "FoneRep",
      position: "Junior Php Intern",
      duration: "March 2024 - June 2024",
      description:
        "Led development of scalable web applications using React, Node.js, and MongoDB. Implemented CI/CD pipelines and mentored junior developers.",
      link: "https://thefonerep.com/",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    },
    {
      company: "Vissen CA LLC",
      position: "Full Stack Developer",
      duration: "December 2024 - Present",
      description:
        "Developed 3D mobile games using Unity and C#. Created engaging gameplay mechanics and optimized performance for various devices.",
      link: "https://vissen.uz/",
      technologies: [
        "React Native web",
        "Nest",
        "UniStyles",
        "CI/CD",
        "Docker",
      ],
    },
  ];

  return (
    <div className="w-full px-4 py-12">
      <h1 className="text-6xl font-bold mb-12 text-white text-center">
        Work Experience
      </h1>
      <div className="max-w-7xl mx-auto relative pt-8">
        {/* Central Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent"></div>

        {workExperience.map((job, index) => (
          <div key={index} className="relative mb-16">
            <div className="flex items-end">
              {index % 2 === 0 ? (
                <>
                  <div className="w-[15%] pr-8"></div>
                  {/* Left Card */}
                  <div className="w-[30%] pr-8 flex justify-end">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      viewport={{ once: true, amount: 0.1 }}
                      className="bg-white/5 border border-cyan-400/40 rounded-xl p-6 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.6),0_0_25px_rgba(168,85,247,0.5)] transition-all duration-300"
                    >
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {job.position}
                        </h3>
                        <a
                          href={job.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 text-lg font-semibold transition-colors duration-300"
                        >
                          {job.company}
                        </a>
                      </div>

                      <span className="text-purple-300 font-medium bg-purple-500/20 px-3 py-1 rounded-full text-sm mb-4 inline-block">
                        {job.duration}
                      </span>

                      <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-200 px-2 py-1 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  {/* <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.6)] z-10"
                  ></motion.div> */}

                  <div className="w-[30%] pl-8"></div>
                </>
              ) : (
                <>
                  <div className="w-[55%] pr-8"></div>

                  {/* Timeline Dot */}
                  {/* <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.6)] z-10"
                  ></motion.div> */}

                  {/* Right Card */}
                  <div className="w-[30%] pl-8">
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      viewport={{ once: true, amount: 0.1 }}
                      className="bg-white/5 border border-cyan-400/40 rounded-xl p-6 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.6),0_0_25px_rgba(168,85,247,0.5)] transition-all duration-300"
                    >
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {job.position}
                        </h3>
                        <a
                          href={job.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 text-lg font-semibold transition-colors duration-300"
                        >
                          {job.company}
                        </a>
                      </div>

                      <span className="text-purple-300 font-medium bg-purple-500/20 px-3 py-1 rounded-full text-sm mb-4 inline-block">
                        {job.duration}
                      </span>

                      <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-200 px-2 py-1 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
