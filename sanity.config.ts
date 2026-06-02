import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { cloudinarySchemaPlugin } from "sanity-plugin-cloudinary";
import { category } from "./sanity/schemas/category";
import { author } from "./sanity/schemas/author";
import { article } from "./sanity/schemas/article";
import { video } from "./sanity/schemas/video";
import { breakingNews } from "./sanity/schemas/breakingNews";

export default defineConfig({
  name: "janadarsh",
  title: "Jan Adarsh CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "placeholder",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  basePath: "/studio",
  plugins: [
    structureTool(),
    cloudinarySchemaPlugin(),
  ],
  schema: {
    types: [category, author, article, video, breakingNews],
  },
});
