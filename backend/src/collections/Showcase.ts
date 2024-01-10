import type { CollectionConfig } from "payload/types";
import anyone from "../utilities/access/anyone";

const Showcase: CollectionConfig = {
  slug: "previousWorks",
  admin: {},
  access: {
    read: anyone,
  },
  fields: [
    {
      name: "service",
      label: "Service Name",
      type: "text",
      required: true,
    },
    {
      name: "media",
      label: "Images",
      type: "array",
      fields: [
        {
          name: "image",
          label: "Image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
      required: true,
    },
  ],
};

export default Showcase;
