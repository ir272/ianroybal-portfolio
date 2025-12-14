'use client';

import Link from "next/link";
import { Allura } from "next/font/google";
import { useNavigationBounce } from "../lib/useNavigationBounce";

const allura = Allura({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

interface PageHeaderProps {
  currentPage?: 'home' | 'projects' | 'writing';
  subtitle?: React.ReactNode;
}

export function PageHeader({ currentPage, subtitle }: PageHeaderProps) {
  const { shouldBounce } = useNavigationBounce(currentPage || 'home');

  return (
    <>
      <div className="text-sm sm:text-[0.95rem] leading-tight space-y-2 mb-3">
        <div className="flex items-baseline justify-between">
          <h1 className={`${allura.className} text-3xl leading-none`}>Ian Roybal</h1>
          <div className="flex items-baseline gap-2 font-extralight">
            <Link href="/" className={`hover-underline-nudge ${shouldBounce('home') ? 'nav-bounce' : ''}`}>Home</Link>
            <span className="text-neutral-400 dark:text-neutral-600">|</span>
            <Link href="/projects" className={`hover-underline-nudge ${shouldBounce('projects') ? 'nav-bounce-delayed-1' : ''}`}>Projects</Link>
            <span className="text-neutral-400 dark:text-neutral-600">|</span>
            <Link href="/writing" className={`hover-underline-nudge ${shouldBounce('writing') ? 'nav-bounce-delayed-1' : ''}`}>Writing</Link>
          </div>
        </div>
        {subtitle && <div>{subtitle}</div>}
      </div>
    </>
  );
}
