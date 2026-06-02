import Link from "next/link";
import { Newspaper, Facebook, Youtube, Send } from "lucide-react";
import { categories } from "@/lib/mock-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--primary)] text-[var(--primary-foreground)] mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center">
                <Newspaper className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold">जन आदर्श</span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              हकीकत जैसी खबर वैसी।<br />
              बैतूल जिले और मध्य प्रदेश की विश्वसनीय खबरें।
            </p>
            {/* Social links */}
            <div className="flex gap-3 mt-4">
              <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="YouTube" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Telegram" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Send className="w-4 h-4" />
              </a>
              {/* WhatsApp icon */}
              <a href="#" aria-label="WhatsApp" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider opacity-60">श्रेणियां</h3>
            <div className="grid grid-cols-2 gap-1.5">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/${cat.slug}`}
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {cat.name}
                </Link>
              ))}
              <Link href="/video" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                वीडियो
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider opacity-60">जानकारी</h3>
            <div className="flex flex-col gap-1.5">
              {[
                { label: "हमारे बारे में", href: "/about" },
                { label: "संपर्क करें", href: "/contact" },
                { label: "गोपनीयता नीति", href: "/privacy" },
                { label: "विज्ञापन", href: "/advertise" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs opacity-50">
          © {year} जन आदर्श। सर्वाधिकार सुरक्षित। बैतूल, मध्य प्रदेश।
        </div>
      </div>
    </footer>
  );
}
