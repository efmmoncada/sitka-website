import type { CollectionConfig } from 'payload/types';

const PreviousWorks: CollectionConfig = {
  slug: 'previousWorks',
  admin: {},
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'service',
      label: 'Service Name',
      type: 'text',
    },
    {
      name: 'media',
      label: 'Images',
      type: 'array',
      fields: [
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
};

export default PreviousWorks;
