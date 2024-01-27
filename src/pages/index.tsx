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
}: {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  deviceIsMobile: boolean;
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
     <div className="max-w-[1440px] w-full">
     {deviceIsMobile && sidebarOpen && (
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      )}
      <Hero />
      <Services deviceIsMobile={deviceIsMobile} />
      <OurWork deviceIsMobile={deviceIsMobile} />
      {/* <section className="flex flex-col justify-center items-center mt-10">
        <div className="flex flex-row justify-between items-center w-[100vw]">
          <div className="border border-[0.25px] border-lineGray w-1/4"></div>
          <h2 className="text-customGray dark:text-white text-[25px] font-beVietnam font-light">
            The team
          </h2>
          <div className="border border-[0.25px] border-lineGray w-1/4"></div>
        </div>
        <div
          className="w-[calc(100vw-4em)] min-h[250px] z-10 relative flex flex-col items-center justify-center py-4 pb-8 px-8 mt-8
          rounded-[30px] border border-[0.25px] border-lineGray dark:border-0 font-beVietnam bg-cardGray dark:bg-[url('/our-work/latest-work-card-bg-dark.svg')]
          bg-cover bg-center bg-blend-darken bg-blend-normal linear-gradient(to bottom, #272B34 0%, #1F2325 46%, #20222D 100%)"
        >
          <img
            src="/our-team/worker-sample.png"
            alt="latest work 1"
            height={200}
            width={300}
            className="rounded-[27px] border-[4px] border-white"
          />
          <div className="flex flex-col items-start mt-8">
            <h4 className="text-[16px] text-darkBrown dark:text-textGray6 mb-1">
              Backend developer
            </h4>
            <h3 className="text-black dark:text-white text-[20px] font-semibold">
              Jane Belway
            </h3>
            <p className="text-[16px] text-paragraphGray dark:text-textGray4 my-4 mt-4">
              Fully integrated website solution. We also implemented the invetory system with updated stock overview.            </p>
            <div className="flex justify-center items-center w-full">
              <button className="flex text-darkBlue2 text-[20px] gap-x-3 px-4 py-2 mt-[20px] font-light bg-white rounded-[27px] shadow-buttonShadow justify-center items-center cursor-pointer">
                <p className="text-textGray7">LinkedIn profile</p>
                <img
                  src="/our-team/arrow-icon.svg"
                  alt="arrow"
                  className="mt-1"
                />
              </button>
            </div>
          </div>
        </div>
      </section> */}
      <Team />
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
            >
            </div>
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
          <h3 className="text-[20px] font-semibold">Want to know more?</h3>
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
      {/* <section id="contact" className="mt-32">
      <div className="flex flex-col justify-center items-center gap-y-4 px-8 text-textBlue">
        <h2 className="font-beVietnam text-darkBlue4 dark:text-white text-[30px] mb-8">
          Get in touch today 👋
        </h2>
        <input
          placeholder="Name"
          className="w-full min-h-[50px] rounded-[16px] border-2 border-darkBlue4 pl-4 dark:bg-customBlack4"
        />
        <input
          placeholder="Email*"
          className="w-full min-h-[50px] rounded-[16px] border-2 border-darkBlue4 pl-4 dark:bg-customBlack4"
        />
        <input
          placeholder="Message*"
          className="w-full text-start min-h-[200px] rounded-[16px] border-2 border-darkBlue4 pl-4 dark:bg-customBlack4 pb-[140px]"
        />
        <button className="rounded-[16px] bg-darkBlue4 border-2 border-darkBlue4 w-full min-h-[50px] text-[20px] text-white">
          Send
        </button>
      </div>
    </section> */}
      <Contact />
     </div>
    </div>
  );
}
