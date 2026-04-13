import { GalleryBlock } from "@/blocks/GalleryBlock";
import { TextBlock } from "@/blocks/TextBlock";
import { GlobalConfig } from "payload";

export const HomePage: GlobalConfig = {
  slug: "home-page",
  fields: [
    {
      name: "layout",
      type: "blocks",
      blocks: [TextBlock, GalleryBlock],
    },
  ],
};
