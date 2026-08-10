'use client';

import { useState } from "react";
import Image from "next/image";
import { SiBungie, SiCounterstrike, SiValorant } from "react-icons/si";
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

type GameIconName = "bloons" | "minecraft" | "csgo" | "valorant" | "destiny" | "hollow-knight";

function GameIcon({ game }: { game: GameIconName }) {
  const iconClass = "h-[18px] w-[18px] shrink-0 object-contain";

  if (game === "minecraft") {
    return <Image src="/minecraft-creeper.svg" alt="Minecraft logo" width={18} height={18} className={iconClass} />;
  }

  if (game === "bloons") {
    return <Image src="/bloons-td.webp" alt="Bloons TD Battles logo" width={18} height={18} className={`${iconClass} rounded-[3px]`} />;
  }

  if (game === "hollow-knight") {
    return (
      <svg viewBox="0 0 24 24" role="img" aria-label="Hollow Knight logo" className={iconClass} fill="currentColor">
        <path d="M7.6 5.4 3.1 1.8v6.4c0 1.2.6 2.4 1.6 3.1l1.2.9c.5 2.6 2.1 4.3 4.1 4.8V21h2v-4c2-.5 3.6-2.2 4.1-4.8l1.2-.9c1-.7 1.6-1.9 1.6-3.1V1.8l-4.5 3.6a5.9 5.9 0 0 0-6.8 0Z" />
        <circle cx="9" cy="10" r="1.1" fill="hsl(var(--background))" />
        <circle cx="15" cy="10" r="1.1" fill="hsl(var(--background))" />
      </svg>
    );
  }

  if (game === "csgo") return <SiCounterstrike aria-label="Counter-Strike logo" className={iconClass} />;
  if (game === "valorant") return <SiValorant aria-label="Valorant logo" className={iconClass} />;
  return <SiBungie aria-label="Destiny logo" className={iconClass} />;
}

function GameLabel({ game, children }: { game: GameIconName; children: React.ReactNode }) {
  return (
    <span className="font-medium">
      <span className="relative top-[1px] mr-1 inline-flex align-middle">
        <GameIcon game={game} />
      </span>
      {children}:
    </span>
  );
}

function AchievementsAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="my-3">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="flex w-full items-center justify-between rounded-md border border-neutral-200 bg-neutral-50 px-3 py-3 text-left text-sm shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-950 dark:hover:bg-neutral-900"
      >
        <span className="font-bold">Some Achievements</span>
        <span className="font-medium underline underline-offset-2">{isOpen ? "CLOSE" : "OPEN"}</span>
      </button>

      {isOpen && (
        <div className="mt-4 px-1 text-sm leading-snug sm:text-[0.95rem]">
          <div className="font-bold">Academics</div>
          <div className="mt-2 space-y-2">
            <div>↳ Created a $5k scholarship with the Dallas ISD Foundation while in HS</div>
            <div>↳ Qualified for the AIME and USAPhO olympiads</div>
          </div>

          <div className="mt-4 border-t border-neutral-200 pt-3 dark:border-neutral-700">
            <div className="font-bold">Games</div>
            <div className="mt-2 space-y-2">
              <div className="flex items-start gap-2">
                <span className="shrink-0">↳</span>
                <div>
                  <GameLabel game="bloons">Bloons TD Battles</GameLabel>{" "}
                  best finish #49 globally and #27 USA out of 1,000,000+ players
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="shrink-0">↳</span>
                <div>
                  <GameLabel game="minecraft">Minecraft</GameLabel>{" "}
                  reached peak elo of 2302 in Hypixel&apos;s “Ranked SkyWars” gamemode, ranking me 97th in the world out of 100k+ players.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="shrink-0">↳</span>
                <div>
                  <GameLabel game="csgo">CS:GO</GameLabel>{" "}
                  reached Global Elite ranking
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="shrink-0">↳</span>
                <div>
                  <GameLabel game="valorant">Valorant</GameLabel>{" "}
                  reached Immortal ranking on 2 different accounts during the 1st season after beta-release. Played with various professional players.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="shrink-0">↳</span>
                <div>
                  <GameLabel game="destiny">Destiny 2</GameLabel>{" "}
                  reached the highest PvP ranking for 3 consecutive seasons, unlocking the “Unbroken” title achieved by 0.34% of players. Ran a Discord server offering “Undefeated” runs for the Trials of Osiris game-mode.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="shrink-0">↳</span>
                <div>
                  <GameLabel game="hollow-knight">Hollow Knight</GameLabel>{" "}
                  Any% No Major Glitches speedrun time of: 1h 58m 06s
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function AboutMeAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="my-3">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="flex w-full items-center justify-between rounded-md border border-neutral-200 bg-neutral-50 px-3 py-3 text-left text-sm shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-950 dark:hover:bg-neutral-900"
      >
        <span className="font-bold">About Me</span>
        <span className="font-medium underline underline-offset-2">{isOpen ? "CLOSE" : "OPEN"}</span>
      </button>

      {isOpen && (
        <div className="mt-4 space-y-3 px-1 text-sm leading-snug sm:text-[0.95rem]">
          <p>I&apos;ve developed a generalist skillset from having a broad range of interests. I&apos;ve had experiences as an engineer &amp; researcher, UI/UX product designer, and growth/GTM roles.</p>
          <p>Outside of building, I enjoy Tennis, Snowboarding, and all things Nature.</p>
          <p>I also love sidequesting. Right now, I&apos;m trying to learn how to make beats. FL Studio pros, please reach out.</p>
        </div>
      )}
    </section>
  );
}

