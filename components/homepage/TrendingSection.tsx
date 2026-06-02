import Link from "next/link";
import { TrendingUp, Eye } from "lucide-react";
import { getTrendingArticles } from "@/lib/queries";
import { formatRelativeTime } from "@/lib/utils";

export async function TrendingSection() {
  const trending = await getTrendingArticles(5);

  return (
    <section className="max-w-7xl mx-auto px-4 py-4">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1 h-5 bg-[var(--accent)] rounded-full" />
        <TrendingUp className="w-4 h-4" style={{ color: "var(--accent)" }} />
        <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--foreground)]">
          ट्रेंडिंग
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-px bg-[var(--border)] rounded-xl overflow-hidden border border-[var(--border)]">
        {trending.map((article, i) => {
          const href = `/${article.category.slug}/${article.slug}`;
          const isTop = i === 0;
          return (
            <Link
              key={article._id}
              href={href}
              className={`group flex flex-col gap-3 p-4 bg-[var(--card)] hover:bg-[var(--muted)] transition-colors ${isTop ? "border-t-2" : ""}`}
              style={isTop ? { borderTopColor: "var(--accent)" } : {}}
            >
              <div className="flex items-start justify-between">
                <span
                  className="text-5xl font-black leading-none tabular-nums"
                  style={{ color: isTop ? "var(--accent)" : "var(--border)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex items-center gap-1 text-[10px] text-[var(--muted-foreground)] mt-1" suppressHydrationWarning>
                  <Eye className="w-3 h-3" />
                  {article.viewCount.toLocaleString("hi-IN")}
                </span>
              </div>

              <div className="flex-1">
                <span className="text-[10px] font-bold uppercase tracking-wide block mb-1" style={{ color: "var(--accent)" }}>
                  {article.category.name}
                </span>
                <p className="text-sm font-semibold leading-snug line-clamp-3 text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                  {article.title}
                </p>
              </div>

              <span className="text-[11px] text-[var(--muted-foreground)]" suppressHydrationWarning>
                {formatRelativeTime(article.publishedAt)}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
