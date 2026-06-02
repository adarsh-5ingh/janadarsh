"use client";

import Image from "next/image";
import { CldImage } from "next-cloudinary";
import type { CloudinaryAsset } from "@/lib/types";

interface ArticleImageProps {
  src?: CloudinaryAsset | string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

export function ArticleImage({
  src,
  alt,
  fill,
  width,
  height,
  sizes,
  priority,
  className,
}: ArticleImageProps) {
  if (!src) {
    return (
      <div
        className={`bg-[var(--muted)] ${className ?? ""}`}
        style={fill ? { position: "absolute", inset: 0 } : { width, height }}
      />
    );
  }

  // Cloudinary asset object from Sanity plugin
  if (typeof src === "object" && src.public_id) {
    return (
      <CldImage
        src={src.public_id}
        alt={alt}
        fill={fill}
        width={!fill ? (width ?? src.width ?? 800) : undefined}
        height={!fill ? (height ?? src.height ?? 500) : undefined}
        sizes={sizes}
        priority={priority}
        className={className}
        crop="fill"
        gravity="auto"
      />
    );
  }

  // Plain URL (legacy picsum or unsplash)
  const url = typeof src === "string" ? src : src.secure_url;
  return (
    <Image
      src={url}
      alt={alt}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}
