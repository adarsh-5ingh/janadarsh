import { getBreakingNewsItems } from "@/lib/queries";

export async function BreakingNewsTicker() {
  const items = await getBreakingNewsItems();
  if (items.length === 0) return null;

  const doubled = [...items, ...items];

  return (
    <div className="bg-[var(--accent)] text-white flex items-center overflow-hidden h-9">
      <div className="shrink-0 bg-black/20 px-3 h-full flex items-center gap-1.5 font-bold text-xs tracking-wider uppercase z-10">
        <span className="inline-block w-2 h-2 rounded-full bg-white animate-pulse" />
        ब्रेकिंग
      </div>

      <div className="flex-1 overflow-hidden relative marquee-container">
        <div className="flex animate-marquee gap-0">
          {doubled.map((item, i) => (
            <span key={`${item._id}-${i}`} className="text-sm font-medium whitespace-nowrap px-8">
              {item.text}
              <span className="mx-6 opacity-50">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
