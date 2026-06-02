import { sanityFetch } from "./sanity";
import type { Article, Category, Video, BreakingNewsItem } from "./types";

const CATEGORY_FIELDS = `
  _id,
  name,
  "slug": slug.current,
  color
`;

const ARTICLE_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  summary,
  body,
  "featuredImage": featuredImage{ public_id, secure_url, width, height, format },
  "category": category->{${CATEGORY_FIELDS}},
  "author": author->name,
  publishedAt,
  isBreaking,
  isFeatured,
  viewCount,
  tags
`;

const VIDEO_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  "thumbnail": thumbnail{ public_id, secure_url, width, height, format },
  duration,
  "category": category->{${CATEGORY_FIELDS}},
  publishedAt,
  viewCount
`;

export async function getFeaturedArticles(): Promise<Article[]> {
  return sanityFetch<Article[]>(
    `*[_type == "article" && isFeatured == true] | order(publishedAt desc)[0..4]{${ARTICLE_FIELDS}}`
  );
}

export async function getLatestArticles(limit = 8): Promise<Article[]> {
  return sanityFetch<Article[]>(
    `*[_type == "article"] | order(publishedAt desc)[0..${limit - 1}]{${ARTICLE_FIELDS}}`
  );
}

export async function getTrendingArticles(limit = 5): Promise<Article[]> {
  return sanityFetch<Article[]>(
    `*[_type == "article"] | order(viewCount desc)[0..${limit - 1}]{${ARTICLE_FIELDS}}`
  );
}

export async function getArticlesByCategory(
  slug: string,
  limit = 50
): Promise<Article[]> {
  return sanityFetch<Article[]>(
    `*[_type == "article" && category->slug.current == $slug] | order(publishedAt desc)[0..${limit - 1}]{${ARTICLE_FIELDS}}`,
    { slug }
  );
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  return sanityFetch<Article | null>(
    `*[_type == "article" && slug.current == $slug][0]{${ARTICLE_FIELDS}}`,
    { slug }
  );
}

export async function searchArticles(query: string): Promise<Article[]> {
  return sanityFetch<Article[]>(
    `*[_type == "article" && (title match $q || summary match $q || $q in tags)] | order(publishedAt desc){${ARTICLE_FIELDS}}`,
    { q: `*${query}*` }
  );
}

export async function getCategories(): Promise<Category[]> {
  return sanityFetch<Category[]>(
    `*[_type == "category"] | order(name asc){${CATEGORY_FIELDS}}`
  );
}

export async function getVideos(limit = 10): Promise<Video[]> {
  return sanityFetch<Video[]>(
    `*[_type == "video"] | order(publishedAt desc)[0..${limit - 1}]{${VIDEO_FIELDS}}`
  );
}

export async function getBreakingNewsItems(): Promise<BreakingNewsItem[]> {
  return sanityFetch<BreakingNewsItem[]>(
    `*[_type == "breakingNews" && isActive == true] | order(order asc){_id, text, isActive, order}`
  );
}

export async function getAllArticleSlugs(): Promise<
  Array<{ category: string; slug: string }>
> {
  return sanityFetch<Array<{ category: string; slug: string }>>(
    `*[_type == "article"]{"category": category->slug.current, "slug": slug.current}`
  );
}

export async function getAllCategorySlugs(): Promise<string[]> {
  return sanityFetch<string[]>(`*[_type == "category"].slug.current`);
}
