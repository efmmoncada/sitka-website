'use client';
import Image from 'next/image';
import { Media } from 'payload/generated-types';
import { FaArrowLeft } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

type Props = { images: Media[] };

export default function ImageCarousel({ images }: Props) {
  return (
    <Swiper
      style={{
        paddingBottom: '4rem',
      }}
      slidesPerView={3}
      spaceBetween={20}
      modules={[Pagination, Navigation]}
      navigation={true}
      pagination={{ clickable: true }}
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <Image
            src={img.url}
            width={img.width}
            height={img.height}
            alt=""
            className="rounded-md shadow-2xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
