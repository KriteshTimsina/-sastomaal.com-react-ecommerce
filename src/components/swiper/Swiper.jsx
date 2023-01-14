import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";

export default function App() {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="image-container"><img src="../images/image1.jpg" alt="" /></div>
                </SwiperSlide>
                <SwiperSlide><div className="image-container"><img src="../images/image4.jpg" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className="image-container"><img src="../images/image3.jpg" alt="" /></div></SwiperSlide>


            </Swiper>
        </>
    );
}
