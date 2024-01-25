import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import CarouselItemWork from '@/components/CarouselItemWork';
import { Swiper as SwiperType } from "swiper/types";
import { CarouselItemWorkProps, CarouselItemTeamProps } from '@/types';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CarouselItemTeam from './CarouselItemTeam';

interface SwiperComponentProps {
    carouselItems: CarouselItemWorkProps[] | CarouselItemTeamProps[];
}

function SwiperComponent({ carouselItems }: SwiperComponentProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    const handleSlideChange = (swiper: SwiperType) => {
        setCurrentSlide(() => swiper.activeIndex);
    };

    return (
        <Swiper
            slidesPerView={'auto'}
            modules={[Navigation, Scrollbar, A11y, Pagination]}
            onInit={(swiper: any) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
            }}
            pagination={{
                enabled: true,
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '"></span>';
                }
            }}
            onSlideChange={(swiperRef) => handleSlideChange(swiperRef)}
            autoplay={{
                delay: 8000,
                disableOnInteraction: false,
            }}
            loop={true}
            lazyPreloadPrevNext={2}
        >
            <button
                className={`prev-button z-50 ${currentSlide == 0 ? "swiper-button-disabled" : ""
                    }`}
                ref={prevRef}
            ></button>
            <button
                className={`next-button z-50 ${currentSlide === carouselItems.length - 1 ? "swiper-button-disabled" : ""
                    }`}
                ref={nextRef}
            ></button>
            {carouselItems.map((item, index) => (
                <SwiperSlide key={index}>
                    {('techStacks' in item) ? (
                        <CarouselItemWork
                            imgPath={item.imgPath}
                            techStacks={item.techStacks}
                            title={item.title}
                            description={item.description}
                            link={item.link}
                        />
                    ) : (
                        <CarouselItemTeam
                            imgPath={item.imgPath}
                            position={item.position}
                            name={item.name}
                            description={item.description}
                            link={item.link}
                        />
                    )}
                </SwiperSlide>
            ))}
        </Swiper>)
}

export default SwiperComponent