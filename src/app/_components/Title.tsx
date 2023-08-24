import { getPayload } from '../../getPayload';

export default async function Title() {
  const payload = await getPayload();
  const { businessName } = await payload.findGlobal({
    slug: 'info',
  });

  return (
    <div className="grid h-60 place-items-center bg-red-600 bg-opacity-90 py-12 text-center">
      <h1 className="text-6xl text-white">Welcome to {businessName}</h1>
      <p className="mx-28 text-lg text-white">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta commodi libero earum. Sequi
        delectus officia incidunt quidem possimus necessitatibus neque nisi mollitia.
      </p>
    </div>
  );
}
