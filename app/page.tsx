import { LatestBar } from "@/components/homepage/LatestBar";
import { HeroSection } from "@/components/homepage/HeroSection";
import { TrendingSection } from "@/components/homepage/TrendingSection";
import { LatestNews } from "@/components/homepage/LatestNews";
import { CategorySection } from "@/components/homepage/CategorySection";
import { VideoPreview } from "@/components/homepage/VideoPreview";
import { getCategories, getFeaturedArticles, getLatestArticles } from "@/lib/queries";

function AdBanner({ label = "विज्ञापन" }: { label?: string }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-2">
      <div className="w-full h-20 bg-[var(--muted)] rounded-lg border border-dashed border-[var(--border)] flex items-center justify-center">
        <span className="text-xs text-[var(--muted-foreground)]">{label} (728×90)</span>
      </div>
    </div>
  );
}

export default async function HomePage() {
  const [featured, latest, categories] = await Promise.all([
    getFeaturedArticles(),
    getLatestArticles(8),
    getCategories(),
  ]);

  const heroArticles = (() => {
    const seen = new Set<string>();
    const pool = [];
    for (const a of [...featured, ...latest]) {
      if (!seen.has(a._id)) {
        seen.add(a._id);
        pool.push(a);
      }
    }
    return pool;
  })();

  const homepageCategories = categories.length >= 6
    ? [[categories[0], categories[1]], [categories[4], categories[5]]]
    : categories.length >= 2
    ? [[categories[0], categories[1]]]
    : [];

  return (
    <div className="pb-8">
      <LatestBar />
      <HeroSection articles={heroArticles} />
      <TrendingSection />
      <AdBanner />
      <LatestNews />
      <div className="max-w-7xl mx-auto px-4">
        <hr className="border-[var(--border)]" />
      </div>
      {homepageCategories.map((pair, i) => (
        <section key={i} className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pair.map((cat) => (
              <CategorySection key={cat._id} category={cat} limit={4} />
            ))}
          </div>
        </section>
      ))}
      <AdBanner />
      <VideoPreview />
    </div>
  );
}
