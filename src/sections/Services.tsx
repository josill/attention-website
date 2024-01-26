import SoftwareDevelopmentCard from "@/components/SoftwareDevelopmentCard";
import ServiceMaintenanceCard from "@/components/ServiceMaintenanceCard";
import CustomSolutionsCard from "@/components/CustomSolutionsCard";
import React from "react";
import TechStackCard from "@/components/TechStackCard";
import { useTheme } from "next-themes"

export default function Services({ deviceIsMobile }: { deviceIsMobile: boolean }) {
  const { theme } = useTheme();

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

  return (
    <section
    className="flex flex-col justify-center items-center sm:px-8"
    id="services"
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
        <div className="border border-[0.25px] h-[1px] border-lineGray dark:border-darkGray3 w-full"></div>
      </div>
      <h2 className="text-customGray dark:text-white text-[25px] font-beVietnam font-light px-12 sm:px-16 pb-2">
        Services
      </h2>
      <div className="flex flex-grow items-center justify-end gap-x-2">
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
    <div className="flex flex-col sm:grid sm:grid-cols-2 px-8 gap-x-8 mt-[-0.5em] mx-1 border-x-[1px] border-lineGray dark:border-darkGray3">
      <SoftwareDevelopmentCard content={softwareDevelopmentCardContent} />
      <ServiceMaintenanceCard />
      <CustomSolutionsCard />
      <TechStackCard content={techStacksContent} />
    </div>
  </section>
  );
}
