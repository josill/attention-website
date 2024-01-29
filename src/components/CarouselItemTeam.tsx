import React from "react";
import { CarouselItemTeamProps } from "@/types";

export default function CarouselItemTeam({
  imgPath,
  position,
  name,
  description,
  link,
}: CarouselItemTeamProps) {
  return (
    <div className="max-w-full flex items-center justify-center my-4 md:mx-4 mx-[16px]">
      <div
        className="min-h[250px] z-10 relative flex flex-col items-center justify-center py-4 pb-8 px-4 mt-8 shadow-smallLight dark:shadow-smallDark
            rounded-[30px] border border-[0.25px] border-lineGray dark:border-0 font-beVietnam bg-cardGray dark:bg-[url('/our-work/latest-work-card-bg-dark.svg')]
            bg-cover bg-center bg-blend-darken bg-blend-normal linear-gradient(to bottom, #272B34 0%, #1F2325 46%, #20222D 100%)"
      >
        <img
          src={imgPath}
          alt={position}
          height={200}
          width={300}
          className="rounded-[27px] border-[4px] border-white"
        />
        <div className="flex flex-col items-start mt-8">
          <h4 className="text-[16px] text-darkBrown dark:text-textGray6 mb-1">
            {position}
          </h4>
          <h3 className="text-black dark:text-white text-[20px] font-semibold">
            {name}
          </h3>
          <p className="text-[16px] text-paragraphGray dark:text-textGray4 my-4 mt-4">
            {description}
          </p>
          <div className="flex justify-center items-center w-full">
            <a
              className="flex text-darkBlue2 text-[20px] gap-x-3 px-4 py-2 mt-[20px] font-light bg-white rounded-[27px] shadow-buttonShadow justify-center items-center cursor-pointer"
              href={link}
              target="_blank"
            >
              <p className="text-textGray7">LinkedIn profile</p>
              <img
                src="/our-team/arrow-icon.svg"
                alt="arrow"
                className="mt-1"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
