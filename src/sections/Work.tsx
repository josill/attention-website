import React, { useState, useRef } from "react";
import { useTheme } from "next-themes";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperComponent from "@/components/SwiperComponent";

export default function Work({ deviceIsMobile }: { deviceIsMobile: boolean }) {
  const { theme } = useTheme();

  const carouselItems = [
    {
      imgPath: "/our-work/latest-works/latest-work-1.png",
      techStacks: [
        {
          iconPath: "/services/icons/swift-icon.svg",
          techName: "Swift",
        },
      ],
      title: "IOS Navigator App",
      description:
        "App like Endomondo, Strava and Runtastic. It is a fitness app that tracks your running, cycling and walking. Built using swift to introduce ourselves to native app development.",
      link: "https://github.com/josill/Navigator",
    },
    {
      imgPath: "/our-work/latest-works/latest-work-1.png",
      techStacks: [
        {
          iconPath: "/services/icons/swift-icon.svg",
          techName: "Swift",
        },
        {
          iconPath: "/services/icons/nextjs-icon.svg",
          techName: "Nextjs",
        },
      ],
      title: "Custom website development",
      description:
        "Fully integrated website solution. We also implemented the invetory system with updated stock overview.",
      link: "#",
    },
    {
      imgPath: "/our-work/latest-works/latest-work-1.png",
      techStacks: [
        {
          iconPath: "/services/icons/swift-icon.svg",
          techName: "Swift",
        },
        {
          iconPath: "/services/icons/nextjs-icon.svg",
          techName: "Nextjs",
        },
        {
          iconPath: "/services/icons/nextjs-icon.svg",
          techName: "Nextjs",
        },
      ],
      title: "Custom website development",
      description:
        "Fully integrated website solution. We also implemented the invetory system with updated stock overview.",
      link: "#",
    },
    {
      imgPath: "/our-work/latest-works/latest-work-1.png",
      techStacks: [
        {
          iconPath: "/services/icons/swift-icon.svg",
          techName: "Swift",
        },
        {
          iconPath: "/services/icons/nextjs-icon.svg",
          techName: "Nextjs",
        },
        {
          iconPath: "/services/icons/nextjs-icon.svg",
          techName: "Nextjs",
        },
        {
          iconPath: "/services/icons/nextjs-icon.svg",
          techName: "Nextjs",
        },
      ],
      title: "Custom website development",
      description:
        "Fully integrated website solution. We also implemented the invetory system with updated stock overview.",
      link: "#",
    },
  ];
  return (
    <section
      className="flex flex-col justify-center items-center"
      id="our-work"
    >
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-grow items-center gap-x-2">
          {!deviceIsMobile && (
            <img
              src={
                theme === "dark"
                  ? "services/rectangle-dark.svg"
                  : "services/rectangle-light.svg"
              }
              alt="Rectangle"
              width={10}
              height={10}
            />
          )}
          <div className="sm:hidden border border-[0.25px] h-[1px] border-lineGray dark:border-darkGray3 w-full"></div>
        </div>
        <h2 className="text-customGray dark:text-white text-[25px] font-beVietnam font-light px-12 sm:px-16">
          Our work
        </h2>
        <div className="flex flex-grow items-center justify-end gap-x-2">
          <div className="sm:hidden border border-[0.25px] h-[1px] border-lineGray dark:border-darkGray3 w-full"></div>
          {!deviceIsMobile && (
            <img
              src={
                theme === "dark"
                  ? "services/rectangle-dark.svg"
                  : "services/rectangle-light.svg"
              }
              alt="Rectangle"
              width={10}
              height={10}
            />
          )}
        </div>
      </div>
      <div className="flex flex-col w-full px-8 sm:py-16 md:px-16 sm:gap-8 sm:border-x-[1px] sm:border-lineGray sm:dark:border-darkGray3">
        <div className="flex flex-col items-start mt-10 w-full">
          <h3 className="text-black dark:text-white text-[20px] font-semibold">
            Here are our latest works
          </h3>
          <p className="text-[16px] text-paragraphGray dark:text-textGray4 my-4 mt-4">
            We have created and helped create a lot of different projects, some
            for our personal use, some for our clients and some for learning
            purposes.
          </p>
        </div>
        <div className="sm:w-full">
          <SwiperComponent
            carouselItems={carouselItems}
            deviceIsMobile={deviceIsMobile}
          />
        </div>
      </div>
    </section>
  );
}
