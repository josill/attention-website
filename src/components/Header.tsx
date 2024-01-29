import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import handleClick from "@/utils/scroll";

function Header({
  sidebarOpen,
  setSidebarOpen,
  deviceIsTablet,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  deviceIsTablet: boolean;
}) {
  return (
    <nav
      className={`z-20 fixed flex justify-center items-center bg-bgWhite dark:bg-black py-4 font-spotnik w-full h-[140px]`}
    >
      <div className="hidden lg:block border-[0.25px] border-lineGray dark:border-customGray min-w-[30px] lg:min-w-[36px] flex-grow"></div>
      <div className="flex lg:grid lg:grid-cols-6 w-full items-center max-w-[1440px]">
        <div className="flex flex-row justify-start items-center col-span-1 w-full">
        <div className="lg:hidden border border-[0.25px] border-lineGray dark:border-customGray min-w-[20px]"></div>
          <h1
            className="text-4xl lg:text-3xl text-center text-black dark:text-headerWhite ml-4 lg:ml-0
            lg:border-[1px] lg:border-lineGray lg:dark:border-customGray lg:rounded-[13px] lg:p-3"
          >
            Attention
          </h1>
          <div className="hidden lg:block border-[0.25px] border-lineGray dark:border-customGray min-w-[30px] lg:min-w-[36px] flex-grow"></div>
        </div>
        {deviceIsTablet ? (
          <img
            src="/header/burger-menu.svg"
            alt="buger-menu"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            id="burger-menu"
            className="cursor-pointer mr-8"
          />
        ) : (
          <div
            className="flex w-full items-center col-span-4"
            onClick={(e) => handleClick(e)}
          >
            <div className="border-[0.25px] border-lineGray dark:border-customGray min-w-[30px] flex-grow"></div>
            <div className="min-w-1/2 flex flex-row gap-x-[20px] justify-center items-center border-[1px] border-lineGray dark:border-customGray rounded-[32px] py-2 px-2">
              <h2 className="text-[20px] text-black dark:text-headerWhite hover:bg-darkBlue4 hover:text-lightGray2 hover:dark:bg-headerGray rounded-[23.5px] px-3 py-2 mb-1 cursor-pointer">
                Services
              </h2>
              <h2 className="text-[20px] text-black dark:text-headerWhite hover:bg-darkBlue4 hover:text-lightGray2 hover:dark:bg-headerGray rounded-[23.5px] px-3 py-2 mb-1 cursor-pointer">
                Our work
              </h2>
              <h2 className="text-[20px] text-black dark:text-headerWhite hover:bg-darkBlue4 hover:text-lightGray2 hover:dark:bg-headerGray rounded-[23.5px] px-3 py-2 mb-1 cursor-pointer">
                The team
              </h2>
              <h2 className="text-[20px] text-black dark:text-headerWhite hover:bg-darkBlue4 hover:text-lightGray2 hover:dark:bg-headerGray rounded-[23.5px] px-3 py-2 mb-1 cursor-pointer">
                Why us?
              </h2>
              <div className="group flex gap-x-3 items-center justify-center hover:bg-darkBlue4 hover:dark:bg-headerGray rounded-[23.5px] px-4 py-2 mb-1 cursor-pointer">
                <h2 className="text-[20px] text-black dark:text-headerWhite group-hover:text-lightGray2">
                  Contact us
                </h2>
                <img
                  src="/why-us/mail-icon-dark.svg"
                  alt="arrow"
                  height={15}
                  width={15}
                  className="mt-[3px] group-hover:animate-bounce group-hover:fill-lightGray2 text-darkBlue3"
                />
              </div>
            </div>
            <div className="border-[0.25px] border-lineGray dark:border-customGray min-w-[30px] flex-grow"></div>
          </div>
        )}
        <div className="hidden lg:flex items-center relative col-span-1 mr-[-0.5em]">
        <div className="border-[0.25px] border-lineGray dark:border-customGray min-w-[30px] lg:min-w-[36px] flex-grow"></div>
          <ThemeSwitch />
          <div className="absolute top-[-55px] right-[14%] border border-[0.25px] border-lineGray dark:border-customGray w-[1px] min-h-[55px] flex-grow"></div>
        </div>
      </div>
      <div className="hidden lg:block border-[0.25px] border-lineGray dark:border-customGray min-w-[30px] lg:min-w-[36px] flex-grow"></div>
    </nav>
  );
}

export default Header;
