import React, { useEffect, useState } from "react";
import Hero from "@/sections/Hero";
import Sidebar from "@/components/Sidebar";

export default function Index({ isOpen }: { isOpen: boolean }) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkWindowSize();

    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden font-beVietnam bg-bgWhite dark:bg-black">
      {isMobile && isOpen && <Sidebar isOpen={isOpen} />}
      <Hero />
    </div>
  );
};
