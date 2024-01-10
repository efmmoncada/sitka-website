import { gcsAdapter } from "@payloadcms/plugin-cloud-storage/gcs";

const adapter = gcsAdapter({
  options: {
    keyFilename: "gcs_credentials.json",
  },
  bucket: process.env.GCS_BUCKET,
});

export default adapter;
