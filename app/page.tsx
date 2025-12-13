'use client';

import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { PageFooter } from "@/components/page-footer";

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
  return (
    <main className="relative">
      <div className="relative z-10 mx-auto max-w-screen-sm px-4 sm:px-0">
        <div className="pt-16 sm:pt-24" />

        <PageHeader
          currentPage="home"
          subtitle={
            <>
              <div>↳ ECE <Logo src="/ut.png" alt="UT Austin" /> <a href="https://www.utexas.edu/" target="_blank" rel="noreferrer" className="hover-underline-nudge">UT Austin</a></div>
              <div>↳ Based in Allen, Texas <Logo src="/texas.png" alt="Austin,Texas" /></div>
            </>
          }
        />

        {/* Experience */}
        <div className="text-sm sm:text-[0.95rem] leading-tight space-y-2">
          <div>◆ Experience:</div>
          <div>↳ Software Engineer Intern at <a href="https://toffee.ai/" target="_blank" rel="noreferrer" className="hover-underline-nudge">Toffee.ai</a> <Logo src="/toffee.png" alt="Toffee.ai" /></div>
          <div className="ml-4">↳ Scaled to <span className="font-bold slight-italic">$40k/month</span> revenue</div>
        </div>

        <div className="my-3 border-t border-neutral-200 dark:border-neutral-700" />

        {/* Accomplishments */}
        <div className="text-sm sm:text-[0.95rem] leading-tight space-y-2">
          <div>◆ Accomplishments:</div>
          <div>↳ Founded <a href="https://www.instagram.com/lightbulb_tut/" target="_blank" rel="noreferrer" className="hover-underline-nudge">Lightbulb Tutoring</a> <Logo src="/lbt.png" alt="Lightbulb Tutoring" /></div>
          <div className="ml-4">↳ Raised <span className="font-bold slight-italic">$75k</span> for <a href="https://www.youtube.com/watch?v=R3s4H16X9VA" target="_blank" rel="noreferrer" className="hover-underline-nudge">impoverished school districts</a></div>
          <div>↳ AIME Qualifier <Logo src="/AIME.png" alt="AIME" /></div>
          <div>↳ USA Physics Olympiad Semi-Finalist <Logo src="/USAPHO.png" alt="USAPHO" /></div>
          <div>↳ USACO Gold Division <Logo src="/USACO.png" alt="USACO" /></div>
        </div>

        <div className="my-3 border-t border-neutral-200 dark:border-neutral-700" />

        {/* Interests */}
        <div className="text-sm sm:text-[0.95rem] leading-tight space-y-2">
          <div>◆ Interests:</div>
          <div>↳ Music: Piano 🎹 + Violin 🎻</div>
          <div>↳ Sports: Tennis 🎾 (Nadal 🐐) + Basketball 🏀</div>
          <div>↳ Other: Poker ♦️ (Founded <a href="https://discord.gg/GKhA7YW3cH" target="_blank" rel="noreferrer" className="hover-underline-nudge">UT Poker Club</a>)</div>
        </div>

        <div className="my-3 border-t border-neutral-200 dark:border-neutral-700" />

        {/* Reach out */}
        <div className="text-sm sm:text-[0.95rem] leading-tight space-y-2">
          <div>◆ Reach out if you are:</div>
          <div>↳ Curious about me or my work.</div>
        </div>

        <div className="my-3 border-t border-neutral-200 dark:border-neutral-700" />

        <PageFooter />
      </div>
    </main>
  );
}
