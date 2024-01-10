import Image from "next/image";

import { Media, Service } from "../../../types/payload-types";

type Props = Pick<Service, "name" | "description" | "icon">;

export default function ServiceBullet({ name, description, icon }: Props) {
  return (
    <div className="flex font-serif px-4 w-fit">
      <Image src={(icon as Media).url || ''} alt="icon" width={100} height={100} />
      <div className="ml-4 flex flex-col">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