function StuffBuiltAccordion() {
  const [isOpen, setIsOpen] = useState(false);
  const projectLinkClass = "hover-underline-nudge text-blue-600 underline decoration-blue-600 underline-offset-2 hover:text-blue-800 dark:text-blue-400 dark:decoration-blue-400 dark:hover:text-blue-300";

  return (
    <section className="my-3">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="flex w-full items-center justify-between rounded-md border border-neutral-200 bg-neutral-50 px-3 py-3 text-left text-sm shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-950 dark:hover:bg-neutral-900"
      >
        <span className="font-bold">Stuff I&apos;ve Built</span>
        <span className="font-medium underline underline-offset-2">{isOpen ? "CLOSE" : "OPEN"}</span>
      </button>

      {isOpen && (
        <div className="mt-4 px-1 text-sm leading-snug sm:text-[0.95rem]">
          <ul className="list-disc space-y-2 pl-5">
            <li><a href="https://kingdomrush-game-b32kwoqck-ir272s-projects.vercel.app" target="_blank" rel="noreferrer" className={projectLinkClass}>Kingdom Dash</a> - a remake of one of my favorite childhood games</li>
            <li><a href="http://zoriks-labyrinth.vercel.app/" target="_blank" rel="noreferrer" className={projectLinkClass}>Zorik&apos;s Labyrinth</a> - my personal horror game (jumpscare warning)</li>
            <li><a href="https://www.exampredictor.co/" target="_blank" rel="noreferrer" className={projectLinkClass}>Exam Predictor</a> - predict your exam before test day</li>
            <li><a href="https://github.com/ir272/claudecollab" target="_blank" rel="noreferrer" className={projectLinkClass}>Claude Collab</a> - make your Claude multiplayer</li>
            <li><a href="https://github.com/ir272/codex-hud" target="_blank" rel="noreferrer" className={projectLinkClass}>Codex HUD</a> - HUD plugin for Codex, inspired by Claude-HUD</li>
            <li><a href="https://github.com/ir272/pressw-engine" target="_blank" rel="noreferrer" className={projectLinkClass}>PressW</a> - my attempt building a personal agent harness</li>
            <li><a href="https://www.npmjs.com/package/ae-mcp" target="_blank" rel="noreferrer" className={projectLinkClass}>Adobe After Effects MCP</a> - MCP server for Adobe After Effects</li>
            <li><a href="https://github.com/ir272/siren" target="_blank" rel="noreferrer" className={projectLinkClass}>Siren</a> - security for an agentic internet</li>
            <li><a href="https://github.com/ir272/ians-music" target="_blank" rel="noreferrer" className={projectLinkClass}>Ian&apos;s Music</a> - all-in-one platform to listen to music from Spotify, YouTube, TikTok, and SoundCloud</li>
            <li><a href="https://github.com/HarrisonFulford/LP_Petitions/tree/main" target="_blank" rel="noreferrer" className={projectLinkClass}>Petitions</a> - ETH app allowing &quot;petitions&quot; on tokenized asset pools for liquidity providers</li>
            <li><a href="https://github.com/ir272/termshare" target="_blank" rel="noreferrer" className={projectLinkClass}>TermShare</a> - share your terminal over the web</li>
            <li><a href="https://duels.live" target="_blank" rel="noreferrer" className={projectLinkClass}>Duel</a> - GamePigeon iOS Message Games with $ Wagers</li>
          </ul>
        </div>
      )}
    </section>
  );
}

