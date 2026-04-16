import { getPayload } from "payload";
import config from "@payload-config";

export async function getPartnerData() {
  const payload = await getPayload({ config });

  const data = await payload.find({
    collection: "sponsor",
    depth: 1,
    limit: 24,
  });

  return data.docs;
}
