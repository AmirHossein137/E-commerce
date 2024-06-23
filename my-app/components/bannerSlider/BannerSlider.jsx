'use client'

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { banner } from '@/data/data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function BannerSlider() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="w-full mb-10"
            >
                {banner.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Image className="rounded-2xl shadow" src={item.img} alt="پیکودوز" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
