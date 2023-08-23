import type { Payload } from 'payload';
import payload from 'payload';

export async function getPayload(): Promise<Payload> {
  if (!payload.preferences) {
    await payload.init({
      secret: process.env.PAYLOAD_SECRET || '',
      mongoURL: process.env.MONGODB_URI || '',
      local: true,
    });
  }

  return payload;
}
