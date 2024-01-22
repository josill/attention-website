import React, { useEffect, useState } from "react";
import { useSpring, animated, config } from "react-spring";
import useMeasure from "react-use-measure";
import Hero from "@/sections/Hero";
import Sidebar from "@/components/Sidebar";
import Services from "@/sections/Services";
import SoftwareDevelopmentCard from "@/components/SoftwareDevelopmentCard";

export default function Index({ isOpen }: { isOpen: boolean }) {
  const [isMobile, setIsMobile] = useState(false);
  // const [expandedCards, setExpandedCards] = useState<number[]>([]);

  // const content = [
  //   {
  //     iconPath: "/services/e-commerce.svg",
  //     css: "bg-darkBlue dark:bg-[#383838] shadow-small dark:border-3 dark:border-orange",
  //     header: "E-commerce",
  //     description:
  //       "We can build, integrate all the products from inital start to maintenance.",
  //   },
  //   {
  //     iconPath: "/services/e-commerce.svg",
  //     css: "bg-darkBlue dark:bg-[#383838] shadow-small dark:border-3 dark:border-orange",
  //     header: "E-commerce",
  //     description:
  //       "We can build, integrate all the products from inital start to maintenance.",
  //   },
  // ];

  // const handleCardClick = (index: number) => {
  //   setExpandedCards((prevExpandedCards) => {
  //     if (prevExpandedCards.includes(index)) {
  //       return prevExpandedCards.filter((item) => item !== index);
  //     } else {
  //       return [...prevExpandedCards, index];
  //     }
  //   });
  // };

  // const icons = [
  //   {
  //     iconPath: "/services/icons/javascript-icon.svg",
  //     css: "bg-yellow",
  //     height: "50",
  //     width: "50",
  //   },
  //   {
  //     iconPath: "/services/icons/python-icon.svg",
  //     css: "bg-react-gradient",
  //     height: "50",
  //     width: "50",
  //   },
  //   {
  //     iconPath: "/services/icons/csharp-icon.svg",
  //     css: "bg-csharp-gradient",
  //     height: "50",
  //     width: "50",
  //   },
  //   {
  //     iconPath: "/services/icons/react-icon.svg",
  //     css: "bg-react-gradient",
  //     height: "50",
  //     width: "50",
  //   },
  //   {
  //     iconPath: "/services/icons/nextjs-icon.svg",
  //     css: "bg-react-gradient",
  //     height: "50",
  //     width: "50",
  //   },
  //   {
  //     iconPath: "/services/icons/node-icon.svg",
  //     css: "bg-react-gradient",
  //     height: "50",
  //     width: "50",
  //   },
  //   {
  //     iconPath: "/services/icons/django-icon.svg",
  //     css: "bg-django-gradient",
  //     height: "35",
  //     width: "35",
  //   },
  //   {
  //     iconPath: "/services/icons/swift-icon3.png",
  //     css: "bg-swift-gradient",
  //     height: "90",
  //     width: "90",
  //   },
  //   {
  //     iconPath: "/services/icons/react-native-icon.svg",
  //     css: "bg-react-gradient",
  //     height: "50",
  //     width: "50",
  //   },
  // ];

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
      {/* <section className="flex flex-col mt-[72px]">
      <div
        className="flex flex-col justify-center items-center"
        id="title-block"
      >
        <h3 className="text-[20px] text-darkGray mt-8 mb-4">
          Empowering tomorrow
        </h3>
        <h1 className="text-[30px] text-lightGray text-center px-4">
          Innovative{" "}
          <span className="text-lightBlue dark:text-darkBlue">
            IT Solutions
          </span>{" "}
          for a connected world
        </h1>
      </div>
      <canvas id="bg" />
    </section> */}
      <Hero />
      {/* <section className="flex flex-col justify-center items-center">
        <div className="flex flex-row justify-between items-center w-[100vw]">
          <div className="border border-[0.25px] border-lineGray w-1/4"></div>
          <h2 className="text-customGray dark:text-white text-[25px] font-beVietnam font-light">
            Services
          </h2>
          <div className="border border-[0.25px] border-lineGray w-1/4"></div>
        </div>
        <div
          className="w-[calc(100vw-4em)] z-10 relative flex flex-col items-start justify-center py-8 px-8 mt-8 shadow-small
        rounded-[30px] border border-[0.25px] border-lineGray font-beVietnam dark:bg-[url('/services/service-card-background.png')] 
        bg-cover bg-center bg-blend-darken bg-blend-normal linear-gradient(to bottom, #272B34 0%, #1F2325 46%, #20222D 100%)"
        >
          <h3 className="text-black dark:text-white text-[20px] font-semibold">
            Software development
          </h3>
          <p className="text-[16px] text-paragraphGray dark:text-white my-4 mt-4">
            Lorem ipsum dolor sit amet consectetur. Tortor placerat mauris non
            dolor nullam.
          </p>
          <div className="flex flex-col gap-y-8">
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
              <div className="relative">
                <div className="absolute w-full right-0 top-0 z-0 border-t border-gridLight dark:border-gridDark"></div>
                <div
                  className={`w-full rounded-[16px] p-4 cursor-pointer z-20 ${item.css}`}
                  key={index}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="flex flex-row">
                    <img
                      src={item.iconPath}
                      alt={item.header}
                      className="mr-3"
                    />
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
                  <div className="absolute w-full right-0 bottom-0 z-0 border-t border-gridLight dark:border-gridDark"></div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      <div
    className="w-[calc(100vw-4em)] min-h-[350px] z-10 relative flex flex-col items-start py-8 px-8 mt-8 shadow-small
  rounded-[30px] border border-[0.25px] border-lineGray dark:border-0 font-beVietnam bg-[url('/services/service-maintenance-card-bg-light.svg')]
  dark:bg-[url('/services/service-maintenance-card-bg-dark.svg')] 
  bg-cover bg-center bg-blend-darken bg-blend-normal linear-gradient(to bottom, #272B34 0%, #1F2325 46%, #20222D 100%)"
  >
    <h3 className="text-red dark:text-white text-[20px] font-semibold">
      Service Maintenance
    </h3>
    <p className="text-[16px] text-darkRed dark:text-white my-4 mt-4">
      We are always here making sure your systems are in place. In a continuos partnership.
    </p>
    </div>
      <div
      className="w-[calc(100vw-4em)] min-h-[350px] z-10 relative flex flex-col items-start py-4 px-8 mt-8 shadow-small
  rounded-[30px] border border-[0.25px] border-lineGray dark:border-0 font-beVietnam bg-[url('/services/custom-solutions-card-bg-light.svg')]
  dark:bg-[url('/services/custom-solutions-card-bg-dark.svg')] 
  bg-cover bg-center bg-blend-darken bg-blend-normal linear-gradient(to bottom, #272B34 0%, #1F2325 46%, #20222D 100%)"
    >
      <h3 className="text-customBlack2 dark:text-white text-[20px] font-semibold">
        Custom solutions
      </h3>
      <p className="text-[16px] text-textGray dark:text-textGray my-4 mt-4">
        Websites, mobile applications and web applications
      </p>
    </div>
      <div
        className="w-[calc(100vw-4em)] min-h-[350px] z-10 relative flex flex-col items-start py-4 px-8 mt-8 shadow-small
        rounded-[30px] border border-[0.25px] border-lineGray dark:border-0 font-beVietnam bg-[url('/services/tech-stack-card-bg-light.svg')]
        dark:bg-[url('/services/tech-stack-card-bg-dark.svg')] 
        bg-cover bg-center bg-blend-darken bg-blend-normal linear-gradient(to bottom, #272B34 0%, #1F2325 46%, #20222D 100%)"
      >
        <h3 className="text-customBlack3 dark:text-white text-[20px] font-semibold">
          Stack we use
        </h3>
        <p className="text-[16px] text-textGray dark:text-textGray3 my-4 mt-4">
          Lorem ipsum dolor sit amet consectetur. Tortor placerat mauris non
          dolor nullam.
        </p>
        <div className="grid grid-cols-3 gap-4 items-center justify-center w-full">
          {icons.map((icon, index) => {
            return (
               <div className={`flex w-[70px] h-[70px] items-center justify-center ${icon.css} p-2 rounded-[18px]`}>
                 <img
                  src={icon.iconPath}
                  alt={icon.iconPath}
                  height={icon.height}
                  width={icon.width}
                />
               </div>
            );
          })}
        </div>
      </div>
      </section> */}
      <Services />
      <section className="flex flex-col justify-center items-center mt-8">
        <div className="flex flex-row justify-between items-center w-[100vw]">
          <div className="border border-[0.25px] border-lineGray w-1/4"></div>
          <h2 className="text-customGray dark:text-white text-[25px] font-beVietnam font-light">
            Our Work
          </h2>
          <div className="border border-[0.25px] border-lineGray w-1/4"></div>
        </div>
      </section>
    </div>
  );
}
