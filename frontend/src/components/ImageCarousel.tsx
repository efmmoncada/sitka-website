"use client";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Media } from "@payload-types/payload-types";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = { images?: Media[] };

export default function ImageCarousel({ images }: Props) {
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
        modules={[Pagination, Navigation]}
        navigation={true}
        pagination={{ clickable: true }}
      >
        {images
          .filter((img) => img.url)
          .map((img, i) =>
            img.width && img.height ? (
              <SwiperSlide key={i}>
                <Image
                  src={img.url || ""}
                  objectFit="contain"
                  width={img.width}
                  height={img.height}
                  alt=""
                  objectPosition="center"
                  className="mx-auto"
                  style={{ width: "auto", height: "100%" }}
                  sizes="100vw"
                />
              </SwiperSlide>
            ) : null,
          )
          .filter((v) => v !== null)}
      </Swiper>
    </>
  );
}
