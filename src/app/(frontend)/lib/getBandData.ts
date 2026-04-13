import { getPayload } from "payload";
import config from "@payload-config";

export async function getBandData() {
  const payload = await getPayload({ config });

  const data = await payload.find({
    collection: "bands",
    depth: 1,
    sort: "spilletidspunkt",
    limit: 24,
  });

  return data.docs;
}
