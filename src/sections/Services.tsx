import SoftwareDevelopmentCard from '@/components/SoftwareDevelopmentCard';
import ServiceMaintenanceCard from '@/components/ServiceMaintenanceCard';
import React from 'react'

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
  </section>
  )
}