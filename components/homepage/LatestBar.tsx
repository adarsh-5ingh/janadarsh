import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import { getLatestArticles } from "@/lib/mock-data";
import { formatRelativeTime } from "@/lib/utils";

export function LatestBar() {
  const latest = getLatestArticles(3);

  return (
    <div className="border-b border-[var(--border)] bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 pt-3 pb-3">
        {/* Top row: label + view all */}
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--muted-foreground)]">
            ताज़ा खबर
          </span>
          <Link
            href="/"
            className="text-xs font-semibold text-[var(--accent)] hover:underline whitespace-nowrap"
          >
            सभी देखें →
          </Link>
        </div>

        {/* Cards row */}
        <div className="flex items-center divide-x divide-[var(--border)] overflow-hidden">
          {latest.map((article, i) => {
            const href = `/${article.category.slug}/${article.slug}`;
            return (
              <Link
                key={article.id}
                href={href}
                className={`group flex items-center gap-3 px-4 first:pl-0 min-w-0 flex-1 hover:text-[var(--accent)] transition-colors ${i > 0 ? "hidden sm:flex" : ""}`}
              >
                <div className="relative w-20 h-16 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src={article.featuredImage}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold leading-snug line-clamp-3 text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                    {article.title}
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-[11px] text-[var(--muted-foreground)]">
                    <Clock className="w-3 h-3 shrink-0" />
                    <span suppressHydrationWarning>{formatRelativeTime(article.publishedAt)}</span>
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
