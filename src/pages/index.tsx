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
      <Hero />
      <div className="max-w-[1440px] w-full sm:px-8 md:px-0">
        {deviceIsTablet && sidebarOpen && (
          <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        )}
        <Services deviceIsMobile={deviceIsMobile} />
        <OurWork deviceIsMobile={deviceIsMobile} />
        <Team deviceIsMobile={deviceIsMobile} deviceIsTablet={deviceIsTablet} />
        <WhyUs content={whyUsContent} />
        <Contact />
      </div>
    </div>
  );
}
