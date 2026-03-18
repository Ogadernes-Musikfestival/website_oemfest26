// src/blocks/TextBlock.ts
import { Block } from "payload";

export const TextBlock: Block = {
  slug: "text",
  labels: {
    singular: "Text",
    plural: "Text blocks",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Overskrift (optional)",
    },
    {
      name: "content",
      type: "textarea",
      required: true,
    },
  ],
};
