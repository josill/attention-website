import React, { useEffect, useState } from "react";
import { useSpring, animated, config } from "react-spring";
import useMeasure from "react-use-measure";
import Hero from "@/sections/Hero";
import Sidebar from "@/components/Sidebar";
import Services from "@/sections/Services";
import SoftwareDevelopmentCard from "@/components/SoftwareDevelopmentCard";

export default function Index({ isOpen }: { isOpen: boolean }) {
  const [isMobile, setIsMobile] = useState(false);
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const content = [
    {
      iconPath: "/services/e-commerce.svg",
      css: "bg-darkBlue dark:bg-[#383838] border-3 border-darkBlue3 dark:border-orange",
      header: "E-commerce",
      description:
        "We can build, integrate all the products from inital start to maintenance.",
    },
  ];

  const handleCardClick = (index: number) => {
    setExpandedCards((prevExpandedCards) => {
      if (prevExpandedCards.includes(index)) {
        return prevExpandedCards.filter((item) => item !== index);
      } else {
        return [...prevExpandedCards, index];
      }
    });
  };

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
      <section className="flex flex-col justify-center items-center">
        <div className="flex flex-row justify-between items-center w-[100vw]">
          <div className="border border-[0.25px] border-lineGray w-1/4"></div>
          <h2 className="text-customGray dark:text-white text-[25px] font-beVietnam font-light">
            Services
          </h2>
          <div className="border border-[0.25px] border-lineGray w-1/4"></div>
        </div>
        <div className="w-[calc(100vw-4em)] flex flex-col items-start justify-center py-8 px-8 mt-8 rounded-[30px] border border-[0.25px] border-lineGray font-beVietnam dark:bg-[url('/services/service-card-background.png')] bg-cover bg-center bg-blend-darken bg-blend-normal linear-gradient(to bottom, #272B34 0%, #1F2325 46%, #20222D 100%)">
          <h3 className="text-black dark:text-white text-[20px] font-semibold">
            Software development
          </h3>
          <p className="text-[16px] text-paragraphGray dark:text-white my-4 mt-4">
            Lorem ipsum dolor sit amet consectetur. Tortor placerat mauris non
            dolor nullam.
          </p>
          {content.map((item, index) => {
            const isExpanded = expandedCards.includes(index);
            const [measureRef, { height }] = useMeasure();

            const animationStyles = useSpring({
              config: { ...config.stiff, duration: 300 },
              from: {
                height: 0,
              },
              to: {
                height: isExpanded ? height : 0,
              },
            });

            return (
              <div
                className={`w-full rounded-[16px] p-4 cursor-pointer ${item.css}`}
                key={index}
                onClick={() => handleCardClick(index)}
              >
                <div className="flex flex-row">
                  <img src={item.iconPath} alt={item.header} className="mr-3" />
                  <h4 className="text-[18px]">{item.header}</h4>
                </div>
                  <animated.div
                    style={{ overflow: "hidden", ...animationStyles }}
                  >
                    <div ref={measureRef}>
                      <p className="text-[15px] font-light pt-4">
                        {item.description}
                      </p>
                    </div>
                  </animated.div>
              </div>
            );
          })}
        </div>
        {/* <SoftwareDevelopmentCard /> */}
      </section>
      {/* <Services /> */}
    </div>
  );
}
