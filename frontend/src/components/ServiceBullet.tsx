import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardHeader } from "@nextui-org/react";
import { Service } from "@payload-types/payload-types";

type Props = Pick<Service, "name" | "description" | "icon">;

function toKebabCase(str: string) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

export default function ServiceBullet({ name, description, icon }: Props) {
  // @ts-ignore
  const myIcon: IconProp = toKebabCase(icon);

  return (
    <Card radius='sm' shadow='sm' className='border-small pr-12'>
      <CardHeader className='block p-4'>
        <div>
          {icon && (
            <FontAwesomeIcon
              className="size-6 text-xs"
              size="2xs"
              icon={myIcon}
            />
          )}
        </div>
        <div className='grid-rows-2 gap-1.5'>
          <h3 className="font-semibold">{name}</h3>
          <p className='text-xs'>{description}</p>
        </div>

      </CardHeader>
    </Card>

    // <div className="flex w-fit px-4 font-serif">
    //   <div className="ml-4 flex flex-col">
    //     <h3 className="text-2xl font-semibold">{name}</h3>
    //     <p className="text-sm">{description}</p>
    //   </div>
    // </div>
  );
}
