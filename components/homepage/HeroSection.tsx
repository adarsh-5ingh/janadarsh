"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ArticleImage } from "@/components/ui/ArticleImage";
import { formatRelativeTime } from "@/lib/utils";
import type { Article } from "@/lib/types";

interface HeroSectionProps {
  articles: Article[];
}

export function HeroSection({ articles: pool }: HeroSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pausedRef = useRef(false);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + pool.length) % pool.length);
  }, [pool.length]);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % pool.length);
  }, [pool.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!pausedRef.current) {
        setCurrentIndex((i) => (i + 1) % pool.length);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [pool.length]);

  if (pool.length === 0) return null;

  const active = pool[currentIndex];
  const queue = pool.filter((_, i) => i !== currentIndex);
  const activeHref = `/${active.category.slug}/${active.slug}`;

  return (
    <section className="max-w-7xl mx-auto px-4 py-5">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1 h-5 bg-[var(--accent)] rounded-full" />
        <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--foreground)]">
          मुख्य समाचार
        </h2>
      </div>

      <div
        className="relative rounded-xl overflow-hidden h-[300px] sm:h-[400px] lg:h-[520px]"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
        <ArticleImage
          key={active._id}
          src={active.featuredImage}
          alt={active.title}
          fill
          priority
          className="object-cover fade-in"
          sizes="(max-width: 1024px) 100vw, 1280px"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

        {active.isBreaking && (
          <span className="absolute top-3 left-3 z-20 inline-flex items-center gap-1 text-[11px] font-bold text-white bg-[var(--accent)] px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            ब्रेकिंग
          </span>
        )}

        <button
          onClick={prev}
          aria-label="पिछला"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 items-center justify-center text-white transition-colors hidden lg:flex"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={next}
          aria-label="अगला"
          className="absolute z-20 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 items-center justify-center text-white transition-colors hidden lg:flex lg:right-[calc(34%+12px)]"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <Link
          href={activeHref}
          className="group absolute bottom-4 left-4 lg:bottom-8 lg:left-6 z-20 bg-white/90 dark:bg-black/80 rounded-2xl p-4 lg:p-6 max-w-[85%] lg:max-w-[56%] backdrop-blur-md"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block bg-[var(--accent)] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
              {active.category.name}
            </span>
            <span className="text-xs text-[var(--muted-foreground)]" suppressHydrationWarning>
              {formatRelativeTime(active.publishedAt)}
            </span>
          </div>
          <h1 className="text-lg sm:text-xl lg:text-2xl font-extrabold leading-snug line-clamp-3 text-white group-hover:text-[var(--accent)] transition-colors">
            {active.title}
          </h1>
        </Link>

        <div className="absolute top-0 right-0 bottom-0 w-[34%] bg-black/85 backdrop-blur-md hidden lg:flex flex-col border-l border-white/5">
          <div className="px-4 pt-5 pb-4 shrink-0">
            <h3 className="text-lg font-bold text-white tracking-tight leading-tight">
              और खबरें
            </h3>
          </div>

          <div className="flex-1 overflow-y-auto scrollbar-thin">
            {queue.map((article, i) => {
              const isFirst = i === 0;
              return (
                <button
                  key={article._id}
                  onClick={() => setCurrentIndex(pool.indexOf(article))}
                  className="w-full text-left group hover:bg-white/5 transition-colors"
                >
                  {isFirst ? (
                    <div className="px-3 pt-3 pb-3">
                      <div className="relative rounded-lg overflow-hidden h-[120px] w-full mb-2.5">
                        <ArticleImage
                          src={article.featuredImage}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-2">
                          <span className="text-[9px] font-bold uppercase tracking-wide text-white/70" suppressHydrationWarning>
                            {article.category.name} · {formatRelativeTime(article.publishedAt)}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-white/85 leading-snug line-clamp-2 group-hover:text-white transition-colors">
                        {article.title}
                      </p>
                    </div>
                  ) : (
                    <div className="flex gap-3 px-3 py-5">
                      <span className="text-4xl font-black text-white/15 group-hover:text-[var(--accent)] transition-colors shrink-0 leading-none w-9 tabular-nums">
                        {i + 2}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] font-bold uppercase tracking-wide mb-1" style={{ color: "var(--accent)" }}>
                          {article.category.name}
                          <span className="text-white/40 font-normal normal-case tracking-normal" suppressHydrationWarning>
                            {" "}· {formatRelativeTime(article.publishedAt)}
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-white/85 leading-snug line-clamp-2 group-hover:text-white transition-colors">
                          {article.title}
                        </p>
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
