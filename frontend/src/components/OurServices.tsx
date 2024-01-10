import { Media, Service } from "../../../types/payload-types";
import SectionTitle from "./SectionTitle";
import ServiceBullet from "./ServiceBullet";

type Props = {
  services: Service[];
};

export default function OurServices({ services }: Props) {
  if (!services.length) return null;
  return (
    <div className="bg-white py-10 flex flex-col items-center">
      <SectionTitle>Our Services</SectionTitle>

      <div className="py-10 grid grid-cols-1 lg:grid-cols-2 xl:gap-x-36 gap-y-14 w-fit">
        {services.map((service) => (
          <ServiceBullet
            key={service.id}
            name={service.name}
            icon={service.icon || ''}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}
