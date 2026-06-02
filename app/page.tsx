import { LatestBar } from "@/components/homepage/LatestBar";
import { HeroSection } from "@/components/homepage/HeroSection";
import { TrendingSection } from "@/components/homepage/TrendingSection";
import { LatestNews } from "@/components/homepage/LatestNews";
import { CategorySection } from "@/components/homepage/CategorySection";
import { VideoPreview } from "@/components/homepage/VideoPreview";
import { categories } from "@/lib/mock-data";

function AdBanner({ label = "विज्ञापन" }: { label?: string }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-2">
      <div className="w-full h-20 bg-[var(--muted)] rounded-lg border border-dashed border-[var(--border)] flex items-center justify-center">
        <span className="text-xs text-[var(--muted-foreground)]">{label} (728×90)</span>
      </div>
    </div>
  );
}

const homepageCategories = [
  [categories[0], categories[1]], // बैतूल + राज्य
  [categories[4], categories[5]], // खेल + संस्कृति
];

export default function HomePage() {
  return (
    <div className="pb-8">
      <LatestBar />
      <HeroSection />
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
              <CategorySection key={cat.id} category={cat} limit={4} />
            ))}
          </div>
        </section>
      ))}
      <AdBanner />
      <VideoPreview />
    </div>
  );
}
