import { getPayload } from '../../getPayload';
import SectionTitle from './SectionTitle';
import ServiceBullet from './ServiceBullet';

export default async function OurServices() {
  const payload = await getPayload();
  const data = await payload.find({
    collection: 'services',
  });

  const services = data.docs;

  return (
    <div className="grid place-items-center bg-white py-10">
      <SectionTitle>Our Services</SectionTitle>

      <div className="mx-40 my-10 grid grid-cols-2 gap-x-44 gap-y-14">
        {services.map(service => (
          <ServiceBullet
            key={service.id}
            name={service.name}
            iconUrl={service.iconUrl}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}
