import Link from "next/link";
import { cn, formatRelativeTime, estimateReadTime } from "@/lib/utils";
import { ArticleImage } from "@/components/ui/ArticleImage";
import type { Article } from "@/lib/types";

type Size = "small" | "medium" | "large";

interface ArticleCardProps {
  article: Article;
  size?: Size;
  className?: string;
}

function AuthorAvatar({ name, size = "sm" }: { name: string; size?: "sm" | "xs" }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-[var(--accent-subtle)] text-[var(--accent)] font-bold shrink-0",
        size === "sm" ? "w-6 h-6 text-[10px]" : "w-5 h-5 text-[9px]"
      )}
    >
      {initials}
    </span>
  );
}

export function ArticleCard({ article, size = "medium", className }: ArticleCardProps) {
  const href = `/${article.category.slug}/${article.slug}`;
  const authorName = typeof article.author === "string" ? article.author : "संपादक";

  // ── LARGE ──────────────────────────────────────────────────────────────────
  if (size === "large") {
    return (
      <Link href={href} className={cn("group block bg-[var(--card)] rounded-xl overflow-hidden", className)}>
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <ArticleImage
            src={article.featuredImage}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
          {article.isBreaking && (
            <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-[11px] font-bold text-white bg-[var(--accent)] px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              ब्रेकिंग
            </span>
          )}
        </div>
        <div className="p-4">
          <span className="text-xs font-bold uppercase tracking-wide" style={{ color: "var(--accent)" }}>
            {article.category.name}
          </span>
          <h2 className="mt-1.5 text-lg font-extrabold leading-snug line-clamp-2 text-[var(--card-foreground)] group-hover:text-[var(--accent)] transition-colors">
            {article.title}
          </h2>
          <div className="mt-2 flex items-center gap-2 text-xs text-[var(--muted-foreground)]">
            <AuthorAvatar name={authorName} size="xs" />
            <span>{authorName}</span>
            <span>·</span>
            <span suppressHydrationWarning>{formatRelativeTime(article.publishedAt)}</span>
          </div>
        </div>
      </Link>
    );
  }

  // ── SMALL ──────────────────────────────────────────────────────────────────
  if (size === "small") {
    return (
      <Link href={href} className={cn("group flex gap-3 items-center", className)}>
        <div className="relative w-20 h-16 rounded-lg overflow-hidden shrink-0">
          <ArticleImage
            src={article.featuredImage}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="80px"
          />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-[11px] font-bold uppercase tracking-wide" style={{ color: "var(--accent)" }}>
            {article.category.name}
          </span>
          <h3 className="mt-0.5 text-sm font-semibold leading-snug line-clamp-2 text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
            {article.title}
          </h3>
          <p className="mt-1 text-xs text-[var(--muted-foreground)]" suppressHydrationWarning>
            {authorName} · {formatRelativeTime(article.publishedAt)}
          </p>
        </div>
      </Link>
    );
  }

  // ── MEDIUM (default) ───────────────────────────────────────────────────────
  return (
    <Link
      href={href}
      className={cn(
        "group block bg-[var(--card)] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow",
        className
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <ArticleImage
          src={article.featuredImage}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-400 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {article.isBreaking && (
          <span className="absolute top-2 left-2 inline-flex items-center gap-1 text-[11px] font-bold text-white bg-[var(--accent)] px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            ब्रेकिंग
          </span>
        )}
      </div>
      <div className="p-3.5">
        <span className="text-[11px] font-bold uppercase tracking-wide" style={{ color: "var(--accent)" }}>
          {article.category.name}
        </span>
        <h3 className="mt-1 text-base font-bold leading-snug line-clamp-2 text-[var(--card-foreground)] group-hover:text-[var(--accent)] transition-colors">
          {article.title}
        </h3>
        <p className="mt-1.5 text-sm text-[var(--muted-foreground)] line-clamp-2 leading-relaxed">
          {article.summary}
        </p>
        <div className="mt-3 flex items-center gap-2 text-xs text-[var(--muted-foreground)]">
          <AuthorAvatar name={authorName} size="sm" />
          <span className="font-medium">{authorName}</span>
          <span className="ml-auto" suppressHydrationWarning>
            {estimateReadTime(article.summary)} · {formatRelativeTime(article.publishedAt)}
          </span>
        </div>
      </div>
    </Link>
  );
}
