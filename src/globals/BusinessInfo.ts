import type { GlobalConfig } from 'payload/types';

const BusinessInfo: GlobalConfig = {
  slug: 'info',
  label: 'Business Information',
  fields: [
    {
      name: 'businessName',
      type: 'text',
    },
    {
      name: 'phoneNumber',
      type: 'text',
      validate: (val: string) => {
        const phoneNumRegex =
          /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;

        return phoneNumRegex.test(val) || 'Not a valid phone number';
      },
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
    },
    {
      name: 'licenseNumber',
      label: 'License Number',
      type: 'text',
    },
    {
      name: 'facebookUrl',
      label: 'Facebook Link',
      type: 'text',
    },
    {
      name: 'instagramUrl',
      label: 'Instagram Link',
      type: 'text',
    },
  ],
};

export default BusinessInfo;
