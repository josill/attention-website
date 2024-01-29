import SwiperComponent from "@/components/SwiperComponent";
import React from "react";
import { useTheme } from "next-themes";

export default function Team({
  deviceIsMobile,
  deviceIsTablet,
}: {
  deviceIsMobile: boolean;
  deviceIsTablet: boolean;
}) {
  const { theme } = useTheme();

  const carouselItems = [
    {
      imgPath: "/our-team/worker-sample.png",
      position: "Fullstack Developer",
      name: "Jonathan Sillak",
      description: "Co-founder of Attention. Changing the world line by line.",
      link: "https://ee.linkedin.com/in/jonathan-sillak-375a59279",
    },
    {
      imgPath: "/our-team/worker-sample.png",
      position: "Fullstack Developer",
      name: "Martin Metsküla",
      description:
        "Co-founder of Attention. Use the power of code to change the world.",
      link: "https://ee.linkedin.com/in/martin-metskula",
    },
  ];
  return (
    <section
      className="flex flex-col justify-center items-center mt-10 sm:mt-48"
      id="team"
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
          <div className="border-[0.25px] h-[1px] border-lineGray dark:border-darkGray w-full"></div>
        </div>
        <h2 className="text-customGray dark:text-white text-[25px] font-beVietnam font-light px-12 sm:px-16 pb-2">
          The team
        </h2>
        <div className="flex flex-grow items-center justify-end gap-x-4">
          <div className="border-[0.25px] h-[1px] border-lineGray dark:border-darkGray w-full"></div>
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
      <div className="flex flex-col w-full px-8 sm:py-16 lg:px-16 sm:gap-8 sm:border-x-[1px] sm:border-lineGray sm:dark:border-darkGray">
        <div className="sm:w-full my-4">
          <SwiperComponent
            carouselItems={carouselItems}
            deviceIsMobile={deviceIsMobile}
            deviceIsTablet={deviceIsTablet}
          />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center w-full mt-4">
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
          <div className="hidden sm:block border border-[0.25px] h-[1px] border-lineGray dark:border-darkGray w-full"></div>
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
    </section>
  );
}
