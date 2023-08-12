import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper"
import 'swiper/css';
import 'swiper/css/pagination';

export default function SwiperComp({ lista, nombreLista }) {
    const imagenes = lista.map((v, i) => {
        return (
            <SwiperSlide key={`${nombreLista}-img-${i + 1}`}><img src={v} alt={`${nombreLista}-img-${i + 1}`} /></SwiperSlide>
        )
    })
    return (
        <Swiper
            spaceBetween={1}
            modules={[Pagination]}
            pagination={true}
            loop={true}
            breakpoints={
                {
                    "@0.50": {
                        slidesPerView: 1
                    },
                    "@0.70": {
                        slidesPerView: 2
                    },
                    "@1.00": {
                        slidesPerView: 3
                    }
                }
            }
            className={nombreLista}
        >
            {imagenes}
        </Swiper>
    )
}
