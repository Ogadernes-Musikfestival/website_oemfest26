import type { CollectionConfig } from "payload";

export const Sponsor: CollectionConfig = {
  slug: "sponsor",

  labels: {
    singular: "Sponsor eller Samarbejde",
  },

  admin: {
    description: "Sponsor & Samarbejder",
  },

  fields: [
    {
      name: "title",
      type: "text",
      label: "Firma",
    },
    {
      name: "type",
      type: "radio",
      options: ["Sponsor", "Samarbejde"],
    },

    {
      name: "logo",
      type: "upload",
      label: "Logo",
      relationTo: "media",
    },
  ],
};
