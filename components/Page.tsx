"use client";
import { useState } from "react";
import Button from "./Button";

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
    <div className="border-4 border-white rounded-tr-3xl rounded-br-3xl p-10 overflow-y-auto">
      <div className="space-y-4 pt-10 pr-4">
        <div className="description text-left">
          <h1 className="text-5xl font-bold pb-8 text-white">Who am I?</h1>

          {/* Full Stack Dev Box */}
          <div className="bg-white text-black p-6 rounded-lg shadow-md">
            <p className="text-lg">{pages[currentPage]}</p>
          </div>

          <div className="flex justify-between items-center w-full mt-8">
            <Button handleClick={handleClick} />

            <div className="px-4 py-2 bg-white rounded-md border border-white text-black text-sm font-medium shadow">
              Page {currentPage + 1}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
