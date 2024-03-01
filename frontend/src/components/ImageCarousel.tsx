"use client";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Media } from "@payload-types/payload-types";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ImageWithSpinner } from "./ImageWithSpinner";

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
                <ImageWithSpinner
                  src={img.url || ""}
                  width={img.width}
                  height={img.height}
                  loading='eager'
                  alt=""
                  key={img.url}
                  className="mx-auto object-contain"
                  style={{ width: "auto", height: "100%" }}
                />
              </SwiperSlide>
            ) : null,
          )
          .filter((v) => v !== null)}
      </Swiper>
    </>
  );
}
