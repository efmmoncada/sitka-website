import { getPayload } from '../../getPayload';


export default async function Banner() {
  const payload = await getPayload();
  const { businessName } = await payload.findGlobal({
    slug: 'info',
  });

  return (
    <div
      className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
      style={{
        backgroundImage: "url('/backdrop.jpeg')",
        height: 550,
        backgroundPositionY: '55%',
      }}
    >
      <div className="absolute inset-0 h-full w-full overflow-hidden bg-fixed bg-black/40">
        <div className="flex h-full items-center justify-center">
          <div className="text-white">
            <h2 className="pb-8 text-7xl font-semibold">{businessName}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
