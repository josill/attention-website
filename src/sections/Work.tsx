import React, { useState, useRef } from 'react'
import { useTheme } from "next-themes";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import CarouselItemWork from '@/components/CarouselItemWork';
import { Swiper as SwiperType } from "swiper/types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperComponent from '@/components/SwiperComponent';

export default function Work() {
    const carouselItems = [
        {
            imgPath: '/our-work/latest-works/latest-work-1.png',
            techStacks: [
                {
                    iconPath: '/services/icons/swift-icon.svg',
                    techName: 'Swift'
                }
            ],
            title: 'IOS Navigator App',
            description: 'App like Endomondo, Strava and Runtastic. It is a fitness app that tracks your running, cycling and walking. Built using swift to introduce ourselves to native app development.',
            link: 'https://github.com/josill/Navigator'
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
                },
                {
                    iconPath: '/services/icons/nextjs-icon.svg',
                    techName: 'Nextjs'
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
    ]
    return (
        <section className="flex flex-col justify-center items-center mt-10" id='our-work'>
            <div className="flex flex-row justify-between items-center w-[100vw]">
                <div className="border border-[0.25px] border-lineGray w-1/4"></div>
                <h2 className="text-customGray dark:text-white text-[25px] font-beVietnam font-light">
                    Our work
                </h2>
                <div className="border border-[0.25px] border-lineGray w-1/4"></div>
            </div>
            <div className="flex flex-col items-start mt-10 px-8 w-[100vw]">
                <h3 className="text-black dark:text-white text-[20px] font-semibold">
                    Here are our latest works
                </h3>
                <p className="text-[16px] text-paragraphGray dark:text-textGray4 my-4 mt-4">
                    Lorem ipsum dolor sit amet consectetur. Ipsum vitae id sed dignissim tincidunt. Vehicula tortor sit condimentum eu nunc mauris pellentesque massa.
                </p>
            </div>
            <div className='max-w-[100vw]'>
                <SwiperComponent carouselItems={carouselItems} />
            </div>
        </section>
    )
}