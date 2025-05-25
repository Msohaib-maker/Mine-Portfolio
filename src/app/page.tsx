import { Analytics } from "@vercel/analytics/react";
// import Image from "next/image";
import Link from 'next/link';
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
        <div className="flex flex-col items-center">
            <div className="mt-28 px-12 mb-10">
            <div className="grid grid-cols-2 items-stretch h-auto">
  <div className="bg-orange-500 rounded-tl-3xl rounded-bl-3xl flex flex-col items-center justify-center p-10 text-white">
      <svg color="black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="300" height="300" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
</svg>

    <h1 className="text-3xl text-center mt-8 italic font-semibold">
      ❝ Your action matters, not words. ❞
    </h1>
  </div>

  <AboutMeSection/>
            </div>
            </div>


            <Link className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5" href="/portfolio" passHref>
                <button>Check My Portfolio</button>
            </Link>
            
            <div className="grid grid-cols-2 gap-8 p-8">
                
                <Skills/>
  
                {/* Images Section */}
                <div className="flex flex-col space-y-8 items-center">

        <ProjectCard
            href="https://mranonymous22.itch.io/neon-runner"
            image="/images/Project-tbnail.png"
            title="Era Z"
          />
          <ProjectCard
            href="https://mranonymous22.itch.io/cyber-futsu"
            image="/images/Project-tbnail(1).png"
            title="Cyber Futsu"
          />
</div>


            </div>
            
            <br></br>
            <Analytics/>
            
        </div>

        <Footer/>
        </div>
  );
}


function AboutMeSection() {
  return (
    <div className="border-4 border-white rounded-tr-3xl rounded-br-3xl p-10 overflow-y-auto">
      <div className="space-y-4 pt-10 pr-4">
        <div className="description text-left">
          <h1 className="text-5xl font-bold pb-8 text-white">Who am I?</h1>

          {/* Full Stack Dev Box */}
          <div className="bg-white text-black p-6 rounded-lg shadow-md">
            <p className="text-lg">
              I’m a full-stack developer with a deep understanding of building scalable and efficient web applications. From crafting responsive UIs with React and Next.js to architecting secure and performant backend services with Node.js and MongoDB, I bring complete, end-to-end solutions to the table. My strong DevOps knowledge ensures seamless CI/CD workflows and deployment practices that reduce friction and improve productivity.
            </p>
          </div>

          {/* Game Dev Box */}
          <div className="bg-white text-black p-6 rounded-lg shadow-md mt-6">
            <p className="text-lg">
              I also specialize in game development using Unity and C#, creating immersive environments with HDRP, realistic lighting, and optimized performance. My experience spans from gameplay mechanics to asset integration and scene design, delivering engaging and visually rich experiences for players.
            </p>
          </div>

          {/* Highlights List */}
          <div className="mt-6 space-y-4 text-gray-50">
            <p><strong>Here are a few highlights of my accomplishments and skills:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>Next.js Enthusiast</strong> 🌐: Leveraged Next.js for multiple high-performance web applications, optimizing load times and enhancing user engagement with server-side rendering and static generation.
              </li>
              <li>
                <strong>Unity & Game Development</strong> 🎮: Created a cyber city environment using Unity HDRP, crafting visually immersive, neon-lit landscapes while keeping frame rates high for an optimal gaming experience.
              </li>
              <li>
                <strong>DevOps Focus</strong> 🔧: Implemented CI/CD pipelines using GitHub Actions, Docker, and AWS, automating build and deployment processes to reduce release times by 30%.
              </li>
            </ul>
          </div>

          <p className="mt-6 text-gray-50">
            I’m excited to bring my diverse skill set, from front-end innovations to DevOps automation and interactive game worlds, to a forward-thinking team. My goal is to build exceptional digital experiences that are robust, engaging, and aligned with real-world goals.
          </p>
        </div>
      </div>
    </div>
  );
}

function Skills() {
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
}


type ProjectCardProps = {
  href: string;
  image: string;
  title: string;
  alt?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ href, image, title, alt }) => {
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
          style={{ borderColor: 'white' }}
        >
          <img
            src={image}
            alt={alt || title}
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
        </div>
        <p className="text-center mt-2 font-semibold group-hover:text-gray-500 transition-colors duration-300">
          {title}
        </p>
      </a>
    </div>
  );
};


