import React from "react";
import { useState, useEffect } from "react";
import ThemeSwitch from "./ThemeSwitch";

function Header({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <nav className="z-20 fixed flex justify-between items-center bg-bgWhite dark:bg-black px-2 py-4 font-spotnik w-[100vw] h-[72px]">
      <div className="flex flex-row gap-x-[20px] justify-center items-center">
        <img src="/header/gray-line.svg" alt="gray-line" />
        <h1 className="text-4xl text-center text-black dark:text-white">
          Attention
        </h1>
      </div>
      <div className="flex flex-row">
        <img src="/header/burger-menu.svg" alt="buger-menu" className="pr-4" onClick={() => setIsOpen(!isOpen)} />
      </div>
    </nav>
  );
}

export default Header;
