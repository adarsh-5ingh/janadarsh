import { defineField, defineType } from "sanity";

export const breakingNews = defineType({
  name: "breakingNews",
  title: "ब्रेकिंग न्यूज़ टिकर",
  type: "document",
  fields: [
    defineField({
      name: "text",
      title: "टिकर टेक्स्ट",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "isActive",
      title: "Active?",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "क्रम (Order)",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "क्रम",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
