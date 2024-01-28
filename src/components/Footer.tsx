import React from "react";
import handleClick from "@/utils/scroll";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center bg-bgWhite dark:bg-black text-textGray8 dark:text-lightGray3 text-[16px] sm:text-[20px] sm:px-8">
      <div
        className="flex flex-col sm:flex-row items-center justify-center sm:justify-between border-y border-lightGray2 dark:border-darkGray3  w-full max-w-[1440px]"
        onClick={(e) => handleClick(e)}
      >
        <div className="hidden sm:block ml-[10px] sm:ml-[60px] border-x-[0.5px] border-lightGray2 dark:border-darkGray3 min-h-[128px] min-w-[60px]" />
        <div className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-end sm:gap-x-8 sm:pr-16 gap-y-[20px] py-[20px]">
          <p>Services</p>
          <p>Our work</p>
          <p>The team</p>
          <p>Why us?</p>
          <p>Get in touch</p>
        </div>
        <div className="hidden sm:block mr-[20px] sm:mr-[60px] border-x-[0.5px] border-lightGray2 dark:border-darkGray3 min-h-[128px] min-w-[60px]" />
      </div>
      <div className="w-full max-w-[1440px] flex flex-col items-center justify-center sm:flex-row sm:justify-between pb-[50px] sm:pb-0">
        <div className="hidden sm:block ml-[10px] sm:ml-[60px] border-x-[0.5px] border-lightGray2 dark:border-darkGray3 min-h-[128px] min-w-[60px]" />
        <div className="w-full flex flex-col items-center sm:items-start justify-center sm:pl-16">
          <h1 className="sm:hidden text-2xl text-center text-black dark:text-white font-spotnik pt-[40px]">
            Attention
          </h1>
          <p className="text-[16px] text-textGray9 pt-[20px]">
            @2024 Attention OÜ
          </p>
        </div>
        <div className="hidden sm:block mr-[20px] sm:mr-[60px] border-x-[0.5px] border-lightGray2 dark:border-darkGray3 min-h-[128px] min-w-[60px]" />
      </div>
    </div>
  );
}
