import type { CollectionConfig } from 'payload/types';

const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      label: 'Service Name',
      type: 'text',
    },
    {
      name: 'description',
      label: 'Service Description',
      type: 'text',
    },
    {
      name: 'iconUrl',
      label: 'Icon Image URL',
      type: 'text',
    },
  ],
};

export default Services;
