import { GlobalConfig } from "payload";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  admin: {
    group: "Settings",
  },
  fields: [
    {
      name: "siteName",
      type: "text",
    },
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "social media",
      type: "group",

      fields: [
        {
          name: "spotify",
          type: "text",
          admin: {
            placeholder: "url",
          },
        },

        {
          name: "instagram",
          type: "text",
          admin: {
            placeholder: "url",
          },
        },
        {
          name: "facebook",
          type: "text",
          admin: {
            placeholder: "url",
          },
        },
      ],
    },
  ],
};
