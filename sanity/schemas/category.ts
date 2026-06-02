import { defineField, defineType } from "sanity";

export const category = defineType({
  name: "category",
  title: "श्रेणी (Category)",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "नाम",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "color",
      title: "Color (hex)",
      type: "string",
      validation: (r) => r.required(),
    }),
  ],
});
