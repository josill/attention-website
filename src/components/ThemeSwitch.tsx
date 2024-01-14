import React from "react";
import { useState, useEffect } from "react";
import { Switch, VisuallyHidden, useSwitch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import { useTheme } from "next-themes";

const ThemeSwitch = (props: any) => {
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);

  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true));
  return (
    <div className="flex flex-col gap-2">
      <span className="text-gray-700 dark:text-gray-200 p-1 sm:px-3 sm:py-2 ">
        Current theme: {mounted && resolvedTheme}
      </span>
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "w-8 h-8",
              "flex items-center justify-center",
              "rounded-lg bg-default-100 hover:bg-default-200 cursor-pointer",
            ],
          })}
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          {isSelected ? <SunIcon /> : <MoonIcon />}
        </div>
      </Component>
    </div>
  );
};

export default function App() {
  return <ThemeSwitch />;
}
