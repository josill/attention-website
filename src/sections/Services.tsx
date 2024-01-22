import SoftwareDevelopmentCard from '@/components/SoftwareDevelopmentCard';
import ServiceMaintenanceCard from '@/components/ServiceMaintenanceCard';
import CustomSolutionsCard from '@/components/CustomSolutionsCard';
import React from 'react'
import TechStackCard from '@/components/TechStackCard';

export default function Services() {
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
    <section className="flex flex-col justify-center items-center">
    <div className="flex flex-row justify-between items-center w-[100vw]">
      <div className="border border-[0.25px] border-lineGray w-1/4"></div>
      <h2 className="text-customGray dark:text-white text-[25px] font-beVietnam font-light">
        Services
      </h2>
      <div className="border border-[0.25px] border-lineGray w-1/4"></div>
    </div>
    <SoftwareDevelopmentCard content={softwareDevelopmentCardContent} />
    <ServiceMaintenanceCard />
    <CustomSolutionsCard />
    <TechStackCard content={techStacksContent} />
  </section>
  )
}