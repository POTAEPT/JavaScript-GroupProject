"use client"

import React, { useState } from 'react';
import GlareHover from './GlareHover';
import { Highlighter } from "@/components/ui/highlighter";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { cn } from "@/lib/utils";


// --- 1. Import your project images ---

import project1Img from '../assets/projects/project1.png';
import project5Img from '../assets/projects/project5.png';
import project6Img from '../assets/projects/project6.png';
import project7Img from '../assets/projects/project7.png';
import { Truck } from 'lucide-react';

// --- Data for the projects ---
const projectData = [
    {
        title: 'NamDokMai Grading Machine',
        description: 'by using CNN and image processing technique',
        // Use your Cloudinary video URL here:
        videoUrl: 'https://youtube.com/shorts/cgA_d5XakQk?feature=share',
        imageUrl: project1Img, // optional fallback
        liveUrl: 'https://drive.google.com/file/d/1O9UcbacMITB5YCx24ePBHoxgysKEOgph/view?usp=sharing',
        repoUrl: '#',
        tags: ['CNN', 'Image Processing','C++','Python'],
    },
    {
        title: 'Mango Grading Dashboard',
        description: 'Real-time Dashboard for Mango Grading',
        videoUrl: '#',
        imageUrl: project7Img,
        liveUrl: '#',
        repoUrl: 'https://github.com/bkmintra/mango_dashboard2',
        tags: ['TypeScript','React','Tailwind CSS','HTML'],
    },
    {
        title: 'Decentral Mind',
        description: 'The Future Of AI-Powwered WEB3 Detection',
        videoUrl: 'https://youtu.be/FDYny1syKDw',
        imageUrl: project5Img,
        liveUrl: '#',
        repoUrl: 'https://github.com/bkmintra/Eth_Hack.git',
        tags: ['AI','WEB3','TypeScript','Python','CSS','Ollama'],
    },
    {
        title: 'WEB 3',
        description: 'Web3-Student-Club-Showcase',
        videoUrl: '#',

        liveUrl: '#',
        repoUrl: 'https://github.com/Soulriw/Web3-Student-Club-Showcase.git',
        tags: ['C++'],
    },
    {
        title: 'Rehab Center Dashboard',
        description: 'Sanpakwan Smart Rehab Center Dashboard',
        // --- 2. Use the imported variable here ---
        imageUrl: project6Img,
       videoUrl: 'https://drive.google.com/file/d/1aN_XeYY-tMYA-Z_nML4GM2LlKLVhaQGW/view',
        repoUrl: 'https://github.com/natakron-oss/project-960121.git',
        tags: ['JavaScript', 'HTML', 'CSS'],
    },
];

// --- Single Project Card Component ---
const ProjectCard = ({ project }) => (
    <GlareHover
        glareColor="#ffffff"
        glareOpacity={0.3}
        glareAngle={-30}
        glareSize={300}
        transitionDuration={1350}
        playOnce={true}
        width="100%"
        height="100%"
        background="#fff"
        borderRadius="16px"
        className="h-full"
        style={{ border: '1px solid #e5e7eb' }}
    >
        <div className="flex flex-col h-full bg-white rounded-[16px] overflow-hidden">
            {project.videoUrl ? (
                <video
                    src={project.videoUrl}
                    autoPlay
                    loop
                    muted
                    className="w-full h-1/2 object-cover"
                    poster={project.imageUrl}
                />
            ) : (
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-1/2 object-cover"
                />
            )}
            <div className="p-4 flex-grow flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {project.title}
                </h3>
                <p className="text-gray-600 text-xs mb-2 flex-grow">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="bg-gray-200 text-gray-800 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex items-center justify-start space-x-3 mt-auto pt-1">
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-semibold text-xs transition-colors duration-300"
                    >
                        Live Demo
                    </a>
                    {project.repoUrl && project.repoUrl !== '#' && (
                        <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 font-semibold text-xs transition-colors duration-300"
                        >
                            View Code
                        </a>
                    )}
                </div>
            </div>
        </div>
    </GlareHover>
);

// --- Main Projects Section Component ---
export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const displayedProjects = showAll ? projectData : projectData.slice(0, 3);

    return (
        <section
            id="projects"
            // --- 1. Added bg-white (or bg-background) here ---
            className="relative w-full text-black py-20 overflow-hidden bg-white"
        >
            <InteractiveGridPattern
                className={cn(
                    "absolute inset-0 h-full w-full",
                    "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
                )}
                // --- 2. Added the missing props from your demo ---
                width={20}
                height={20}
                squares={[80, 80]}
                // You can set a static color for the squares
                squaresClassName="fill-gray-100"
            />

            <div className="relative z-10 px-2">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold font-pixel underline-wavy-yellow inline-block">
                        <Highlighter action="underline" color="#FFD700">
                            Projects 🚀
                        </Highlighter>
                    </h2>
                </div>
                <div className="grid grid-cols-3 gap-6 max-w-screen-lg mx-auto">
                    {displayedProjects.map((project, index) => (
                        <div key={index} className="aspect-square">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>

                {/* View More / View Less Button */}
                <div className="text-center mt-12">
                    {!showAll && projectData.length > 3 && (
                        <button
                            onClick={() => setShowAll(true)}
                            className="btn"
                        >
                            View More
                        </button>
                    )}
                    {showAll && (
                        <button
                            onClick={() => setShowAll(false)}
                            className="btn"
                        >
                            View Less
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}