import React from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Switch
      defaultChecked={resolvedTheme === "dark"}
      size="lg"
      color="primary"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    ></Switch>
  );
}
