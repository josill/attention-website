import React from "react";
import { useTheme } from "next-themes";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface CarouselItemWorkProps {
  imgPath: string;
  techStacks: {
    iconPath: string;
    techName: string;
  }[];
  title: string;
  description: string;
  link: string;
}

export default function CarouselItemWork({ imgPath, techStacks, title, description, link }: CarouselItemWorkProps) {
    const { resolvedTheme } = useTheme();
    return (
      <div className="w-full flex items-center justify-center px-8">
        <div
          className="max-w-[80vw] min-h[250px] z-10 relative flex flex-col items-center justify-center py-4 pb-8 px-4 mt-8
                    rounded-[30px] border border-[0.25px] border-lineGray dark:border-0 font-beVietnam bg-cardGray dark:bg-[url('/our-work/latest-work-card-bg-dark.svg')]
                    bg-cover bg-center bg-blend-darken bg-blend-normal linear-gradient(to bottom, #272B34 0%, #1F2325 46%, #20222D 100%)"
        >
          <img
            src="/our-work/latest-works/latest-work-1.png"
            alt="latest work 1"
            height={200}
            width={300}
            className="rounded-[27px]"
          />
          <div className="flex gap-x-3 mt-5 text-[20px] text-textGray5">
            <div className="flex justify-center items-center rounded-[18px] px-2 py-1 gap-x-3 bg-react-gradient shadow-glow-weak">
              <img
                src="/services/icons/swift-icon.svg"
                alt="swift-icon"
                className="rounded-[10px]"
                height={30}
                width={30}
              />
              <p className="pr-2 pb-1">Swift</p>
            </div>
            <img
              src={
                resolvedTheme === "dark"
                  ? "/our-work/plus-white.svg"
                  : "/our-work/plus-black.svg"
              }
            />
            <div className="flex justify-center items-center rounded-[18px] px-2 py-1 gap-x-3 bg-react-gradient shadow-glow-weak">
              <img
                src="/services/icons/nextjs-icon.svg"
                alt="nextjs-icon"
                height={30}
                width={30}
              />
              <p className="pr-2 pb-1">Nextjs</p>
            </div>
          </div>
          <div className="flex flex-col items-start mt-8 px-4">
            <h3 className="text-black dark:text-white text-[20px] font-semibold">
              Custom website development
            </h3>
            <p className="text-[16px] text-paragraphGray dark:text-textGray4 my-4 mt-4">
              Fully integrated website solution. We also implemented the invetory
              system with updated stock overview.{" "}
            </p>
            <button className="flex text-darkBlue2 text-[20px] gap-x-3 px-4 py-2 mt-[20px] font-light bg-white rounded-[27px] shadow-buttonShadow justify-center items-center cursor-pointer">
              <p>See the work</p>
              <img src="/our-work/arrow-icon.svg" alt="arrow" className="mt-1" />
            </button>
          </div>
        </div>
      </div>
  );
}