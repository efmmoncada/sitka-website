export default async function fetchFromPayload<T>(urlPath: string): Promise<T> {
  const url = `${process.env.CMS_HOSTNAME}${urlPath}`;

  try {
    const res = await fetch(url, { cache: process.env.NODE_ENV !== "production" ? 'force-cache' : 'no-store'});
    if (!res.ok) {
      throw new Error(`HTTP Error fetching ${url}. Status: ${res.status}`);
    }
    return res.json() as T;
  } catch (e) {
    console.error(`Fetch Error: ${e}`);
    throw new Error(`Fetch Error: ${e}`);
  }
}
