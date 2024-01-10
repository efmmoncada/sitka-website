import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";
import { Config } from "../../types/payload-types";

import Users from "./collections/Users";
import Services from "./collections/Services";
import Showcase from "./collections/Showcase";
import Media from "./collections/Media";
import BusinessInfo from "./globals/BusinessInfo";
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import adapter from "./utilities/gcsAdapter";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  globals: [BusinessInfo],
  collections: [Users, Services, Showcase, Media],
  typescript: {
    outputFile: path.resolve(
      __dirname,
      "..",
      "..",
      "types",
      "payload-types.ts"
    ),
    declare: false,
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [
    payloadCloud(),
    cloudStorage({
      collections: {
        media: {
          adapter: adapter,
          disablePayloadAccessControl: true,
        },
      },
    }),
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
});

declare module "payload" {
  export interface GeneratedTypes extends Config {}
}
