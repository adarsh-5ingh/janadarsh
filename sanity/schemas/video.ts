import { defineField, defineType } from "sanity";

export const video = defineType({
  name: "video",
  title: "वीडियो (Video)",
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
      name: "thumbnail",
      title: "Thumbnail",
      type: "cloudinary.asset",
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
      description: 'e.g. "5:23"',
    }),
    defineField({
      name: "category",
      title: "श्रेणी",
      type: "reference",
      to: [{ type: "category" }],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "प्रकाशन तिथि",
      type: "datetime",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "viewCount",
      title: "Views",
      type: "number",
      initialValue: 0,
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
