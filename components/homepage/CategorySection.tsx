import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { getArticlesByCategory, type Category } from "@/lib/mock-data";

interface CategorySectionProps {
  category: Category;
  limit?: number;
}

export function CategorySection({ category, limit = 3 }: CategorySectionProps) {
  const articles = getArticlesByCategory(category.slug, limit);
  if (articles.length === 0) return null;

  return (
    <div>
      {/* Section header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-1 h-6 rounded-full" style={{ backgroundColor: category.color }} />
          <h2 className="text-lg font-bold text-[var(--foreground)]">{category.name}</h2>
        </div>
        <Link
          href={`/${category.slug}`}
          className="flex items-center gap-1 text-sm font-medium hover:underline"
          style={{ color: category.color }}
        >
          सभी देखें <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Featured article + 2 small */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First article — medium */}
        {articles[0] && <ArticleCard article={articles[0]} size="medium" />}
        {/* 2nd & 3rd — small stacked */}
        {articles.slice(1, 3).length > 0 && (
          <div className="flex flex-col gap-4">
            {articles.slice(1, 4).map((a) => (
              <ArticleCard key={a.id} article={a} size="small" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
