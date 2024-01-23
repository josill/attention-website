import React from "react";
import handleClick from "@/utils/ScrollHandler";

export default function Footer() {
  
    return (
    <div className="flex flex-col justify-center items-center bg-white dark:bg-black text-textGray8 dark:text-lighGray3 text-[16px]">
      <div className="flex flex-col items-center justify-center gap-y-[20px] border-y border-lightGray2 dark:border-darkGray3 py-[20px] mt-[80px] w-full"
      onClick={(e) => handleClick(e)}
      >
        <p>Services</p>
        <p >Our work</p>
        <p>The team</p>
        <p>Why us?</p>
        <p>Get in touch</p>
      </div>
      <div className="pb-[50px]">
        <h1 className="text-2xl text-center text-black dark:text-white font-spotnik pt-[40px]">
          Attention
        </h1>
        <p className="text-[16px] text-textGray9 pt-[20px]">
          @2024 Attention OÜ
        </p>
      </div>
    </div>
  );
}
