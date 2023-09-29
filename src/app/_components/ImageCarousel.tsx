'use client';
import Image from 'next/image';
import { Media } from 'payload/generated-types';

type Props = { images: Media[] };

export default function ImageCarousel({ images }: Props) {
  return (
    <div className="grid w-4/5 mx-auto grid-flow-col auto-cols-[30%] overflow-x-auto gap-4">
      {images.map(img => (
        <Image
          className="shadow-2xl rounded-md"
          src={img.url}
          alt=""
          width={img.width}
          height={img.height}
        />
      ))}
    </div>
  );
}
