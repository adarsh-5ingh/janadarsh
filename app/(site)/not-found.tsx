import Link from "next/link";
import { Newspaper } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-16 h-16 rounded-2xl bg-[var(--muted)] flex items-center justify-center mb-6">
        <Newspaper className="w-8 h-8 text-[var(--muted-foreground)]" />
      </div>
      <h1 className="text-6xl font-bold text-[var(--accent)] mb-3">404</h1>
      <h2 className="text-xl font-bold text-[var(--foreground)] mb-2">पृष्ठ नहीं मिला</h2>
      <p className="text-[var(--muted-foreground)] mb-8 max-w-md">
        आप जो पृष्ठ खोज रहे हैं वह उपलब्ध नहीं है। हो सकता है कि यह हटा दिया गया हो या लिंक गलत हो।
      </p>
      <div className="flex gap-3">
        <Link
          href="/"
          className="px-5 py-2.5 bg-[var(--accent)] text-white rounded-lg font-medium hover:bg-[var(--accent)]/90 transition-colors"
        >
          होम पर जाएं
        </Link>
        <Link
          href="/khoj"
          className="px-5 py-2.5 bg-[var(--muted)] text-[var(--foreground)] rounded-lg font-medium hover:bg-[var(--border)] transition-colors"
        >
          खबर खोजें
        </Link>
      </div>
    </div>
  );
}
