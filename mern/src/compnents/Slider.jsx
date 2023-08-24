import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import imgg from "../images/discount.png"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../css/slider.css"

// import required modules
import { Pagination } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <div className="back1">
          <div className="back11"></div>
          <div className="back12"></div>
        </div></SwiperSlide>
        <SwiperSlide>
          <div className="back2">
            <div className="back21"></div>
            <div className="back22"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="back3">
            <div className="back31"></div>
            <div className="back32"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
