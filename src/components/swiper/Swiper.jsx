import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation, Pagination } from "swiper";

export default function App() {
    return (
        <>
            <Swiper navigation={true} modules={[Pagination, Navigation]} pagination={{
                clickable: true,
            }} loop={true} className="mySwiper">
                <SwiperSlide>
                    <div className="image-container"><img src="../images/image7.JPG" alt="" /></div>
                </SwiperSlide>
                <SwiperSlide><div className="image-container"><img src="../images/image5.jpg" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className="image-container"><img src="../images/image4.jpg" alt="" /></div></SwiperSlide>


            </Swiper>
        </>
    );
}