export default function Home() {
  return (
    <main className="relative">
      <div className="relative z-10 mx-auto max-w-screen-sm px-4 sm:px-0">
        <div className="pt-8 sm:pt-12" />

        <PageHeader
          currentPage="home"
          subtitle={
            <>
              <div>I&apos;m 19, from <a href="https://www.cityofallen.org/" target="_blank" rel="noreferrer" className="hover-underline-nudge">Texas</a>. I study ECE @ <a href="https://www.utexas.edu/" target="_blank" rel="noreferrer" className="hover-underline-nudge">UT Austin</a> <Logo src="/ut.png" alt="UT Austin" /></div>
            </>
          }
        />

        <AboutMeAccordion />
        <AchievementsAccordion />
        <StuffBuiltAccordion />

        <div className="my-2 border-t border-neutral-200 dark:border-neutral-700" />

        {/* Accomplishments */}
        <div className="text-sm sm:text-[0.95rem] leading-tight space-y-2">
          <div>◆ <span className="font-bold">Experiences</span></div>
          <div>↳ Technical AI Safety @ <a href="https://bluedot.org/" target="_blank" rel="noreferrer" className="hover-underline-nudge">BlueDot Impact</a> <Logo src="/bluedot-favicon.svg" alt="BlueDot Impact" /></div>
          <div>↳ Engineering @ <a href="https://www.pressw.ai/" target="_blank" rel="noreferrer" className="hover-underline-nudge">PressW</a> <Logo src="/pressw-favicon.ico" alt="PressW" /></div>
          <div>↳ Research @ <a href="https://afarahi.github.io/" target="_blank" rel="noreferrer" className="hover-underline-nudge">UT Austin</a> <Logo src="/ut.png" alt="UT Austin" /></div>
          <div>↳ Engineering @ <a href="https://www.veevohealth.com/" target="_blank" rel="noreferrer" className="hover-underline-nudge">Veevo Health</a> <Logo src="/veevohealth.svg" alt="Veevo Health" /></div>
          <div>↳ Engineering @ <a href="https://toffee.ai/" target="_blank" rel="noreferrer" className="hover-underline-nudge">Toffee.ai</a> <Logo src="/toffee.png" alt="Toffee.ai" /></div>
          <div>↳ Co-founder @ <a href="https://www.instagram.com/lightbulb_tut/" target="_blank" rel="noreferrer" className="hover-underline-nudge">Lightbulb Tutoring</a> <Logo src="/lbt.png" alt="Lightbulb Tutoring" /></div>
        </div>

        <div className="my-3 border-t border-neutral-200 dark:border-neutral-700" />

        <PageFooter />
      </div>
    </main>
  );
}
