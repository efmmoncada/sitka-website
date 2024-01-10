import type { CollectionConfig } from "payload/types";
import anyone from '../utilities/access/anyone';

const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: anyone
  },
  upload: true,
  fields: [],
};

export default Media;
