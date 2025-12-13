'use client';

import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { PageFooter } from "@/components/page-footer";

// Temporary placeholder - will be replaced with filesystem scanning
const articles = [
  {
    slug: "example-article",
    title: "Example Article",
    date: "Mar 1, 2025"
  }
];

export default function Writing() {
  return (
    <main className="relative">
      <div className="relative z-10 mx-auto max-w-screen-sm px-4 sm:px-0">
        <div className="pt-16 sm:pt-24" />

        <PageHeader currentPage="writing" subtitle="↳ Writing" />

        {/* Articles List */}
        <div className="space-y-4">
          {articles.map((article, index) => (
            <div
              key={article.slug}
              className="flex items-baseline justify-between gap-4"
              style={{
                animationDelay: `${index * 100}ms`,
                opacity: 0,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <Link
                href={`/writing/${article.slug}`}
                className="hover-underline-nudge text-sm sm:text-[0.95rem]"
              >
                {article.title}
              </Link>
              <span className="text-neutral-500 dark:text-neutral-500 font-extralight text-xs sm:text-sm shrink-0">
                {article.date}
              </span>
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
