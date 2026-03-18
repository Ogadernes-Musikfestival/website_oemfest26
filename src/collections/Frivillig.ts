import type { CollectionConfig } from "payload";
import { radio } from "payload/shared";

export const Frivillig: CollectionConfig = {
  slug: "frivillige",
  labels: {
    singular: "Frivilligt område",
    plural: "Frivilligt område",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Område",
      required: true,
    },
    {
      name: "dag",
      type: "radio",
      options: ["Fre", "Lør", "Søn"],
    },

    {
      name: "timer",
      type: "text",
      label: "Vagt time antal",
    },
    {
      name: "checkin",
      type: "text",
      label: "Mødetid",
    },
    {
      name: "primæropgave",
      type: "textarea",
      label: "Primær opgave",
    },
    {
      name: "featuredImage",
      type: "upload",
      label: "Featured image",
      relationTo: "media",
    },
  ],
};
