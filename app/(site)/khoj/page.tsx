"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { Suspense } from "react";
import type { Article } from "@/lib/types";

async function fetchSearchResults(query: string): Promise<Article[]> {
  const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
  if (!res.ok) return [];
  return res.json();
}

function SearchResults() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";
  const [query, setQuery] = useState(q);
  const [results, setResults] = useState<Article[]>([]);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setSearched(false);
      return;
    }
    const timer = setTimeout(async () => {
      const data = await fetchSearchResults(query);
      setResults(data);
      setSearched(true);
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-[var(--foreground)] mb-6">खबर खोजें</h1>

      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted-foreground)]" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="कोई भी खबर खोजें..."
          autoFocus
          className="w-full pl-12 pr-4 py-3 text-base rounded-xl bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] outline-none focus:ring-2 ring-[var(--accent)] transition-shadow"
        />
      </div>

      {searched && (
        <div>
          <p className="text-sm text-[var(--muted-foreground)] mb-4">
            &ldquo;{query}&rdquo; के लिए {results.length} परिणाम मिले
          </p>
          {results.length === 0 ? (
            <div className="text-center py-16 text-[var(--muted-foreground)]">
              <Search className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p>कोई खबर नहीं मिली। अलग शब्द आज़माएं।</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {results.map((article) => (
                <ArticleCard key={article._id} article={article} size="medium" />
              ))}
            </div>
          )}
        </div>
      )}

      {!searched && !query && (
        <div className="text-center py-16 text-[var(--muted-foreground)]">
          <Search className="w-12 h-12 mx-auto mb-3 opacity-20" />
          <p className="text-lg">खोज शुरू करने के लिए कुछ टाइप करें</p>
          <p className="text-sm mt-1 opacity-70">बैतूल, राज्य, देश — किसी भी खबर को खोजें</p>
        </div>
      )}
    </div>
  );
}

export default function KhojPage() {
  return (
    <Suspense>
      <SearchResults />
    </Suspense>
  );
}
