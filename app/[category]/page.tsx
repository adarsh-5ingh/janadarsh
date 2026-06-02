import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { categories, getArticlesByCategory } from "@/lib/mock-data";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const articles = getArticlesByCategory(slug);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1.5 h-8 rounded-full" style={{ backgroundColor: category.color }} />
          <h1 className="text-3xl font-bold text-[var(--foreground)]">{category.name}</h1>
        </div>
        <p className="text-[var(--muted-foreground)] ml-5">
          {category.name} से जुड़ी ताजा खबरें
        </p>
      </div>

      {articles.length === 0 ? (
        <div className="text-center py-16 text-[var(--muted-foreground)]">
          इस श्रेणी में अभी कोई खबर नहीं है।
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} size="medium" />
          ))}
        </div>
      )}

      {/* Pagination placeholder */}
      {articles.length > 0 && (
        <div className="flex justify-center gap-2 mt-10">
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                n === 1
                  ? "bg-[var(--accent)] text-white"
                  : "bg-[var(--muted)] text-[var(--foreground)] hover:bg-[var(--border)]"
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}
