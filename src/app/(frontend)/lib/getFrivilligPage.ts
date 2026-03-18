// src/lib/getFrivilligPage.ts

import { getPayload } from "payload";
import config from "@payload-config";

export async function getFrivilligPage() {
  const payload = await getPayload({ config });

  const page = await payload.findGlobal({
    slug: "frivillig-page", // must match your global slug
  });

  return page;
}
