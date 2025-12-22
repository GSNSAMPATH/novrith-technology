import { defineType, defineField } from "sanity";

export const trustedLogo = defineType({
  name: "trustedLogo",
  title: "Trusted Logo",
  type: "document",
  fields: [
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
    }),
  ],
});
