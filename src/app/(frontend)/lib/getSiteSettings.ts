import { cache } from "react";
import { getPayload } from "payload";
import config from "@payload-config";

export const getSiteSettings = cache(async () => {
  const payload = await getPayload({ config });

  const settings = await payload.findGlobal({
    slug: "site-settings",
    depth: 1,
  });

  return settings;
});
