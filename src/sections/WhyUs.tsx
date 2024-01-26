import React from "react";
import { useTheme } from "next-themes";

interface SectionContent {
  iconPathLight: string;
  iconPathDark: string;
  header: string;
  description: string;
}

interface WhyUsProps {
  content: SectionContent[];
}

export default function WhyUs({ content }: WhyUsProps) {
  const { theme } = useTheme();

  return (
    <section
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
      {content.map((item, index) => {
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
  </section>
  );
}
