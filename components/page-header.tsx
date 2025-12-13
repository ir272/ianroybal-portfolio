'use client';

import Link from "next/link";
import { useNavigationBounce } from "../lib/useNavigationBounce";

interface PageHeaderProps {
  currentPage?: 'home' | 'projects' | 'writing';
  subtitle?: React.ReactNode;
}

export function PageHeader({ currentPage, subtitle }: PageHeaderProps) {
  const { shouldBounce } = useNavigationBounce(currentPage || 'home');

  return (
    <>
      <div className="text-sm sm:text-[0.95rem] leading-tight space-y-2">
        <div className="flex items-center justify-between">
          <h1 className="underline underline-offset-[3px] font-extralight">◆ Ian Roybal</h1>
          <div className="flex items-center gap-2 font-extralight">
            <Link href="/" className={`hover-underline-nudge ${shouldBounce('home') ? 'nav-bounce' : ''}`}>Home</Link>
            <span className="text-neutral-400 dark:text-neutral-600">|</span>
            <Link href="/projects" className={`hover-underline-nudge ${shouldBounce('projects') ? 'nav-bounce-delayed-1' : ''}`}>Projects</Link>
            <span className="text-neutral-400 dark:text-neutral-600">|</span>
            <Link href="/writing" className={`hover-underline-nudge ${shouldBounce('writing') ? 'nav-bounce-delayed-1' : ''}`}>Writing</Link>
          </div>
        </div>
        {subtitle && <div>{subtitle}</div>}
      </div>

      <div className="my-6 border-t border-neutral-200 dark:border-neutral-700" />
    </>
  );
}
