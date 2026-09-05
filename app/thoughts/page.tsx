import fs from 'fs';
import path from 'path';
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { PageFooter } from "@/components/page-footer";

interface Article {
  slug: string;
  title: string;
  date: string | null; // ISO date, or null for living entries
}

/**
 * Get all articles by scanning the thoughts directory
 */
function getArticles(): Article[] {
  const thoughtsDir = path.join(process.cwd(), 'app', 'thoughts');

  // Get all subdirectories in the thoughts folder
  const entries = fs.readdirSync(thoughtsDir, { withFileTypes: true });
  const articleDirs = entries
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name);

  const articles: Article[] = [];

  for (const slug of articleDirs) {
    const mdxPath = path.join(thoughtsDir, slug, 'page.mdx');

    // Check if page.mdx exists in this directory
    if (!fs.existsSync(mdxPath)) {
      continue;
    }

    // Read the MDX file to extract metadata
    const content = fs.readFileSync(mdxPath, 'utf-8');

    // Extract metadata from the file
    const titleMatch = content.match(/title:\s*(['"])(.+?)\1/);
    const dateMatch = content.match(/date:\s*(['"])(.+?)\1/);

    if (titleMatch) {
      articles.push({
        slug,
        title: titleMatch[2],
        date: dateMatch ? dateMatch[2] : null
      });
    }
  }

  // Sort: undated (living) entries first, then newest first
  articles.sort((a, b) => {
    if (!a.date && !b.date) return a.title.localeCompare(b.title);
    if (!a.date) return -1;
    if (!b.date) return 1;
    return b.date.localeCompare(a.date);
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

function ArticleRow({ article }: { article: Article }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <Link
        href={`/thoughts/${article.slug}`}
        className="hover-underline-nudge text-sm sm:text-[0.95rem]"
      >
        {article.title}
      </Link>
      <span className="text-neutral-500 dark:text-neutral-500 font-extralight text-xs sm:text-sm shrink-0">
        {article.date ? formatDate(article.date) : <span aria-label="Living entry">...</span>}
      </span>
    </div>
  );
}

export default function Thoughts() {
  const articles = getArticles();
  const livingArticles = articles.filter((a) => !a.date);
  const datedArticles = articles.filter((a) => a.date);
  return (
    <main className="relative">
      <div className="relative z-10 mx-auto max-w-screen-sm px-4 sm:px-0">
        <div className="pt-8 sm:pt-12" />

        <PageHeader currentPage="thoughts" />

        {/* Living entries (no date), separated from dated ones by a divider */}
        {livingArticles.length > 0 && (
          <>
            <div className="space-y-4">
              {livingArticles.map((article) => (
                <ArticleRow key={article.slug} article={article} />
              ))}
            </div>
            <div className="my-4 border-t border-neutral-200 dark:border-neutral-700" />
          </>
        )}

        {/* Dated entries */}
        <div className="space-y-4">
          {datedArticles.map((article) => (
            <ArticleRow key={article.slug} article={article} />
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
