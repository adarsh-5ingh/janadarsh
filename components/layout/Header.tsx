"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "@/components/ui/ThemeProvider";
import { CategoryNav } from "@/components/layout/CategoryNav";


export function Header() {
  const { theme, toggle } = useTheme();
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--background)]">
      {/* Row 1 — main header: logo + actions */}
      <div className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen((p) => !p)}
            className="lg:hidden p-2 -ml-2 rounded-md text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tight text-[var(--foreground)]">
              जन आदर्श
            </span>
            <span className="text-[10px] text-[var(--muted-foreground)] tracking-widest uppercase">
              बैतूल की आवाज़
            </span>
          </Link>

          {/* Right: search + theme */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setSearchOpen((p) => !p)}
              className="p-2 rounded-md hover:bg-[var(--muted)] transition-colors text-[var(--foreground)]"
              aria-label="खोज"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={toggle}
              className="p-2 rounded-md hover:bg-[var(--muted)] transition-colors text-[var(--foreground)]"
              aria-label="थीम बदलें"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="px-4 pb-3 bg-[var(--background)]">
            <form action="/khoj" method="get" className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)]" />
                <input
                  type="text"
                  name="q"
                  placeholder="खबर खोजें..."
                  autoFocus
                  className="w-full pl-9 pr-4 py-2 bg-[var(--muted)] rounded-lg text-sm outline-none focus:ring-2 ring-[var(--accent)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]"
                />
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Row 3 — category pills */}
      <CategoryNav />

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="lg:hidden border-b border-[var(--border)] bg-[var(--background)] px-4 py-3">
          <div className="text-xs text-[var(--muted-foreground)] mb-2 font-medium uppercase tracking-wider">श्रेणियां</div>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "होम", href: "/" },
              { label: "बैतूल", href: "/betul" },
              { label: "राज्य", href: "/rajya" },
              { label: "देश", href: "/desh" },
              { label: "खेल", href: "/khel" },
              { label: "संस्कृति", href: "/sanskriti" },
              { label: "वीडियो", href: "/video" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-1.5 text-sm font-medium rounded-full bg-[var(--muted)] hover:bg-[var(--border)] text-[var(--foreground)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
