"use client";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
const SoloItemSwiper = () => {
  return (
    <div className="w-[100vw]">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full h-[200px] bg-[blue]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[400px] bg-black"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[400px] bg-[blue]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[400px] bg-black"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[400px] bg-[blue]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full  h-[400px] bg-black"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SoloItemSwiper;
