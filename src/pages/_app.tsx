import "@/styles/globals.css";
import { useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import Index from ".";
import { NextUIProvider } from "@nextui-org/react";

export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NextUIProvider>
      <ThemeProvider attribute="class">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <Index isOpen={isOpen} />
        {/* <Component {...pageProps} /> */}
      </ThemeProvider>
    </NextUIProvider>
  );
}
