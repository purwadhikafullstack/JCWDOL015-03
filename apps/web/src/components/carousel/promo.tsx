'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

export default function PromoCarousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="flex justify-center w-full h-32 md:h-48 lg:h-72"
    >
      {[...Array(10)].map((_, index) => (
        <SwiperSlide key={index} className="flex w-full items-center justify-center rounded-xl">
        <Image 
          src={`/carousel/pm_banner_${index + 1}.webp`}
          alt={`Slide ${index + 1}`}
          height={260}
          width={519}
          className="rounded-lg object-cover"
        />
      </SwiperSlide>
      ))}
    </Swiper>
  );
}
