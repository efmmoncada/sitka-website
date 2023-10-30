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
    <div className="bg-white py-10 flex flex-col items-center">
      <SectionTitle>Our Services</SectionTitle>

      <div className="py-10 grid grid-cols-1 lg:grid-cols-2 xl:gap-x-36 gap-y-14 w-fit">
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
