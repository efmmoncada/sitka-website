import iconPickerField from "@innovixx/payload-icon-picker-field";
import type { CollectionConfig } from "payload/types";
import * as fa6Icons from "react-icons/fa6";
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
    iconPickerField({
      name: "icon",
      label: "Service Icon",
      reactIconPack: fa6Icons,
    }),
  ],
};

export default Services;
