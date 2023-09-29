import { Media } from 'payload/generated-types';

import ImageCarousel from './ImageCarousel';

const images = [
  { url: 'http://placekitten.com/300/300', alt: 'kitten' },
  { url: 'http://placekitten.com/300/300', alt: 'kitten' },
  { url: 'http://placekitten.com/300/300', alt: 'kitten' },
  { url: 'http://placekitten.com/300/300', alt: 'kitten' },
];

type Props = {
  images: Media[];
};

export default async function ShowcaseBlock({ images }: Props) {
  return (
    <div className="px-10">
      <h3 className="text-2xl">Flooring</h3>
      <ImageCarousel images={images} />
    </div>
  );
}
