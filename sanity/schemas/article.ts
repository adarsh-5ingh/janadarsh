import { defineField, defineType } from "sanity";

export const article = defineType({
  name: "article",
  title: "लेख (Article)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "शीर्षक",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "summary",
      title: "सारांश",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "body",
      title: "पूरी खबर",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [
            { name: "alt", type: "string", title: "Alt text" },
            { name: "caption", type: "string", title: "Caption" },
          ],
        },
      ],
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "cloudinary.asset",
    }),
    defineField({
      name: "category",
      title: "श्रेणी",
      type: "reference",
      to: [{ type: "category" }],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "author",
      title: "लेखक",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "publishedAt",
      title: "प्रकाशन तिथि",
      type: "datetime",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "isBreaking",
      title: "ब्रेकिंग न्यूज़?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "isFeatured",
      title: "मुख्य खबर (Featured)?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "viewCount",
      title: "Views",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  orderings: [
    {
      title: "नवीनतम पहले",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
});
