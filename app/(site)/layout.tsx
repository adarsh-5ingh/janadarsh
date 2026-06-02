import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BreakingNewsTicker } from "@/components/layout/BreakingNewsTicker";
import { getCategories } from "@/lib/queries";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const categories = await getCategories();

  return (
    <>
      <Header categories={categories} />
      <BreakingNewsTicker />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
