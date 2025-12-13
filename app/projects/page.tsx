'use client';

import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { PageFooter } from "@/components/page-footer";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiPostgresql,
  SiReact,
  SiPwa,
  SiPython,
  SiTensorflow,
  SiNumpy,
  SiWebgl,
  SiJavascript,
  SiSupabase,
  SiVite,
  SiFlask,
  SiMapbox,
  SiOpencv
} from "react-icons/si";
import { FaDatabase, FaChessKnight, FaGamepad, FaMusic } from "react-icons/fa";
import { IconType } from "react-icons";

function Logo({ src, alt, size = 18, className = "" }: { src: string; alt: string; size?: number; className?: string }) {
  return (
    <span className="inline-flex items-center align-middle relative -top-[1px]">
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        sizes={`${size}px`}
        quality={100}
        priority={false}
        className={`h-[18px] w-[18px] object-contain align-middle ${className}`}
      />
    </span>
  );
}

interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  websiteUrl?: string;
  screenshot: string;
}

// Map tech names to their icons
const techIcons: Record<string, { icon: IconType; color: string }> = {
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  "Next.js 14": { icon: SiNextdotjs, color: "#000000" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Vercel": { icon: SiVercel, color: "#000000" },
  "PostgreSQL": { icon: SiPostgresql, color: "#4169E1" },
  "React": { icon: SiReact, color: "#61DAFB" },
  "Progressive Web App": { icon: SiPwa, color: "#5A0FC8" },
  "Python": { icon: SiPython, color: "#3776AB" },
  "TensorFlow": { icon: SiTensorflow, color: "#FF6F00" },
  "NumPy": { icon: SiNumpy, color: "#013243" },
  "WebGL": { icon: SiWebgl, color: "#990000" },
  "Local Storage": { icon: FaDatabase, color: "#FF9900" },
  "Chess.js": { icon: FaChessKnight, color: "#000000" },
  "Supabase": { icon: SiSupabase, color: "#3ECF8E" },
  "Vite": { icon: SiVite, color: "#646CFF" },
  "Pygame": { icon: FaGamepad, color: "#3776AB" },
  "python-chess": { icon: FaChessKnight, color: "#000000" },
  "Flask": { icon: SiFlask, color: "#000000" },
  "Mapbox GL JS": { icon: SiMapbox, color: "#000000" },
  "OpenCV": { icon: SiOpencv, color: "#5C3EE8" },
  "MusicGPT": { icon: FaMusic, color: "#FF6B6B" }
};

const projects: Project[] = [
  {
    id: "lumina",
    name: "Lumina",
    description: "Lumina finds you the perfect locations to stargaze mathematically.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Python", "Flask", "Mapbox GL JS"],
    githubUrl: "https://github.com/HackTX-Project",
    websiteUrl: "https://devpost.com/software/goat-anb0tv",
    screenshot: "/lumina.png"
  },
  {
    id: "cavex",
    name: "Cavex",
    description: "Cavex applies machine learning to dental X-rays to detect cavities and gum disease.",
    techStack: ["React", "TypeScript", "Vite", "TensorFlow", "Python", "OpenCV"],
    githubUrl: "https://github.com/ir272/Cavex",
    screenshot: "/cavex.png"
  },
  {
    id: "playa",
    name: "Playa",
    description: "Upload/record a video and Playa will analyze your tone, emotion, and speech to generate a song that captures your story.",
    techStack: ["React", "TypeScript", "Python", "Flask", "MusicGPT"],
    githubUrl: "https://github.com/R0H1T-RAJU/Playa",
    screenshot: "/playa.png"
  }
];

export default function Projects() {
  return (
    <main className="relative">
      <div className="relative z-10 mx-auto max-w-screen-sm px-4 sm:px-0">
        <div className="pt-16 sm:pt-24" />

        <PageHeader currentPage="projects" subtitle="↳ Projects" />

        {/* Projects List */}
        <div className="space-y-8 sm:space-y-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card group"
              style={{
                animationDelay: `${index * 150}ms`,
                opacity: 0,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Card Container */}
              <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden bg-white dark:bg-neutral-950 project-card-hover">
                {/* Screenshot */}
                <div className="relative overflow-hidden border-b border-neutral-200 dark:border-neutral-800">
                  <div className="aspect-[16/10] bg-neutral-100 dark:bg-neutral-900">
                    <Image
                      src={project.screenshot}
                      alt={`${project.name} screenshot`}
                      width={1600}
                      height={1000}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 640px"
                    />
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-5 sm:p-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="font-extralight text-base sm:text-lg text-neutral-900 dark:text-neutral-50">
                      {project.name}
                    </h2>
                    <div className="flex items-center gap-3 shrink-0">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                      >
                        <Github size={14} />
                        <span>Code</span>
                      </a>
                      {project.websiteUrl && (
                        <>
                          <span className="text-neutral-300 dark:text-neutral-700">|</span>
                          <a
                            href={project.websiteUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                          >
                            <ExternalLink size={14} />
                            <span>Live</span>
                          </a>
                        </>
                      )}
                    </div>
                  </div>

                  <p className="text-sm sm:text-[0.95rem] leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech) => {
                      const techInfo = techIcons[tech];
                      const Icon = techInfo?.icon;

                      return (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-light bg-neutral-50 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 rounded-md border border-neutral-200 dark:border-neutral-800 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
                        >
                          {Icon && (
                            <Icon
                              size={14}
                              className="shrink-0"
                              style={{ color: techInfo.color }}
                            />
                          )}
                          <span>{tech}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="my-6 border-t border-neutral-200 dark:border-neutral-700" />

        {/* Back to Home */}
        <div className="text-sm sm:text-[0.95rem] leading-tight my-6">
          <Link href="/" className="hover-underline-nudge font-extralight">
            ← Back to home
          </Link>
        </div>

        <div className="my-6 border-t border-neutral-200 dark:border-neutral-700" />

        <PageFooter />
      </div>
    </main>
  );
}
