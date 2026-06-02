import { createClient } from "@sanity/client";
import type { QueryParams } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export const sanityClient = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2024-01-01",
      useCdn: process.env.NODE_ENV === "production",
      token: process.env.SANITY_API_TOKEN,
    })
  : null;

export async function sanityFetch<T>(
  query: string,
  params: QueryParams = {}
): Promise<T> {
  if (!sanityClient) return (Array.isArray([]) ? [] : null) as T;
  return sanityClient.fetch<T>(query, params, {
    next: { revalidate: 60 },
    perspective: "published",
  });
}
