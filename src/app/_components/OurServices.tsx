import { CollectionAfterChangeHook } from 'payload/types';

import { getPayload } from '../../getPayload';
import { Service } from '../../payload-types';
import SectionTitle from './SectionTitle';
import ServiceBullet from './ServiceBullet';

export default async function OurServices() {
  // const data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/test`)
  //   .then(res => res.json())
  //   .then(res => res?.docs?.[0]);

  const payload = await getPayload();
  const data = await payload.find({
    collection: 'services',
  });

  const services: Service[] = data.docs;

  return (
    <div className="my-16 grid place-items-center bg-white pt-8">
      <SectionTitle>Our Services</SectionTitle>

      <div className="mx-40 my-10 grid grid-cols-2 gap-x-60 gap-y-14">
        {services.map(service => (
          <ServiceBullet
            name={service.name}
            iconUrl={service.iconUrl}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}
