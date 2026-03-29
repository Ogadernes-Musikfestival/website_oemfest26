import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { s3Storage } from "@payloadcms/storage-s3";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Bands } from "./collections/Bands";
import { Frivillig } from "./collections/Frivillig";
import { Sponsor } from "./collections/Sponsor";

import { SiteSettings } from "./globals/SiteSettings";
import { FrivilligPage } from "./globals/FrivilligPage";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    meta: {
      icons: [
        {
          rel: "icon",
          type: "image/png",
          url: "/favicon.png",
        },
        {
          rel: "apple-touch-icon",
          type: "image/png",
          url: "/apple-touch-icon.png",
        },
      ],
    },

    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  globals: [SiteSettings, FrivilligPage],
  collections: [Users, Media, Bands, Frivillig, Sponsor],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || "",
  }),
  sharp,
  plugins: [
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.S3_BUCKET || "",
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || "",
          secretAccessKey: process.env.S3_SECRET || "",
        },
        region: "auto",
        endpoint: process.env.S3_ENDPOINT || "",
      },
    }),
  ],
});
