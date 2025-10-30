'use client';

import Image from "next/image";
import Link from "next/link";
import { Mail, Github, Twitter, Linkedin } from "lucide-react";
import { useNavigationBounce } from "../lib/useNavigationBounce";
import { ThemeToggle } from "@/components/theme-toggle";

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

const Label = ({ children }: { children: React.ReactNode }) => (
  <span className="relative -top-[1px] leading-none align-middle">{children}</span>
);

const FallbackLogo = ({ alt }: { alt: string }) => (
  <Logo src="/YClogo.png" alt={alt} />
);

export default function Home() {
  const { shouldBounce } = useNavigationBounce('home');

  return (
    <main className="relative">
      <div className="relative z-10 mx-auto max-w-screen-sm px-4 sm:px-0">
        <div className="pt-16 sm:pt-24" />

        {/* Header */}
        <div className="text-sm sm:text-[0.95rem] leading-tight space-y-2">
          <div className="flex items-center justify-between">
            <h1 className="underline underline-offset-[3px] font-extralight">◆ Ian Roybal</h1>
            <div className="flex items-center gap-2 font-extralight">
              <Link href="/projects" className={`hover-underline-nudge ${shouldBounce('projects') ? 'nav-bounce' : ''}`}>Projects</Link>
              <span className="text-neutral-400 dark:text-neutral-600">|</span>
              <Link href="/photography" className={`hover-underline-nudge ${shouldBounce('photography') ? 'nav-bounce-delayed-1' : ''}`}>Photos</Link>
            </div>
          </div>
          <div>↳ ECE <Logo src="/ut.png" alt="UT Austin" /> <span className="font-bold slight-italic">UT Austin</span></div>
          <div>↳ Based in Austin, Texas <Logo src="/texas.png" alt="Austin,Texas" /></div>
        </div>

        <div className="my-3 border-t border-neutral-200 dark:border-neutral-700" />

        {/* Experience */}
        <div className="text-sm sm:text-[0.95rem] leading-tight space-y-2">
          <div>◆ Experience:</div>
          <div>↳ Software Engineer Intern at <Logo src="/toffee.png" alt="Toffee.ai" /> Toffee.ai</div>
          <div className="ml-4">↳ Scaled to <span className="font-bold slight-italic">$20k/month</span> revenue</div>
          <div>↳ Founded <Logo src="/lbt.png" alt="Lightbulb Tutoring" /> Lightbulb Tutoring</div>
          <div className="ml-4">↳ Raised <span className="font-bold slight-italic">$75k</span> for impoverished school districts</div>
        </div>

        <div className="my-3 border-t border-neutral-200 dark:border-neutral-700" />

        {/* Interests */}
        <div className="text-sm sm:text-[0.95rem] leading-tight space-y-2">
          <div>◆ Interests:</div>
          <div>↳ Music: Piano 🎹 + Violin 🎻</div>
          <div>↳ Sports: Tennis 🎾 (Nadal 🐐) + Basketball 🏀</div>
          <div>↳ Other: Poker ♦️</div>
        </div>

        <div className="my-3 border-t border-neutral-200 dark:border-neutral-700" />

        {/* Reach out */}
        <div className="text-sm sm:text-[0.95rem] leading-tight space-y-2">
          <div>◆ Feel free to reach out!</div>
          <div>↳ Always happy to connect and chat.</div>
        </div>

        <div className="my-3 border-t border-neutral-200 dark:border-neutral-700" />

        {/* Contact */}
        <div className="text-sm sm:text-[0.95rem] leading-tight">
          <div className="pt-4" />
          <footer className="pb-16 sm:pb-24">
            <div className="flex items-center justify-between flex-wrap">
              <div className="flex items-center gap-3">
                <div>◆ Contact:</div>
                <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                  <a className="inline-flex items-center gap-1" href="mailto:ian.roybal@gmail.com"><Mail size={14} /><span className="hover-underline-nudge">Email</span></a>
                  <a className="inline-flex items-center gap-1" href="https://github.com/ir272" target="_blank" rel="noreferrer"><Github size={14} /><span className="hover-underline-nudge">GitHub</span></a>
                  <a className="inline-flex items-center gap-1" href="https://x.com/TornadoKing111/" target="_blank" rel="noreferrer"><Twitter size={14} /><span className="hover-underline-nudge">Twitter</span></a>
                  <a className="inline-flex items-center gap-1" href="https://www.linkedin.com/in/ianroybal/" target="_blank" rel="noreferrer"><Linkedin size={14} /><span className="hover-underline-nudge">LinkedIn</span></a>
                </div>
              </div>
              <ThemeToggle />
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
