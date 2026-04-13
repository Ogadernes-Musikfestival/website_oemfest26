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
      name: "topNav",
      type: "group",
      label: "Top Nav",

      fields: [
        {
          name: "left",
          type: "text",
          label: "Venstre Hjørne",
        },
        {
          name: "logo",
          type: "upload",
          relationTo: "media",
          required: true,
        },

        {
          name: "right",
          type: "text",
          label: "Højre Hjørne",
        },
      ],
    },

    {
      name: "socialMedia",
      type: "group",
      label: "Social Media",

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
