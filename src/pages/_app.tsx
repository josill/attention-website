import "@/styles/globals.css";
import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import Index from ".";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth <= 1250);
    };

    checkWindowSize();

    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class">
        <Header sidebarOpen={isOpen} setSidebarOpen={setIsOpen} deviceIsTablet={isTablet} />
        <Index sidebarOpen={isOpen} setSidebarOpen={setIsOpen} deviceIsMobile={isMobile} />
        {/* <Component {...pageProps} /> */}
        <Footer />

      </ThemeProvider>
    </NextUIProvider>
  );
}
