"use client"
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { heroImages } from "./data/heroImages";

export default function NftImage(){
  const images = [...heroImages, ...heroImages, ...heroImages];

  return(
      <Swiper
        modules={[Autoplay]}
        spaceBetween={16}
        slidesPerView="auto"
        loop
        speed={4000}
        autoplay={{
          delay:0,
          disableOnInteraction: false,
        }}
        className="w-full bg-black"
      >
        {images.map((item,i) => (
          <SwiperSlide 
          key={i}
          className="w-30!"
          >
            <div className="relative h-30 rounded-xl overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-fill"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
  )
}