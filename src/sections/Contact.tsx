import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="mt-32">
      <div className="flex flex-col justify-center items-center gap-y-4 px-8 text-textBlue">
        <h2 className="font-beVietnam text-darkBlue4 dark:text-white text-[30px] mb-8">
          Get in touch today 👋
        </h2>
        <input
          placeholder="Name"
          className="w-full min-h-[50px] rounded-[16px] border-2 border-darkBlue4 pl-4 dark:bg-customBlack4"
        />
        <input
          placeholder="Email*"
          className="w-full min-h-[50px] rounded-[16px] border-2 border-darkBlue4 pl-4 dark:bg-customBlack4"
        />
        <input
          placeholder="Message*"
          className="w-full text-start min-h-[200px] rounded-[16px] border-2 border-darkBlue4 pl-4 dark:bg-customBlack4 pb-[140px]"
        />
        <button className="rounded-[16px] bg-darkBlue4 border-2 border-darkBlue4 w-full min-h-[50px] text-[20px] text-white">
          Send
        </button>
      </div>
    </section>
  );
}
