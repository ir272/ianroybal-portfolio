'use client';

import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { PageFooter } from "@/components/page-footer";

interface ArticleLayoutProps {
  children: React.ReactNode;
  title: string;
  date: string;
}

export function ArticleLayout({ children, title, date }: ArticleLayoutProps) {
  // Format date from YYYY-MM-DD to "Month Day, Year"
  // Parse manually to avoid timezone issues
  const [year, month, day] = date.split('-').map(Number);
  const dateObj = new Date(year, month - 1, day);
  const formattedDate = dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  });

  return (
    <main className="relative">
      <div className="relative z-10 mx-auto max-w-screen-sm px-4 sm:px-0">
        <div className="pt-8 sm:pt-12" />

        <PageHeader currentPage="writing" />

        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-extralight mb-3">
            {title}
          </h1>
          <div className="text-neutral-500 dark:text-neutral-500 font-extralight text-sm">
            {formattedDate}
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-neutral dark:prose-invert max-w-none">
          {children}
        </article>

        <div className="my-8 border-t border-neutral-200 dark:border-neutral-700" />

        {/* Back to Writing */}
        <div className="text-sm sm:text-[0.95rem] leading-tight my-6">
          <Link href="/writing" className="hover-underline-nudge font-extralight">
            ← Back to writing
          </Link>
        </div>

        <div className="my-6 border-t border-neutral-200 dark:border-neutral-700" />

        <PageFooter />
      </div>
    </main>
  );
}
