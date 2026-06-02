import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Clock, Eye, User } from "lucide-react";
import { ShareButtons } from "@/components/articles/ShareButtons";
import { ArticleCard } from "@/components/articles/ArticleCard";
import {
  articles,
  categories,
  getArticleBySlug,
  getArticlesByCategory,
} from "@/lib/mock-data";
import { formatRelativeTime, estimateReadTime } from "@/lib/utils";

interface ArticlePageProps {
  params: Promise<{ category: string; slug: string }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { category: catSlug, slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article || article.category.slug !== catSlug) notFound();

  const related = getArticlesByCategory(catSlug, 4).filter((a) => a.id !== article.id).slice(0, 3);
  const articleUrl = `https://janadarsh.com/${catSlug}/${slug}`;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main article content */}
        <article className="lg:col-span-2">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1 text-xs text-[var(--muted-foreground)] mb-4">
            <Link href="/" className="hover:text-[var(--accent)]">होम</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={`/${catSlug}`} className="hover:text-[var(--accent)]">
              {article.category.name}
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="line-clamp-1">{article.title}</span>
          </nav>

          {/* Category + Breaking */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--accent)" }}>
              {article.category.name}
            </span>
            {article.isBreaking && (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-white bg-[var(--accent)] px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                ब्रेकिंग
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight text-[var(--foreground)]">
            {article.title}
          </h1>

          {/* Summary */}
          <p className="mt-3 text-base text-[var(--muted-foreground)] leading-relaxed border-l-4 border-[var(--accent)] pl-4">
            {article.summary}
          </p>

          {/* Meta */}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-[var(--muted-foreground)]">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {article.author}
            </span>
            <span className="flex items-center gap-1.5" suppressHydrationWarning>
              <Clock className="w-4 h-4" />
              {formatRelativeTime(article.publishedAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Eye className="w-4 h-4" />
              {article.viewCount.toLocaleString("hi-IN")} बार पढ़ा
            </span>
            <span className="text-xs">{estimateReadTime(article.content)}</span>
          </div>

          {/* Share buttons (top) */}
          <div className="mt-4 pb-4 border-b border-[var(--border)]">
            <ShareButtons title={article.title} url={articleUrl} />
          </div>

          {/* Featured image */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden mt-6">
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
          </div>

          {/* Article body */}
          <div className="mt-6 prose prose-lg max-w-none text-[var(--foreground)] leading-relaxed space-y-4">
            {article.content.split("\n\n").map((para, i) => (
              <p key={i} className="text-base sm:text-lg leading-9">
                {para}
              </p>
            ))}
          </div>

          {/* Tags */}
          {article.tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--muted)] text-[var(--muted-foreground)]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Share buttons (bottom) */}
          <div className="mt-8 p-4 bg-[var(--muted)] rounded-xl">
            <p className="text-sm font-medium text-[var(--foreground)] mb-3">
              यह खबर अपने दोस्तों के साथ शेयर करें
            </p>
            <ShareButtons title={article.title} url={articleUrl} />
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Related from same category */}
          {related.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-5 bg-[var(--accent)] rounded-full" />
                <h3 className="font-bold text-[var(--foreground)]">संबंधित खबरें</h3>
              </div>
              <div className="space-y-4">
                {related.map((a) => (
                  <ArticleCard key={a.id} article={a} size="small" />
                ))}
              </div>
            </div>
          )}

          {/* Ad placeholder */}
          <div className="w-full h-64 bg-[var(--muted)] rounded-xl border border-dashed border-[var(--border)] flex items-center justify-center">
            <span className="text-xs text-[var(--muted-foreground)]">विज्ञापन (300×250)</span>
          </div>
        </aside>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return articles.map((a) => ({
    category: a.category.slug,
    slug: a.slug,
  }));
}
