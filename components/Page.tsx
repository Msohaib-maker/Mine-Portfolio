"use client";
import { useState } from "react";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";

export const Page = () => {
  const pages: string[] = [
    "I’m a full-stack developer with a deep understanding of building scalable and efficient web applications. From crafting responsive UIs with React and Next.js to architecting secure and performant backend services with Node.js and MongoDB, I bring complete, end-to-end solutions to the table. My strong DevOps knowledge ensures seamless CI/CD workflows and deployment practices that reduce friction and improve productivity.",
    "I also specialize in game development using Unity and C#, creating immersive environments with HDRP, realistic lighting, and optimized performance. My experience spans from gameplay mechanics to asset integration and scene design, delivering engaging and visually rich experiences for players.",
  ];
  const [currentPage, setCurrentPage] = useState(0);

  const handleClick = () => {
    setCurrentPage((currentPage + 1) % pages.length);
  };

  return (
    <div className="relative flex flex-col justify-center h-[400px] w-full p-8">
      {/* Subtle Background Glow behind text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[250px] h-[250px] bg-cyan-500/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="description text-left relative z-10 w-full max-w-2xl mx-auto">
        <motion.h1 
          className="text-5xl font-extrabold pb-8 pt-4 leading-normal bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-purple-600 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Who am I?
        </motion.h1>

        {/* Dynamic Glassmorphism Content Box */}
        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] min-h-[220px] flex items-center group transition-all duration-500 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
          
          {/* Decorative Neon Lead Line */}
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-cyan-400 to-purple-500 rounded-l-2xl shadow-[0_0_10px_rgba(34,211,238,0.5)]" />

          <AnimatePresence mode="wait">
            <motion.p
              key={currentPage}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-[1.05rem] text-gray-200 leading-relaxed font-medium pl-2"
            >
              {pages[currentPage]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Controls Section */}
        <div className="flex justify-between items-center w-full mt-8 px-2">
          <Button handleClick={handleClick} />

          {/* Elegant Dot Pagination */}
          <div className="flex items-center gap-3">
            {pages.map((_, idx) => (
              <div 
                key={idx} 
                onClick={() => setCurrentPage(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer 
                  ${currentPage === idx 
                    ? 'bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.8)] scale-125 w-6' 
                    : 'bg-white/20 hover:bg-white/40'}`} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
