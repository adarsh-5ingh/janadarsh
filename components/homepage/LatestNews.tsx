import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { getLatestArticles } from "@/lib/queries";

export async function LatestNews() {
  const articles = await getLatestArticles(8);

  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <SectionHeader title="ताजा खबरें" href="/samachar" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {articles.map((article) => (
          <ArticleCard key={article._id} article={article} size="medium" />
        ))}
      </div>
    </section>
  );
}

export function SectionHeader({ title, href }: { title: string; href?: string }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-1 h-6 bg-[var(--accent)] rounded-full" />
        <h2 className="text-lg font-bold text-[var(--foreground)]">{title}</h2>
      </div>
      {href && (
        <Link
          href={href}
          className="flex items-center gap-1 text-sm text-[var(--accent)] hover:underline font-medium"
        >
          सभी देखें <ChevronRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
}
