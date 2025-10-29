'use client';

import Image from "next/image";
import Link from "next/link";
import { PhotoData } from "./page";
import { useNavigationBounce } from "../../../lib/useNavigationBounce";

interface PhotoPageClientProps {
  photoData: PhotoData;
  photoIndex: number;
}

export function PhotoPageClient({ photoData, photoIndex }: PhotoPageClientProps) {
  const { shouldBounce } = useNavigationBounce('photography');

  return (
    <main className="relative">
      <div className="relative z-10 mx-auto max-w-screen-sm px-4 sm:px-0">
        <div className="pt-16 sm:pt-24" />

        {/* Header */}
        <div className="text-sm sm:text-[0.95rem] leading-tight space-y-2">
          <div className="flex items-center justify-between">
            <h1 className="underline underline-offset-[3px] font-extralight">◆ Photography</h1>
            <div className="flex items-center gap-2 font-extralight">
              <Link href="/" className={`hover-underline-nudge ${shouldBounce('home') ? 'nav-bounce' : ''}`}>Home</Link>
              <span className="text-neutral-400 dark:text-neutral-600">|</span>
              <Link href="/projects" className={`hover-underline-nudge ${shouldBounce('projects') ? 'nav-bounce-delayed-1' : ''}`}>Projects</Link>
              <span className="text-neutral-400 dark:text-neutral-600">|</span>
              <Link href="/about" className={`hover-underline-nudge ${shouldBounce('about') ? 'nav-bounce-delayed-2' : ''}`}>About me</Link>
            </div>
          </div>
          <div>↳ {photoData.caption}</div>
        </div>

        <div className="my-6 border-t border-neutral-200 dark:border-neutral-700" />

        {/* Photo Display */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700">
            <div style={{ aspectRatio: photoData.width / photoData.height }}>
              <Image
                src={`/${photoData.filename}`}
                alt={`Photo ${photoIndex}`}
                width={photoData.width}
                height={photoData.height}
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>

        <div className="my-6 border-t border-neutral-200 dark:border-neutral-700" />

        {/* Navigation */}
        <div className="text-sm sm:text-[0.95rem] leading-tight space-y-2">
          <div className="flex items-center gap-4">
            <Link href="/photography" className="hover-underline-nudge font-extralight">
              ← Back to gallery
            </Link>
            <span className="text-neutral-400">|</span>
            <Link href="/" className="hover-underline-nudge font-extralight">
              ← Back to home
            </Link>
          </div>
        </div>

        <div className="pt-16 sm:pt-24" />
      </div>
    </main>
  );
}
