import type { CollectionConfig } from "payload/types";
import anyone from "../utilities/access/anyone";

const Showcase: CollectionConfig = {
  slug: "previousWorks",
  admin: {
    useAsTitle: "service",
  },
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
    {
      name: "primaryImage",
      label: "Primary Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};

export default Showcase;
