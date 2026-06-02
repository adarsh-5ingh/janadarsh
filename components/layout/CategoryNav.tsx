"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/lib/mock-data";

const navItems = [
  { label: "सभी", href: "/" },
  ...categories.map((c) => ({ label: c.name, href: `/${c.slug}` })),
  { label: "वीडियो", href: "/video" },
];

export function CategoryNav() {
  const pathname = usePathname();

  return (
    <div className="border-b border-[var(--border)] bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-none py-2">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`shrink-0 px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive
                    ? "bg-[var(--accent)] text-white"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
