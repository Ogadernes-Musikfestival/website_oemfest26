import { GalleryBlock } from "@/blocks/GalleryBlock";
import { TextBlock } from "@/blocks/TextBlock";
import { GlobalConfig } from "payload";

export const FrivilligPage: GlobalConfig = {
  slug: "frivillig-page",
  fields: [
    {
      name: "heading",
      type: "textarea",
      label: "Overskrift",
    },
    {
      name: "layout",
      type: "blocks",
      blocks: [TextBlock, GalleryBlock],
    },
  ],
};
