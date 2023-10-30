import Image from 'next/image';

import { Service } from '../../payload-types';

type Props = Omit<Service, 'id' | 'updatedAt' | 'createdAt'> & { iconUrl: string };

export default function ServiceBullet({ name, description, iconUrl }: Props) {
  return (
    <div className="flex font-serif px-4 w-fit">
      <Image src={iconUrl} alt="icon" width={100} height={100} />
      <div className="ml-4 flex flex-col">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
