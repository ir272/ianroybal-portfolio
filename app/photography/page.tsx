'use client';

import Image from "next/image";
import Link from "next/link";
import { Mail, Github, Twitter, Linkedin } from "lucide-react";
import { useNavigationBounce } from "../../lib/useNavigationBounce";
import { ThemeToggle } from "@/components/theme-toggle";
import { photoEntries } from "@/lib/photo-data";

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

// Photography images with their actual dimensions
const photographyImages = photoEntries.map(({ filename, width, height, id }) => ({
  id,
  filename,
  width,
  height,
}));

export default function Photography() {
  const { shouldBounce } = useNavigationBounce('photography');

  return (
    <main className="relative">
      <div className="relative z-10 mx-auto max-w-screen-sm px-4 sm:px-0">
        <div className="pt-16 sm:pt-24" />

        {/* Header */}
        <div className="text-sm sm:text-[0.95rem] leading-tight space-y-2">
          <div className="flex items-center justify-between">
            <h1 className="underline underline-offset-[3px] font-extralight">◆ Ian Roybal</h1>
            <div className="flex items-center gap-2 font-extralight">
              <Link href="/" className={`hover-underline-nudge ${shouldBounce('home') ? 'nav-bounce' : ''}`}>Home</Link>
              <span className="text-neutral-400 dark:text-neutral-600">|</span>
              <Link href="/projects" className={`hover-underline-nudge ${shouldBounce('projects') ? 'nav-bounce-delayed-1' : ''}`}>Projects</Link>
              <span className="text-neutral-400 dark:text-neutral-600">|</span>
              <Link href="/about" className={`hover-underline-nudge ${shouldBounce('about') ? 'nav-bounce-delayed-2' : ''}`}>About me</Link>
            </div>
          </div>
          <div>↳ Photos coming soon!</div>
        </div>

        <div className="my-6 border-t border-neutral-200 dark:border-neutral-700" />

        {/* Photo Grid */}
        <div className="space-y-4 sm:space-y-6">
          {/* Regular photos in rows */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            {/* Left Column */}
            <div className="flex-1">
              {photographyImages.filter((_, index) => index % 2 === 0 && index < photographyImages.length - 1).map((image, index) => {
                const photoId = image.id;
                const aspectRatio = image.width / image.height;
                
                return (
                  <Link 
                    key={index * 2} 
                    href={`/photography/${photoId}`}
                    className="cursor-pointer block mb-5 sm:mb-[2.27rem] last:mb-0"
                  >
                    <div className="relative overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700 photo-hover">
                      <div style={{ aspectRatio: aspectRatio }}>
                        <Image
                          src={`/${image.filename}`}
                          alt={`Photo ${index * 2 + 1}`}
                          width={image.width}
                          height={image.height}
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            
            {/* Right Column */}
            <div className="flex-1">
              {photographyImages.filter((_, index) => index % 2 === 1 && index < photographyImages.length - 1).map((image, index) => {
                const photoId = image.id;
                const aspectRatio = image.width / image.height;
                
                return (
                  <Link 
                    key={index * 2 + 1} 
                    href={`/photography/${photoId}`}
                    className="cursor-pointer block mb-4 sm:mb-6 last:mb-0"
                  >
                    <div className="relative overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700 photo-hover">
                      <div style={{ aspectRatio: aspectRatio }}>
                        <Image
                          src={`/${image.filename}`}
                          alt={`Photo ${index * 2 + 2}`}
                          width={image.width}
                          height={image.height}
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          
          {/* Last photo spanning both columns */}
          {photographyImages.length > 0 && (
            <Link
              href={`/photography/${photographyImages[photographyImages.length - 1].id}`}
              className="cursor-pointer block"
            >
              <div className="relative overflow-hidden rounded-lg border border-neutral-200 photo-hover">
                <div style={{ aspectRatio: photographyImages[photographyImages.length - 1].width / photographyImages[photographyImages.length - 1].height }}>
                  <Image
                    src={`/${photographyImages[photographyImages.length - 1].filename}`}
                    alt={`Photo ${photographyImages.length}`}
                    width={photographyImages[photographyImages.length - 1].width}
                    height={photographyImages[photographyImages.length - 1].height}
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 100vw"
                  />
                </div>
              </div>
            </Link>
          )}
        </div>

        <div className="my-6 border-t border-neutral-200 dark:border-neutral-700" />

        {/* Back to Home */}
        <div className="text-sm sm:text-[0.95rem] leading-tight my-6">
          <Link href="/" className="hover-underline-nudge font-extralight">
            ← Back to home
          </Link>
        </div>

        <div className="my-6 border-t border-neutral-200 dark:border-neutral-700" />

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
