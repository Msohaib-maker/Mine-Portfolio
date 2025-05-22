import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";
import Link from 'next/link';
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
        <div className="flex flex-col items-center">
            <div className="mt-28 px-12 mb-10">
            <div className="grid grid-cols-2 items-stretch h-auto">
  <div className="bg-orange-500 rounded-tl-3xl rounded-bl-3xl flex flex-col items-center justify-center p-10 text-white">
    <Image
      src="/images/avatar.jpg"
      alt="Avatar"
      width={300}
      height={300}
      className="rounded-full aspect-square object-cover border-[10px] border-solid border-blue-900"
    />
    <h1 className="text-3xl text-center mt-8 italic font-semibold">
      ❝ Your action matters, not words. ❞
    </h1>
  </div>

  <div className="border-4 border-white rounded-tr-3xl rounded-br-3xl p-10 overflow-y-auto">
    <div className="space-y-4 pt-10 pr-4">
      <div className="description text-left">
        <h1 className="text-5xl font-bold pb-8 text-white">Who am I?</h1>
        <h2 className="text-lg mt-4 text-gray-50">
          I am a hardcore and <span role="img" aria-label="rocket">🚀</span> passionate software engineer with a solid foundation in HTML, CSS, JavaScript, React.JS, Next.JS, Unity, OpenGL, C#, C++, and Java. My work centers around creating efficient, scalable applications and smooth deployment workflows, with a strong commitment to best practices in the software industry. My keen interest in Next.js and DevOps drives me to bridge the gap between development and operations, ensuring seamless user experiences and robust backend processes.
        </h2>

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
          I’m excited to bring my diverse skill set, from front-end innovations to DevOps automation, to a forward-thinking team. My goal is to craft applications that are both user-friendly and robust, delivering exceptional digital experiences aligned with business objectives.
        </p>
      </div>
    </div>
  </div>
            </div>
            </div>


            <Link className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5" href="/portfolio" passHref>
                <button>Check My Portfolio</button>
            </Link>
            
            <div className="grid grid-cols-2 gap-8 p-8">
                
                {/* Skills Section */}
                <div className="w-full p-8 col-span-1 justify-center justify-self-center bg-slate-900 text-lg">
                    <h1 className="text-4xl font-bold mb-6">Skills</h1>
                    <div className="space-y-4">
                        {[ 
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
                            { name: "Node", level: 6 }
                        ].map((skill, index) => (
                            <div key={index}>  {/* Add the "key" prop here */}
                            <p className="pb-4">{skill.name}</p>
                            <div className="w-96 bg-gray-300 rounded-full h-2.5">
                                <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${skill.level * 10}%` }}></div>
                            </div>
                            </div>
                        ))}
                        </div>

                </div>
  
                {/* Images Section */}
                <div className="flex flex-col space-y-8 items-center">
    <div className="group relative">
        <a
            href="https://mranonymous22.itch.io/neon-runner"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
        >
            <div className="relative w-84 h-60 rounded-lg overflow-hidden border-4" style={{ borderColor: 'rgb(29, 39, 29)' }}>
                <img
                    src="/images/Project-tbnail.png"
                    alt="Neon Runner Project Thumbnail"
                    className="w-full h-full"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <p className="text-center mt-2 font-semibold group-hover:text-gray-500 transition-colors duration-300">Era Z</p>
        </a>
    </div>

    <div className="group relative">
        <a
            href="https://mranonymous22.itch.io/cyber-futsu"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
        >
            <div className="relative w-84 h-60 rounded-lg overflow-hidden border-4" style={{ borderColor: 'rgb(29, 39, 29)' }}>
                <img
                    src="/images/Project-tbnail(1).png"
                    alt="Cyber Futsu Project Thumbnail"
                    className="w-full h-full"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <p className="text-center mt-2 font-semibold group-hover:text-gray-500 transition-colors duration-300">Cyber Futsu</p>
        </a>
    </div>
</div>


            </div>
            
            <br></br>
            <Analytics/>
            
        </div>

        <Footer/>
        </div>
  );
}
