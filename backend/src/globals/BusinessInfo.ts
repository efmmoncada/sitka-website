import { GlobalConfig } from "payload/types";
import anyone from "../utilities/access/anyone";

const BusinessInfo: GlobalConfig = {
  slug: "business_info",
  label: "Business Information",
  access: {
    read: anyone,
  },
  fields: [
    {
      name: "businessName",
      label: "Business Name",
      type: "text",
      required: true,
    },
    {
      name: "phoneNumber",
      label: "Phone Number",
      type: "text",
      required: true,
      validate: (val: string) => {
        const phoneNumRegex =
          /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;

        return phoneNumRegex.test(val) || "Not a valid phone number";
      },
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
    },
    {
      name: "licenseNumber",
      label: "License Number",
      type: "text",
      required: true,
    },
    {
      name: "facebookUrl",
      label: "Facebook Link",
      type: "text",
    },
    {
      name: "aboutImage",
      label: "About Image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "aboutContent",
      label: "About Text",
      type: "textarea",
    },
  ],
};

export default BusinessInfo;
