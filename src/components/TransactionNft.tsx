"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Button from "../ui/components/Button";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { recentTransaction } from "./data/recentTransaction";

export default function TransactionNft(){
  const swiperRef = useRef<SwiperType | null>(null);
  
  return(
    <section id="transaction_nft" className="py-24 text-black">
      <div className="mx-auto mb-12 grid max-w-7xl grid-cols-1 items-center gap-6 px-24 md:grid-cols-2">
              <div>
                <h1 className="text-4xl font-medium">Recent Transactions</h1>
                <p>Updated 25 seconds ago</p>
              </div>
      
              <div className="flex justify-end">
                <Button className="rounded-full border-2 bg-white px-5 border-gray-200 py-2 text-sm font-medium text-black">
                  View All
                </Button>
              </div>
      </div>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation]}
        loop
        centeredSlides
        slidesPerView={3}
        spaceBetween={40}
        className="transaction-swiper"
        breakpoints={{
          0: { slidesPerView: 1.2 },
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {recentTransaction.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="transition-all duration-300">
              <Image
                src={item.src}
                width={426}
                height={571}
                alt={item.alt}
                className="mx-auto rounded-xl"
              />
              <div className="mt-4 text-center text-sm">
                <p className="font-semibold">{item.id_images}</p>
                <p className="text-gray-500">{item.bid}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

       <div className="mt-10 flex items-center justify-center gap-6">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-black text-xl transition hover:bg-black hover:text-white"
        >
          &lt;
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-black text-xl transition hover:bg-black hover:text-white"
        >
          &gt;
        </button>
      </div>

      <style jsx global>{`
        .largest-sales-swiper .swiper-slide {
          transform: scale(0.85);
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .largest-sales-swiper .swiper-slide-active {
          transform: scale(1);
          opacity: 1;
        }
      `}</style>
    </section>
  )
}