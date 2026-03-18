import { getPayload } from "payload";
import config from "@payload-config";

export async function getFrivilligData() {
  const payload = await getPayload({ config });

  const data = await payload.find({
    collection: "frivillige",
    depth: 1,
  });

  return data.docs;
}
