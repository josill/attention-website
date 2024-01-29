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

export default function CarouselItemWork({
  imgPath,
  techStacks,
  title,
  description,
  link,
}: CarouselItemWorkProps) {
  const { resolvedTheme } = useTheme();
  return (
    <div className="max-w-fit flex items-center justify-center h-full md:mx-4 mx-[16px]">
      <div
        className="min-h[250px] h-full z-10 relative flex flex-col items-start justify-center py-4 pb-8 px-4 mt-8 shadow-smallLight dark:shadow-smallDark
                    rounded-[30px]  border-[0.25px] border-lineGray dark:border-0 font-beVietnam bg-cardGray dark:bg-[url('/our-work/latest-work-card-bg-dark.svg')]
                    bg-cover bg-center  bg-blend-normal linear-gradient(to bottom, #272B34 0%, #1F2325 46%, #20222D 100%)"
      >
        <img
          src={imgPath}
          alt={title}
          height={200}
          width={300}
          className="rounded-[27px]"
        />
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mt-5 text-[20px] text-#32302E">
          {techStacks.map((techStack, index) => (
            <div
              className="flex flex-row items-center justify-center gap-x-3"
              key={index}
            >
              <div className="flex justify-center items-center rounded-[18px] px-2 py-1 gap-x-3 bg-react-gradient shadow-glow-weak">
                <img
                  src={techStack.iconPath}
                  alt={techStack.techName}
                  className="rounded-[10px]"
                  height={30}
                  width={30}
                />
                <p className="pr-2 pb-1">{techStack.techName}</p>
              </div>
              {index % 2 === 0 && index !== techStacks.length - 1 && (
                <img
                  src={
                    resolvedTheme === "dark"
                      ? "/our-work/plus-white.svg"
                      : "/our-work/plus-black.svg"
                  }
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start mt-8 px-4">
          <h3 className="text-black dark:text-white text-[20px] font-semibold">
            {title}
          </h3>
          <p className="text-[16px] text-paragraphGray dark:text-textGray2 my-4 mt-4">
            {description}
          </p>
          <a
            className="flex text-darkBlue2 text-[20px] gap-x-3 px-4 py-2 mt-[20px] font-light bg-white rounded-[27px] shadow-buttonShadow justify-center items-center cursor-pointer"
            href={link}
            target="_blank"
          >
            <p>See the work</p>
            <img src="/our-work/arrow-icon.svg" alt="arrow" className="mt-1" />
          </a>
        </div>
      </div>
    </div>
  );
}
