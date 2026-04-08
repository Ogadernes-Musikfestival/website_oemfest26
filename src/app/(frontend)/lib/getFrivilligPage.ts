// src/lib/getFrivilligPage.ts
import { cache } from "react";
import { getPayload } from "payload";
import config from "@payload-config";

export const getFrivilligPage = cache(async () => {
  const payload = await getPayload({ config });

  const page = await payload.findGlobal({
    slug: "frivillig-page",
  });

  return page;
});
