import React, { useState, useRef } from 'react'
import { useTheme } from "next-themes";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CarouselItemWork from '@/components/CarouselItemWork';
import { Swiper as SwiperType } from "swiper/types";

export default function Work() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    const carouselItems = [
        {
            imgPath: '/our-work/latest-works/latest-work-1.png',
            techStacks: [
                {
                    iconPath: '/services/icons/swift-icon.svg',
                    techName: 'Swift'
                },
                {
                    iconPath: '/services/icons/nextjs-icon.svg',
                    techName: 'Nextjs'
                }
            ],
            title: 'Custom website development',
            description: 'Fully integrated website solution. We also implemented the invetory system with updated stock overview.',
            link: '#'
        },
        {
            imgPath: '/our-work/latest-works/latest-work-1.png',
            techStacks: [
                {
                    iconPath: '/services/icons/swift-icon.svg',
                    techName: 'Swift'
                },
                {
                    iconPath: '/services/icons/nextjs-icon.svg',
                    techName: 'Nextjs'
                }
            ],
            title: 'Custom website development',
            description: 'Fully integrated website solution. We also implemented the invetory system with updated stock overview.',
            link: '#'
        }
    ]

    const handleSlideChange = (swiper: SwiperType) => {
        setCurrentSlide(() => swiper.activeIndex);
    };    

    return (
        <section className="aspect-auto flex flex-col justify-center items-center mt-10" id='our-work'>
            <div className="flex flex-row justify-between items-center w-[100vw]">
                <div className="border border-[0.25px] border-lineGray w-1/4"></div>
                <h2 className="text-customGray dark:text-white text-[25px] font-beVietnam font-light">
                    Our work
                </h2>
                <div className="border border-[0.25px] border-lineGray w-1/4"></div>
            </div>
            <div className="flex flex-col items-start px-8 mt-10">
                <h3 className="text-black dark:text-white text-[20px] font-semibold">
                    Here are our latest works
                </h3>
                <p className="text-[16px] text-paragraphGray dark:text-textGray4 my-4 mt-4">
                    Lorem ipsum dolor sit amet consectetur. Ipsum vitae id sed dignissim tincidunt. Vehicula tortor sit condimentum eu nunc mauris pellentesque massa.
                </p>
            </div>
            <Swiper
            className={carouselItems.length > 1 ? "cursor-pointer" : ""}
            cssMode={true}
            slidesPerView={1}
            modules={[Navigation, Scrollbar, A11y, Pagination]}
            onSlideChange={(swiperRef) => handleSlideChange(swiperRef)}
            onInit={(swiper: any) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            lazyPreloadPrevNext={2}
            >
                <button
          className={`prev-button z-50 ${
            currentSlide == 0 ? "swiper-button-disabled" : ""
          }`}
          ref={prevRef}
        ></button>
        <button
          className={`next-button z-50 ${
            currentSlide === carouselItems.length - 1 ? "swiper-button-disabled" : ""
          }`}
          ref={nextRef}
        ></button>
                {/* {carouselItems.map((item, index) => (
                    <SwiperSlide key={index}>
                        <CarouselItemWork {...item} />
                    </SwiperSlide>
                ))} */}
                <SwiperSlide>
                    <div>11111111111111111111111111111111111111 <img src='/why-us/dash-icon-dark.svg' /></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>22222222222222222222222222222222222222<img src='/why-us/dash-icon-dark.svg' /></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>33333333333333333333333333333333333333<img src='/why-us/dash-icon-dark.svg' /></div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}