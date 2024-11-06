import Link from "next/link"
import { Analytics } from "@vercel/analytics/react"

export default function Main(){
    return(
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-2 items-center p-10">
                <img
                    src="/images/avatar.jpg"
                    className="h-96 w-96 rounded-full justify-self-center self-center"
                    alt="Avatar"
                    style={{
                        borderWidth: '5px',
                        borderColor: 'rgb(125, 80, 204)',
                        borderStyle: 'solid',
                    }}
                />
                <div className="space-y-4 pt-32 pr-10">
                    <div className="description text-left">
                        <h1 className="text-5xl font-bold pb-8">Who am I?</h1>
                        <h2 className="text-lg mt-4">
                        I am a hardcore and <span role="img" aria-label="rocket">🚀</span> passionate software engineer with a solid foundation in HTML, CSS, JavaScript, React.JS, Next.JS, Unity, OpenGL, C#, C++, and Java. My work centers around creating efficient, scalable applications and smooth deployment workflows, with a strong commitment to best practices in the software industry. My keen interest in Next.js and DevOps drives me to bridge the gap between development and operations, ensuring seamless user experiences and robust backend processes.
                        </h2>

                        <div className="mt-6 space-y-4">
                        <p><strong>Here are a few highlights of my accomplishments and skills:</strong></p>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>
                            <strong>Next.js Enthusiast</strong> <span role="img" aria-label="globe">🌐</span>: Leveraged Next.js for multiple high-performance web applications, optimizing load times and enhancing user engagement with server-side rendering and static generation.
                            </li>
                            <li>
                            <strong>Unity & Game Development</strong> <span role="img" aria-label="video game controller">🎮</span>: Created a cyber city environment using Unity HDRP, crafting visually immersive, neon-lit landscapes while keeping frame rates high for an optimal gaming experience.
                            </li>
                            <li>
                            <strong>DevOps Focus</strong> <span role="img" aria-label="tools">🔧</span>: Implemented CI/CD pipelines using GitHub Actions, Docker, and AWS, automating build and deployment processes to reduce release times by 30%.
                            </li>
                            <li>
                            <strong>Full-Stack Versatility</strong> <span role="img" aria-label="computer">💻</span>: Developed end-to-end solutions in JavaScript frameworks (React & Next) and backend languages (C# and Java), enabling cohesive and responsive applications across web and mobile platforms.
                            </li>
                            <li>
                            <strong>Continuous Learner</strong> <span role="img" aria-label="books">📚</span>: Stay up-to-date with the latest tech trends and industry standards, integrating new tools and practices to deliver high-quality, maintainable code.
                            </li>
                        </ul>
                        </div>

                        <p className="mt-6">
                        I’m excited to bring my diverse skill set, from front-end innovations to DevOps automation, to a forward-thinking team. My goal is to craft applications that are both user-friendly and robust, delivering exceptional digital experiences aligned with business objectives.
                        </p>
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
                    ].map((skill) => (
                        <div key={skill.name}>
                        <p className="pb-4">{skill.name}</p>
                        <div className="w-96 bg-gray-300 rounded-full h-2.5">
                            <div
                            className="bg-purple-600 h-2.5 rounded-full"
                            style={{ width: `${skill.level * 10}%` }}
                            ></div>
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
    );
}