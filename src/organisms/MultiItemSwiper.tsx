"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const MultiItemSwiper = () => {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-[350px] max-w-[1300px] mb-[50px]"
      >
        <SwiperSlide>
          <div className="w-[300px] h-[300px] bg-[blue]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[300px] bg-[blue]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[300px] bg-[blue]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[300px] bg-[blue]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[300px] bg-[blue]"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MultiItemSwiper;
