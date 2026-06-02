import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author",
  title: "लेखक (Author)",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "नाम",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "avatar",
      title: "Avatar (Cloudinary public ID)",
      type: "string",
    }),
  ],
});
