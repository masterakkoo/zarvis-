import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../css/Slider1.css"

// import required modules
import { Pagination } from "swiper";

export default function Slider(p) {
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
                <SwiperSlide>
                    <img style={{ objectFit: 'contain' }} src={p.images[0]} />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={{ objectFit: 'contain' }} src={p.images[1]} />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={{ objectFit: 'contain' }} src={p.images[2]} />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
