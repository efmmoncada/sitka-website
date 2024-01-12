import { Media } from "@payload-types/payload-types";
import ImageCarousel from "./ImageCarousel";

type Props = {
  images?: Media[];
};

export default function ShowcaseBlock({ images }: Props) {
  return (
    <div className="px-10 py-5 text-center">
      <h3 className="py-4 text-left text-2xl lg:text-3xl">Flooring</h3>
      <ImageCarousel images={images} />
    </div>
  );
}
