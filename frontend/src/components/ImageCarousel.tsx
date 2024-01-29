"use client";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import useScreeSize from "@/hooks/useScreenSize";
import { Media } from "@payload-types/payload-types";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = { images?: Media[] };

export default function ImageCarousel({ images }: Props) {
  const { width } = useScreeSize();
  if (!images) return null;
  return (
    <>
      <style>
        {`
          :root {
            --swiper-theme-color: #d51d25;
          }
        `}
      </style>
      <Swiper
        slidesPerView={width > 680 ? 3 : 1}
        spaceBetween={20}
        modules={[Pagination, Navigation]}
        navigation={true}
        pagination={{ clickable: true }}
      >
        {images
          .filter((img) => img.url)
          .map((img, i) =>
            img.width ? (
              <SwiperSlide key={i}>
                <Image
                  src={img.url || ""}
                  width={Math.min(img.width, 300)}
                  height={img.height || 0}
                  alt=""
                  className="rounded-md shadow-2xl"
                />
              </SwiperSlide>
            ) : null,
          )
          .filter((v) => v !== null)}
      </Swiper>
    </>
  );
}
