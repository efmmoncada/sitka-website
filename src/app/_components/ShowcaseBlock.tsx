import { Media } from 'payload/generated-types';

import ImageCarousel from './ImageCarousel';

type Props = {
  images: Media[];
};

export default async function ShowcaseBlock({ images }: Props) {
  return (
    <div className="px-10 text-center">
      <h3 className="py-4 text-2xl">Flooring</h3>
      <ImageCarousel images={images} />
    </div>
  );
}
