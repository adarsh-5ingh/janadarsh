import type { PortableTextBlock } from "@portabletext/react";

export type Category = {
  _id: string;
  name: string;
  slug: string;
  color: string;
};

export type Author = {
  _id: string;
  name: string;
  avatar?: string;
};

export type CloudinaryAsset = {
  public_id: string;
  secure_url: string;
  width?: number;
  height?: number;
  format?: string;
};

export type Article = {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  body?: PortableTextBlock[];
  featuredImage?: CloudinaryAsset;
  category: Category;
  author?: string;
  publishedAt: string;
  isBreaking?: boolean;
  isFeatured?: boolean;
  viewCount: number;
  tags: string[];
};

export type Video = {
  _id: string;
  title: string;
  slug: string;
  thumbnail?: CloudinaryAsset;
  duration: string;
  category: Category;
  publishedAt: string;
  viewCount: number;
};

export type BreakingNewsItem = {
  _id: string;
  text: string;
  isActive: boolean;
  order: number;
};
