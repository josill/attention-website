import React, { useEffect, useState, useRef } from "react";
import { useSpring, animated, config } from "react-spring";
import useMeasure from "react-use-measure";
import Hero from "@/sections/Hero";
import Sidebar from "@/components/Sidebar";
import Services from "@/sections/Services";
import SoftwareDevelopmentCard from "@/components/SoftwareDevelopmentCard";
import { useTheme } from "next-themes";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import CarouselItemWork from "@/components/CarouselItemWork";
import { Swiper as SwiperType } from "swiper/types";
import OurWork from "@/sections/Work";
import Team from "@/sections/Team";
import WhyUs from "@/sections/WhyUs";
import Contact from "@/sections/Contact";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperComponent from "@/components/SwiperComponent";
import ServiceMaintenanceCard from "@/components/ServiceMaintenanceCard";
import CustomSolutionsCard from "@/components/CustomSolutionsCard";
import TechStackCard from "@/components/TechStackCard";

export default function Index({
  sidebarOpen,
  setSidebarOpen,
  deviceIsMobile,
  deviceIsTablet,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  deviceIsMobile: boolean;
  deviceIsTablet: boolean;
}) {
  const { theme, setTheme } = useTheme();

  const softwareDevelopmentCardContent = [
    {
      iconPath: "/services/e-commerce.svg",
      css: "bg-darkBlue dark:bg-[#383838] shadow-small dark:border-3 dark:border-orange",
      header: "E-commerce",
      description:
        "We can build, integrate all the products from inital start to maintenance.",
    },
    {
      iconPath: "/services/e-commerce.svg",
      css: "bg-darkBlue dark:bg-[#383838] shadow-small dark:border-3 dark:border-orange",
      header: "E-commerce",
      description:
        "We can build, integrate all the products from inital start to maintenance.",
    },
  ];

  const techStacksContent = [
    {
      iconPath: "/services/icons/javascript-icon.svg",
      css: "bg-yellow",
      height: "50",
      width: "50",
    },
    {
      iconPath: "/services/icons/python-icon.svg",
      css: "bg-react-gradient",
      height: "50",
      width: "50",
    },
    {
      iconPath: "/services/icons/csharp-icon.svg",
      css: "bg-csharp-gradient",
      height: "50",
      width: "50",
    },
    {
      iconPath: "/services/icons/react-icon.svg",
      css: "bg-react-gradient",
      height: "50",
      width: "50",
    },
    {
      iconPath: "/services/icons/nextjs-icon.svg",
      css: "bg-react-gradient",
      height: "50",
      width: "50",
    },
    {
      iconPath: "/services/icons/node-icon.svg",
      css: "bg-react-gradient",
      height: "50",
      width: "50",
    },
    {
      iconPath: "/services/icons/django-icon.svg",
      css: "bg-django-gradient",
      height: "35",
      width: "35",
    },
    {
      iconPath: "/services/icons/swift-icon3.png",
      css: "bg-swift-gradient",
      height: "90",
      width: "90",
    },
    {
      iconPath: "/services/icons/react-native-icon.svg",
      css: "bg-react-gradient",
      height: "50",
      width: "50",
    },
  ];

  const whyUsContent = [
    {
      iconPathLight: "/why-us/stack-icon-light.svg",
      iconPathDark: "/why-us/stack-icon-dark.svg",
      header: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ipsum vitae id sed dignissim tincidunt.",
    },
    {
      iconPathLight: "/why-us/computer-icon-light.svg",
      iconPathDark: "/why-us/computer-icon-dark.svg",
      header: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ipsum vitae id sed dignissim tincidunt.",
    },
    {
      iconPathLight: "/why-us/check-icon-light.svg",
      iconPathDark: "/why-us/check-icon-dark.svg",
      header: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ipsum vitae id sed dignissim tincidunt.",
    },
    {
      iconPathLight: "/why-us/dash-icon-light.svg",
      iconPathDark: "/why-us/dash-icon-dark.svg",
      header: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ipsum vitae id sed dignissim tincidunt.",
    },
    {
      iconPathLight: "/why-us/cross-icon-light.svg",
      iconPathDark: "/why-us/cross-icon-dark.svg",
      header: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ipsum vitae id sed dignissim tincidunt.",
    },
  ];

  const carouselItems = [
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
      ],
      title: "Custom website development",
      description:
        "Fully integrated website solution. We also implemented the invetory system with updated stock overview.",
      link: "#",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden font-beVietnam bg-bgWhite dark:bg-black">
      <div className="max-w-[1440px] w-full sm:px-8 md:px-0">
        {deviceIsMobile && sidebarOpen && (
          <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        )}
        {/* <section className="flex flex-col mt-[140px]" id="hero">
          <div
            className="flex flex-col justify-center items-center"
            id="title-block"
          >
            <h3 className="text-[20px] text-darkGray mt-8 mb-4">
              Empowering tomorrow
            </h3>
            <h1 className="text-[30px] text-lightGray text-center px-4">
              Innovative{" "}
              <span className="text-darkBlue2 dark:text-lightBlue">
                IT Solutions
              </span>{" "}
              for a connected world
            </h1>
          </div>
          <canvas id="bg" />
        </section> */}
        <Hero />
        {/* <section
          className="flex flex-col justify-center items-center"
          id="services"
        >
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-grow items-center gap-x-4">
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
              <div className="border border-[0.25px] h-[1px] border-lineGray dark:border-darkGray3 w-full"></div>
            </div>
            <h2 className="text-customGray dark:text-white text-[25px] font-beVietnam font-light px-12 sm:px-16 pb-2">
              Services
            </h2>
            <div className="flex flex-grow items-center justify-end gap-x-4">
              <div className="border border-[0.25px] h-[1px] border-lineGray dark:border-darkGray3 w-full"></div>
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
          <div className="flex flex-col sm:grid sm:grid-cols-2 px-8 py-16 md:px-16 gap-8 mx-1 sm:border-x-[1px] sm:border-lineGray sm:dark:border-darkGray3">
            <SoftwareDevelopmentCard content={softwareDevelopmentCardContent} />
            <ServiceMaintenanceCard />
            <CustomSolutionsCard />
            <TechStackCard content={techStacksContent} />
          </div>
        </section> */}
        <Services deviceIsMobile={deviceIsMobile} />
        {/* <section
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
          <div className="flex flex-col w-full sm:max-w-[1432px] px-8 sm:py-16 md:px-16 sm:gap-8 sm:border-x-[1px] sm:border-lineGray sm:dark:border-darkGray3">
            <div className="flex flex-col items-start mt-10 w-full">
              <h3 className="text-black dark:text-white text-[20px] font-semibold">
                Here are our latest works
              </h3>
              <p className="text-[16px] text-paragraphGray dark:text-textGray4 my-4 mt-4">
                We have created and helped create a lot of different projects,
                some for our personal use, some for our clients and some for
                learning purposes.
              </p>
            </div>
            <div className="sm:w-full">
              <SwiperComponent
                carouselItems={carouselItems}
                deviceIsMobile={deviceIsMobile}
              />
            </div>
          </div>
        </section> */}
        <OurWork deviceIsMobile={deviceIsMobile} />
        <Team deviceIsMobile={deviceIsMobile} deviceIsTablet={deviceIsTablet} />
        {/* <section
          className="flex flex-col justify-center items-center mt-[60px] font-beVietnam"
          id="why-us"
        >
          <div className="flex flex-col justify-center items-center w-[100vw]">
            <h2 className="text-customGray dark:text-white text-[25px] font-light">
              Why us
            </h2>
            <div className="w-full flex justify-evenly text-black">
              <div className="w-full flex flex-row">
                <div className="min-w-[10px] border-t-[0.5px] border-lightGray2 dark:border-darkGray3"></div>
                <div className="bg-[url('/why-us/scratched-bg-light.svg')] dark:bg-[url('/why-us/scratched-bg-dark.svg')] min-h-[60px] min-w-[60px] border-x-[0.5px] border-t-[0.5px] border-lightGray2 dark:border-darkGray3"></div>
                <div className="flex-grow"></div>
              </div>
            </div>
            {whyUsContent.map((item, index) => {
              return (
                <div
                  className="w-full flex flex-row border-t-[0.5px] border-lightGray2 dark:border-darkGray3 group"
                  key={index}
                >
                  <div className="min-w-[10px] border-t-[0.5px] border-lightGray2 dark:border-darkGray3"></div>
                  <div className="min-h-[60px] min-w-[60px] border-x-[0.5px] border-t-[0.5px] border-lightGray2 dark:border-darkGray3"></div>
                  <div
                    className={`flex flex-col justify-center items-start px-4 py-8 gap-y-[10px] flex-grow text-darkBlue4 dark:text-[#DBDBDB] rounded-[30px] group-hover:border-3 group-hover:border-darkBlue4
              ${
                theme === "dark" &&
                "group-hover:bg-[#272B34] group-hover:border-[#4A648B]"
              }`}
                  >
                    <img
                      src={`${
                        theme === "dark"
                          ? item.iconPathDark
                          : item.iconPathLight
                      }`}
                      alt={item.header}
                      height={20}
                      width={20}
                    />
                    <h3 className="text-[20px]">{item.header}</h3>
                    <p className="text-[14px]">{item.description}</p>
                  </div>
                  <div
                    className={`group-hover:bg-[url('/why-us/scratched-bg-tall-light.svg')] min-h-[60px] min-w-[60px] border-x-[0.5px] border-t-[0.5px] border-lightGray2 dark:border-darkGray3
              group-hover:text-red group-focus:text-red
              ${
                theme === "dark" &&
                "group-hover:dark:bg-[url('/why-us/scratched-bg-tall-dark.svg')]"
              }`}
                  ></div>
                  <div className="min-w-[20px] border-t-[0.5px] border-lightGray2 dark:border-darkGray3"></div>
                </div>
              );
            })}
            <div className="w-full flex flex-row border-y-[0.5px] border-lightGray2 dark:border-darkGray3 group">
              <div className="min-w-[10px] border-t-[0.5px] border-lightGray2 dark:border-darkGray3"></div>
              <div className="min-h-[60px] min-w-[60px] border-x-[0.5px] border-t-[0.5px] border-lightGray2 dark:border-darkGray3"></div>
              <div
                className="relative flex flex-col justify-center items-center px-8 py-8 gap-y-[20px] flex-grow text-darkBlue4 dark:text-[#DBDBDB] rounded-[30px] group-hover:hover:border-3 group-hover:border-darkBlue4        
          group-hover:dark:bg-[#272B34] group-hover:border-[#4A648B]"
              >
                <img
                  src={`${
                    theme === "dark"
                      ? "why-us/mail-icon-dark.svg"
                      : "why-us/mail-icon-light.svg"
                  }`}
                  alt="mail icon"
                  height={45}
                  width={45}
                />
                <h3 className="text-[20px] font-semibold">
                  Want to know more?
                </h3>
                <img
                  className="contact-arrow animate-pulse"
                  src={`${
                    theme === "light"
                      ? "why-us/arrow-icon-dark.svg"
                      : "why-us/arrow-icon-light.svg"
                  }`}
                  alt="mail icon"
                  height={90}
                  width={90}
                />
              </div>
              <div
                className="group-hover:bg-[url('/why-us/scratched-bg-tall-light.svg')] min-h-[60px] min-w-[60px] border-x-[0.5px] border-t-[0.5px] border-lightGray2 dark:border-darkGray3
          group-hover:dark:bg-[url('/why-us/scratched-bg-tall-dark.svg')]"
              ></div>
              <div className="min-w-[20px] border-t-[0.5px] border-lightGray2 dark:border-darkGray3"></div>
            </div>
          </div>
        </section> */}
        <WhyUs content={whyUsContent} />
        <Contact />
      </div>
    </div>
  );
}
