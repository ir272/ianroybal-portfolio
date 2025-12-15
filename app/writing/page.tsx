import fs from 'fs';
import path from 'path';
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { PageFooter } from "@/components/page-footer";

interface Article {
  slug: string;
  title: string;
  date: string;
}

/**
 * Get all articles by scanning the writing directory
 */
function getArticles(): Article[] {
  const writingDir = path.join(process.cwd(), 'app', 'writing');

  // Get all subdirectories in the writing folder
  const entries = fs.readdirSync(writingDir, { withFileTypes: true });
  const articleDirs = entries
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name);

  const articles: Article[] = [];

  for (const slug of articleDirs) {
    const mdxPath = path.join(writingDir, slug, 'page.mdx');

    // Check if page.mdx exists in this directory
    if (!fs.existsSync(mdxPath)) {
      continue;
    }

    // Read the MDX file to extract metadata
    const content = fs.readFileSync(mdxPath, 'utf-8');

    // Extract metadata from the file
    const titleMatch = content.match(/title:\s*['"](.+?)['"]/);
    const dateMatch = content.match(/date:\s*['"](.+?)['"]/);

    if (titleMatch && dateMatch) {
      articles.push({
        slug,
        title: titleMatch[1],
        date: formatDate(dateMatch[1])
      });
    }
  }

  // Sort articles by date (newest first)
  articles.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  return articles;
}

/**
 * Format date from YYYY-MM-DD to "Mon D, YYYY"
 * Uses UTC to avoid timezone issues
 */
function formatDate(dateString: string): string {
  const [year, month, day] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC'
  });
}

export default function Writing() {
  const articles = getArticles();
  return (
    <main className="relative">
      <div className="relative z-10 mx-auto max-w-screen-sm px-4 sm:px-0">
        <div className="pt-8 sm:pt-12" />

        <PageHeader currentPage="writing" />

        {/* Articles List */}
        <div className="space-y-4">
          {articles.map((article) => (
            <div
              key={article.slug}
              className="flex items-baseline justify-between gap-4"
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
