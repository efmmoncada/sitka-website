import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

import { buildConfig } from 'payload/config';

import Services from './collections/Services';
import BusinessInfo from './globals/BusinessInfo';

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || '',
  collections: [Services],
  globals: [BusinessInfo],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
});
