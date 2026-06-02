import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Play } from "lucide-react";
import { videos } from "@/lib/mock-data";
import { formatRelativeTime } from "@/lib/utils";

export function VideoPreview() {
  const preview = videos.slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 bg-[var(--accent)] rounded-full" />
          <h2 className="text-lg font-bold text-[var(--foreground)]">वीडियो समाचार</h2>
        </div>
        <Link
          href="/video"
          className="flex items-center gap-1 text-sm text-[var(--accent)] hover:underline font-medium"
        >
          सभी वीडियो <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {preview.map((video) => (
          <Link
            key={video.id}
            href={`/video`}
            className="group block bg-[var(--card)] rounded-xl overflow-hidden border border-[var(--border)] hover:shadow-md transition-shadow"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover transition-transform duration-400 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-black/60 flex items-center justify-center group-hover:bg-[var(--accent)] transition-colors">
                  <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                </div>
              </div>
              {/* Duration */}
              <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded font-mono">
                {video.duration}
              </span>
            </div>
            <div className="p-3">
              <h3 className="text-sm font-semibold leading-snug line-clamp-2 text-[var(--card-foreground)]">
                {video.title}
              </h3>
              <p className="mt-1 text-xs text-[var(--muted-foreground)]">
                {formatRelativeTime(video.publishedAt)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
