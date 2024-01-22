import React, { useEffect, useState } from "react";
import Hero from "@/sections/Hero";
import Sidebar from "@/components/Sidebar";
import Services from "@/sections/Services";
import SoftwareDevelopmentCard from "@/components/SoftwareDevelopmentCard";

export default function Index({ isOpen }: { isOpen: boolean }) {
  const [isMobile, setIsMobile] = useState(false);
const content = [
  {
    "iconPath": "/services/e-commerce.svg",
    "backgroundColor": "bg-darkBlue",
    "header": "E-commerce",
    "description": "We can build, integrate all the products from inital start to maintenance.",
  }
]

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkWindowSize();

    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden font-beVietnam bg-bgWhite dark:bg-black">
      {isMobile && isOpen && <Sidebar isOpen={isOpen} />}
      {/* <div hidden className="flex text-customGray flex-col items-center justify-center min-h-screen">
        <div id="title-block" className="flex flex-col justify-center items-center">
          <h2 className='text-customGray dark:text-white font-beVietnam text-[25px]'>Services</h2>

          <h3 className="text-[20px] text-darkGray mt-8 mb-4">Empowering tomorrow</h3>
          <h1 className="text-[30px] text-lightGray text-center px-4">Innovative <span className="text-lightBlue dark:text-darkBlue">IT Solutions</span> for a connected world</h1>
        </div>
        <canvas id="bg" className="w-full"></canvas>
      </div> */}
      <Hero />
      <section className='flex flex-col justify-center items-center'>
        <div className='flex flex-row justify-between items-center w-[100vw]'>
          <div className='border border-[0.25px] border-lineGray w-1/4'></div>
          <h2 className='text-customGray dark:text-white text-[25px] font-beVietnam font-light'>Services</h2>
          <div className='border border-[0.25px] border-lineGray w-1/4'></div>
        </div>
        <div className="w-[calc(100vw-4em)] flex flex-col items-center justify-center py-8 mt-8 rounded-[30px] border border-[0.25px] border-lineGray font-beVietnam">
          <h3 className="text-black dark:text-white text-[20px] font-normal">Software development</h3>
          <p className="text-[16px] text-paragraphGray px-8">Lorem ipsum dolor sit amet consectetur. Tortor placerat mauris non dolor nullam.</p>
          {content.map((item, index) => (
            <div className={`w-[calc(100%-4em)] rounded-[16px] p-4 border-3 border-darkBlue3 ${item.backgroundColor}`}>
              <div className="flex flex-row mb-4">
                <img src={item.iconPath} alt={item.header} className="mr-3" />
                <h4 className="text-[18px]">{item.header}</h4>
              </div>
              <p className="text-[15px] font-light">{item.description}</p>
            </div>
          ))}
        </div>
        {/* <SoftwareDevelopmentCard /> */}
      </section>
      {/* <Services /> */}
    </div>
  );
};
