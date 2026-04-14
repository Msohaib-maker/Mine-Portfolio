"use client";
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";
import { Page } from "../../components/Page";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Text, Edges } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const FloatingCube = () => {
  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={1.5}>
      <mesh>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial
          color="#111827"
          roughness={0.2}
          metalness={0.8}
        />
        
        {/* Simulated Thicker & Rough Golden Edges with Intense Neon Blow */}
        <Edges scale={1.0} threshold={15}>
          <lineBasicMaterial attach="material" color={[2, 1.5, 0]} toneMapped={false} />
        </Edges>
        <Edges scale={1.01} threshold={15}>
          <lineBasicMaterial attach="material" color={[1.5, 1, 0]} toneMapped={false} />
        </Edges>
        <mesh>
          <boxGeometry args={[3.02, 3.02, 3.02]} />
          <meshStandardMaterial 
            color="#d4af37" 
            emissive={[2, 1.5, 0]} 
            emissiveIntensity={1} 
            wireframe 
            transparent 
            opacity={0.6} 
            toneMapped={false} 
          />
        </mesh>
        
        <Text position={[0, 0, 1.51]} fontSize={0.8} color="white" font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff">
          Hi
        </Text>
        <Text position={[0, 0, -1.51]} rotation={[0, Math.PI, 0]} fontSize={0.8} color="white" font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff">
          Mr
        </Text>
        <Text position={[1.51, 0, 0]} rotation={[0, Math.PI / 2, 0]} fontSize={0.5} color="white" font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff">
          Visitor
        </Text>
        <Text position={[-1.51, 0, 0]} rotation={[0, -Math.PI / 2, 0]} fontSize={0.35} maxWidth={2.6} textAlign="center" color="white" font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff">
          Nice to meet you
        </Text>
        <Text position={[0, 1.51, 0]} rotation={[-Math.PI / 2, 0, 0]} fontSize={0.5} color="white" font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff">
          Stay tuned
        </Text>
        <Text position={[0, -1.51, 0]} rotation={[Math.PI / 2, 0, 0]} fontSize={0.35} maxWidth={2.6} textAlign="center" color="white" font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff">
          Thanks for visiting
        </Text>
      </mesh>
    </Float>
  );
};

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="mt-28 px-8 mb-10">

          <div className="relative flex flex-col items-center justify-center text-white h-[400px] w-full">
            {/* Neon Purple Radial Backlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#8b19d2] rounded-full blur-[100px] opacity-60 pointer-events-none"></div>
            
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }} className="relative z-10 cursor-grab active:cursor-grabbing">
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <FloatingCube />
              
              <EffectComposer>
                <Bloom mipmapBlur luminanceThreshold={1} luminanceSmoothing={0.5} intensity={0.6} />
              </EffectComposer>

              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
            </Canvas>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 mt-20 max-w-7xl mx-auto w-full">
            {/* Profile Picture Column */}
            <div className="flex justify-center lg:justify-end lg:pr-16 lg:-translate-x-4 relative group z-10">
              {/* Glowing Background Aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition duration-500 scale-90 pointer-events-none"></div>
              
              {/* Premium Circular Image Frame */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-cyan-400/30 shadow-[0_0_30px_rgba(34,211,238,0.2)] group-hover:shadow-[0_0_50px_rgba(139,25,210,0.5)] group-hover:border-cyan-400/70 transition-all duration-500">
                <div className="absolute inset-0 bg-[#0d1320] z-0"></div> {/* Fallback background */}
                <Image
                  src="/profile-picture.jpeg"
                  alt="Profile"
                  fill
                  className="object-cover z-10 transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Floating Glass Reflection over image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 z-20 pointer-events-none"></div>
              </div>
            </div>

            {/* Who Am I Section Component */}
            <div className="w-full flex justify-center lg:justify-start">
              <Page />
            </div>
          </div>
          
          <div className="pt-16">
            <AcademicResearch />
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

const AcademicResearch = () => {
  const pdfUrl = "/Urban%20Blue%20Green%20Areas%20Segmentation%20for%20AQI%20Improvement.pdf";
  
  return (
    <div className="w-full flex justify-center mt-12 px-4">
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-purple-600 tracking-tight">
          Academic Research
        </h2>
        
        <div className="relative group">
          {/* Glowing Animated Backdrop */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>
          
          {/* Compact Card Container */}
          <div className="relative bg-[#0d1320] border border-cyan-400/20 rounded-2xl overflow-hidden shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8">
            
            {/* Visual Icon / Small Preview */}
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-40 h-52 bg-white/5 border border-white/10 rounded-lg overflow-hidden flex flex-col items-center justify-center p-4 shadow-[0_0_20px_rgba(34,211,238,0.1)] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all">
                <svg className="w-16 h-16 text-cyan-400 mb-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                <div className="w-full h-2 bg-white/20 rounded-full mb-2"></div>
                <div className="w-4/5 h-2 bg-white/20 rounded-full mb-2"></div>
                <div className="w-full h-2 bg-white/20 rounded-full"></div>
                
                {/* Floating Glass reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
            </div>

            {/* Content Details */}
            <div className="w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full mb-4">
                Research Paper
              </span>
              
              <h3 className="text-white font-bold text-2xl mb-4 leading-snug">
                Urban Blue Green Areas Segmentation for AQI Improvement
              </h3>
              
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
                A study on leveraging satellite imagery segmentation techniques to identify and analyze urban blue-green areas, exploring their correlation with Air Quality Index (AQI) improvements in dense urban environments.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a 
                  href={pdfUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  Read Paper
                </a>
                
                <a 
                  href={pdfUrl} 
                  download="Urban_Blue_Green_Areas_Segmentation.pdf"
                  className="flex items-center gap-2 border border-white/20 hover:border-cyan-400/60 text-gray-300 hover:text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  Download
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

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
