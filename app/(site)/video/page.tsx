"use client";

import { useState, useEffect } from "react";
import { Play, Share2, ChevronUp, ChevronDown } from "lucide-react";
import { ArticleImage } from "@/components/ui/ArticleImage";
import { formatRelativeTime } from "@/lib/utils";
import type { Video } from "@/lib/types";

export default function VideoPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    fetch("/api/videos")
      .then((r) => r.json())
      .then(setVideos);
  }, []);

  const goTo = (i: number) => {
    if (i < 0 || i >= videos.length) return;
    setCurrentIndex(i);
    setPlaying(false);
  };

  return (
    <div className="flex flex-col items-center bg-black min-h-screen">
      <div className="w-full max-w-sm relative video-feed" style={{ height: "100svh" }}>
        {videos.map((video, i) => (
          <div key={video._id} className="video-card relative flex flex-col">
            <div className="relative flex-1 overflow-hidden">
              <ArticleImage
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover"
                sizes="390px"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              <button
                className="absolute inset-0 flex items-center justify-center"
                onClick={() => setPlaying((p) => !p)}
              >
                {!playing && (
                  <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center">
                    <Play className="w-7 h-7 text-white ml-1" fill="white" />
                  </div>
                )}
              </button>

              <span className="absolute top-4 right-4 bg-black/70 text-white text-xs px-2 py-0.5 rounded font-mono">
                {video.duration}
              </span>
              <span
                className="absolute top-4 left-4 text-white text-xs font-bold px-2 py-0.5 rounded-full"
                style={{ backgroundColor: video.category.color }}
              >
                {video.category.name}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-12 p-4">
              <h2 className="text-white font-bold text-base leading-snug">{video.title}</h2>
              <p className="text-white/60 text-xs mt-1">
                {formatRelativeTime(video.publishedAt)} •{" "}
                {video.viewCount.toLocaleString("hi-IN")} views
              </p>
            </div>

            <div className="absolute bottom-4 right-3 flex flex-col gap-4">
              <button className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Share2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-white text-xs">शेयर</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 hidden md:flex">
        <button
          onClick={() => goTo(currentIndex - 1)}
          disabled={currentIndex === 0}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/30 disabled:opacity-30 flex items-center justify-center transition-colors"
        >
          <ChevronUp className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={() => goTo(currentIndex + 1)}
          disabled={currentIndex === videos.length - 1}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/30 disabled:opacity-30 flex items-center justify-center transition-colors"
        >
          <ChevronDown className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}
