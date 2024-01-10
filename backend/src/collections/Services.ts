import type { CollectionConfig } from "payload/types";
import anyone from "../utilities/access/anyone";

const Services: CollectionConfig = {
  slug: "services",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: anyone,
  },
  fields: [
    {
      name: "name",
      label: "Service Name",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Service Description",
      type: "text",
      required: true,
    },
    {
      name: "icon",
      label: "Icon representing service",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};

export default Services;
