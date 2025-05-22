'use client';
import { useState } from "react";


const tabs = [
    {
      id: 'game-dev',
      label: 'Game Developer',
      content: (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Game Developer</h2>
          <p className="mb-4">
            I am a passionate Unity Game Developer with over 3 years of experience building engaging
            2D and 3D games for PC, web, and mobile platforms. I specialize in hyper-casual games,
            puzzle mechanics, and FPS gameplay with a strong grip on physics-based interactions,
            animations, and UI systems.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Developed 10+ complete Unity games from scratch</li>
            <li>Integrated Facebook SDK, Unity Ads, and third-party APIs</li>
            <li>Published on Steam, Play Store, and game marketplaces</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'full-stack',
      label: 'Full Stack Developer',
      content: (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Full Stack Developer</h2>
          <p className="mb-4">
            As a Full Stack Developer, I build robust, scalable web apps using modern technologies
            like React, Next.js, Node.js, and MongoDB. I follow clean architecture principles,
            RESTful API design, and responsive UI/UX best practices.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Built real-time dashboards, admin panels, and e-commerce platforms</li>
            <li>Integrated authentication systems, payment gateways, and third-party APIs</li>
            <li>Deployed projects using Vercel, Docker, and CI/CD pipelines</li>
          </ul>
        </div>
      ),
    },
  ];


export default function Services(){

    

    const [activeTab, setActiveTab] = useState('game-dev');

      return (
        <div>
          <div className="pt-32">
          <div className="flex justify-start gap-2 mb-6 px-10">
        {tabs.map((tab) => (
          <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-6 py-2 rounded-md text-sm md:text-base transition-all duration-200 border ${
            activeTab === tab.id
              ? 'bg-orange-500 text-white border-transparent'
              : 'bg-transparent text-gray-300 border-gray-600 hover:bg-orange-300/20 hover:text-white'
          }`}
        >
          {tab.label}
        </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className=" bg-opacity-50 p-6 rounded-xl text-white backdrop-blur">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>

          </div>
         
           
          
        </div>
      );
}