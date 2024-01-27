import { Media, Service } from "@payload-types/payload-types";
import SectionTitle from "./SectionTitle";
import ServiceBullet from "./ServiceBullet";

type Props = {
  services: Service[];
};

export default function OurServices({ services }: Props) {
  if (!services.length) return null;
  return (
    <div className="flex flex-col items-center bg-white py-10">
      <SectionTitle>Our Services</SectionTitle>

      <div className="grid w-fit grid-cols-1 gap-y-14 py-10 lg:grid-cols-2 xl:gap-x-36">
        {services.map((service) => (
          <ServiceBullet
            key={service.id}
            name={service.name}
            icon={service.icon || ""}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}
