import React from "react";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";

const SphereAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden font-beVietnam bg-bgWhite dark:bg-black">
      <Hero />
      <Services />
    </div>
  );
};

export default SphereAnimation;
