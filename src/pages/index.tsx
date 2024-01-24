import React, { useEffect, useState } from "react";
import { useSpring, animated, config } from "react-spring";
import useMeasure from "react-use-measure";
import Hero from "@/sections/Hero";
import Sidebar from "@/components/Sidebar";
import Services from "@/sections/Services";
import SoftwareDevelopmentCard from "@/components/SoftwareDevelopmentCard";
import { useTheme } from "next-themes";
import OurWork from "@/sections/Work";
import Team from "@/sections/Team";
import WhyUs from "@/sections/WhyUs";
import Contact from "@/sections/Contact";

export default function Index({ isOpen }: { isOpen: boolean }) {
  const [isMobile, setIsMobile] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  // const [expandedCards, setExpandedCards] = useState<number[]>([]);

  // const content = [
  //   {
  //     iconPath: "/services/e-commerce.svg",
  //     css: "bg-darkBlue dark:bg-[#383838] shadow-small dark:border-3 dark:border-orange",
  //     header: "E-commerce",
  //     description:
  //       "We can build, integrate all the products from inital start to maintenance.",
  //   },
  //   {
  //     iconPath: "/services/e-commerce.svg",
  //     css: "bg-darkBlue dark:bg-[#383838] shadow-small dark:border-3 dark:border-orange",
  //     header: "E-commerce",
  //     description:
  //       "We can build, integrate all the products from inital start to maintenance.",
  //   },
  // ];

  // const handleCardClick = (index: number) => {
  //   setExpandedCards((prevExpandedCards) => {
  //     if (prevExpandedCards.includes(index)) {
  //       return prevExpandedCards.filter((item) => item !== index);
  //     } else {
  //       return [...prevExpandedCards, index];
  //     }
  //   });
  // };

  // const icons = [
  //   {
  //     iconPath: "/services/icons/javascript-icon.svg",
  //     css: "bg-yellow",
  //     height: "50",
  //     width: "50",
  //   },
  //   {
  //     iconPath: "/services/icons/python-icon.svg",
  //     css: "bg-react-gradient",
  //     height: "50",
  //     width: "50",
  //   },
  //   {
  //     iconPath: "/services/icons/csharp-icon.svg",
  //     css: "bg-csharp-gradient",
  //     height: "50",
  //     width: "50",
  //   },
  //   {
  //     iconPath: "/services/icons/react-icon.svg",
  //     css: "bg-react-gradient",
  //     height: "50",
  //     width: "50",
  //   },
  //   {
  //     iconPath: "/services/icons/nextjs-icon.svg",
  //     css: "bg-react-gradient",
  //     height: "50",
  //     width: "50",
  //   },
  //   {
  //     iconPath: "/services/icons/node-icon.svg",
  //     css: "bg-react-gradient",
  //     height: "50",
  //     width: "50",
  //   },
  //   {
  //     iconPath: "/services/icons/django-icon.svg",
  //     css: "bg-django-gradient",
  //     height: "35",
  //     width: "35",
  //   },
  //   {
  //     iconPath: "/services/icons/swift-icon3.png",
  //     css: "bg-swift-gradient",
  //     height: "90",
  //     width: "90",
  //   },
  //   {
  //     iconPath: "/services/icons/react-native-icon.svg",
  //     css: "bg-react-gradient",
  //     height: "50",
  //     width: "50",
  //   },
  // ];

  const whyUsContent = [
    {
      iconPathLight: "/why-us/stack-icon-light.svg",
      iconPathDark: "/why-us/stack-icon-dark.svg",
      header: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ipsum vitae id sed dignissim tincidunt.",
    },
    {
      iconPathLight: "/why-us/computer-icon-light.svg",
      iconPathDark: "/why-us/computer-icon-dark.svg",
      header: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ipsum vitae id sed dignissim tincidunt.",
    },
    {
      iconPathLight: "/why-us/check-icon-light.svg",
      iconPathDark: "/why-us/check-icon-dark.svg",
      header: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ipsum vitae id sed dignissim tincidunt.",
    },
    {
      iconPathLight: "/why-us/dash-icon-light.svg",
      iconPathDark: "/why-us/dash-icon-dark.svg",
      header: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ipsum vitae id sed dignissim tincidunt.",
    },
    {
      iconPathLight: "/why-us/cross-icon-light.svg",
      iconPathDark: "/why-us/cross-icon-dark.svg",
      header: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ipsum vitae id sed dignissim tincidunt.",
    },
  ]

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
      {/* <section className="flex flex-col mt-[72px]">
      <div
        className="flex flex-col justify-center items-center"
        id="title-block"
      >
        <h3 className="text-[20px] text-darkGray mt-8 mb-4">
          Empowering tomorrow
        </h3>
        <h1 className="text-[30px] text-lightGray text-center px-4">
          Innovative{" "}
          <span className="text-lightBlue dark:text-darkBlue">
            IT Solutions
          </span>{" "}
          for a connected world
        </h1>
      </div>
      <canvas id="bg" />
    </section> */}
      <Hero />
      {/* <section className="flex flex-col justify-center items-center">
        <div className="flex flex-row justify-between items-center w-[100vw]">
          <div className="border border-[0.25px] border-lineGray w-1/4"></div>
          <h2 className="text-customGray dark:text-white text-[25px] font-beVietnam font-light">
            Services
          </h2>
          <div className="border border-[0.25px] border-lineGray w-1/4"></div>
        </div>
        <div
          className="w-[calc(100vw-4em)] z-10 relative flex flex-col items-start justify-center py-8 px-8 mt-8 shadow-small
        rounded-[30px] border border-[0.25px] border-lineGray font-beVietnam dark:bg-[url('/services/service-card-background.png')] 
        bg-cover bg-center bg-blend-darken bg-blend-normal linear-gradient(to bottom, #272B34 0%, #1F2325 46%, #20222D 100%)"
        >
          <h3 className="text-black dark:text-white text-[20px] font-semibold">
            Software development
          </h3>
          <p className="text-[16px] text-paragraphGray dark:text-white my-4 mt-4">
            Lorem ipsum dolor sit amet consectetur. Tortor placerat mauris non
            dolor nullam.
          </p>
          <div className="flex flex-col gap-y-8">
          {content.map((item, index) => {
            const isExpanded = expandedCards.includes(index);
            const [measureRef, { height }] = useMeasure();

            const animationStyles = useSpring({
              config: { ...config.stiff, duration: 300 },
              from: {
                height: 0,
              },
              to: {
                height: isExpanded ? height : 0,
              },
            });

            return (
              <div className="relative">
                <div className="absolute w-full right-0 top-0 z-0 border-t border-gridLight dark:border-gridDark"></div>
                <div
                  className={`w-full rounded-[16px] p-4 cursor-pointer z-20 ${item.css}`}
                  key={index}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="flex flex-row">
                    <img
                      src={item.iconPath}
                      alt={item.header}
                      className="mr-3"
                    />
                    <h4 className="text-[18px]">{item.header}</h4>
                  </div>
                  <animated.div
                    style={{ overflow: "hidden", ...animationStyles }}
                  >
                    <div ref={measureRef}>
                      <p className="text-[15px] font-light pt-4">
                        {item.description}
                      </p>
                    </div>
                  </animated.div>
                  <div className="absolute w-full right-0 bottom-0 z-0 border-t border-gridLight dark:border-gridDark"></div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      <div
    className="w-[calc(100vw-4em)] min-h-[350px] z-10 relative flex flex-col items-start py-8 px-8 mt-8 shadow-small
  rounded-[30px] border border-[0.25px] border-lineGray dark:border-0 font-beVietnam bg-[url('/services/service-maintenance-card-bg-light.svg')]
  dark:bg-[url('/services/service-maintenance-card-bg-dark.svg')] 
  bg-cover bg-center bg-blend-darken bg-blend-normal linear-gradient(to bottom, #272B34 0%, #1F2325 46%, #20222D 100%)"
  >
    <h3 className="text-red dark:text-white text-[20px] font-semibold">
      Service Maintenance
    </h3>
    <p className="text-[16px] text-darkRed dark:text-white my-4 mt-4">
      We are always here making sure your systems are in place. In a continuos partnership.
    </p>
    </div>
      <div
      className="w-[calc(100vw-4em)] min-h-[350px] z-10 relative flex flex-col items-start py-4 px-8 mt-8 shadow-small
  rounded-[30px] border border-[0.25px] border-lineGray dark:border-0 font-beVietnam bg-[url('/services/custom-solutions-card-bg-light.svg')]
  dark:bg-[url('/services/custom-solutions-card-bg-dark.svg')] 
  bg-cover bg-center bg-blend-darken bg-blend-normal linear-gradient(to bottom, #272B34 0%, #1F2325 46%, #20222D 100%)"
    >
      <h3 className="text-customBlack2 dark:text-white text-[20px] font-semibold">
        Custom solutions
      </h3>
      <p className="text-[16px] text-textGray dark:text-textGray my-4 mt-4">
        Websites, mobile applications and web applications
      </p>
    </div>
      <div
        className="w-[calc(100vw-4em)] min-h-[350px] z-10 relative flex flex-col items-start py-4 px-8 mt-8 shadow-small
        rounded-[30px] border border-[0.25px] border-lineGray dark:border-0 font-beVietnam bg-[url('/services/tech-stack-card-bg-light.svg')]
        dark:bg-[url('/services/tech-stack-card-bg-dark.svg')] 
        bg-cover bg-center bg-blend-darken bg-blend-normal linear-gradient(to bottom, #272B34 0%, #1F2325 46%, #20222D 100%)"
      >
        <h3 className="text-customBlack3 dark:text-white text-[20px] font-semibold">
          Stack we use
        </h3>
        <p className="text-[16px] text-textGray dark:text-textGray3 my-4 mt-4">
          Lorem ipsum dolor sit amet consectetur. Tortor placerat mauris non
          dolor nullam.
        </p>
        <div className="grid grid-cols-3 gap-4 items-center justify-center w-full">
          {icons.map((icon, index) => {
            return (
               <div className={`flex w-[70px] h-[70px] items-center justify-center ${icon.css} p-2 rounded-[18px]`}>
                 <img
                  src={icon.iconPath}
                  alt={icon.iconPath}
                  height={icon.height}
                  width={icon.width}
                />
               </div>
            );
          })}
        </div>
      </div>
      </section> */}
      <Services />
      {/* <section className="flex flex-col justify-center items-center mt-10">
        <div className="flex flex-row justify-between items-center w-[100vw]">
          <div className="border border-[0.25px] border-lineGray w-1/4"></div>
          <h2 className="text-customGray dark:text-white text-[25px] font-beVietnam font-light">
            Our Work
          </h2>
          <div className="border border-[0.25px] border-lineGray w-1/4"></div>
        </div>
        <div className="flex flex-col items-start px-8 mt-10">
          <h3 className="text-black dark:text-white text-[20px] font-semibold">
            Here are our latest works
          </h3>
          <p className="text-[16px] text-paragraphGray dark:text-textGray4 my-4 mt-4">
            Lorem ipsum dolor sit amet consectetur. Ipsum vitae id sed dignissim tincidunt. Vehicula tortor sit condimentum eu nunc mauris pellentesque massa.
          </p>
        </div>
        <div
          className="w-[calc(100vw-4em)] min-h[250px] z-10 relative flex flex-col items-center justify-center py-4 pb-8 px-8 mt-8
          rounded-[30px] border border-[0.25px] border-lineGray dark:border-0 font-beVietnam bg-cardGray dark:bg-[url('/our-work/latest-work-card-bg-dark.svg')]
          bg-cover bg-center bg-blend-darken bg-blend-normal linear-gradient(to bottom, #272B34 0%, #1F2325 46%, #20222D 100%)"
        >
          <img
            src="/our-work/latest-works/latest-work-1.png"
            alt="latest work 1"
            height={200}
            width={300}
          />
          <div className="flex gap-x-3 mt-5 text-[20px] text-textGray5">
            <div className="flex justify-center items-center rounded-[18px] px-2 py-1 gap-x-5 bg-react-gradient shadow-glow-weak">
              <img
                src="/services/icons/swift-icon.svg"
                alt="swift-icon"
                className="rounded-[10px]"
                height={30}
                width={30} />
              <p className="pr-2">Swift</p>
            </div>
            <img src={resolvedTheme === "dark" ? "/our-work/plus-white.svg" : "/our-work/plus-black.svg"} />
            <div className="flex justify-center items-center rounded-[18px] px-2 py-1 gap-x-5 bg-react-gradient shadow-glow-weak">
              <img
                src="/services/icons/nextjs-icon.svg"
                alt="nextjs-icon"
                height={30}
                width={30} />
              <p className="pr-2">Nextjs</p>
            </div>
          </div>
          <div className="flex flex-col items-start mt-8">
            <h3 className="text-black dark:text-white text-[20px] font-semibold">
              Custom website development
            </h3>
            <p className="text-[16px] text-paragraphGray dark:text-textGray4 my-4 mt-4">
              Fully integrated website solution. We also implemented the invetory system with updated stock overview.            </p>
            <button className="flex text-darkBlue2 text-[20px] gap-x-3 px-4 py-2 mt-[20px] font-light bg-white rounded-[27px] shadow-buttonShadow justify-center items-center">
              <p>See the work</p>
              <img
                src="/our-work/arrow-icon.svg"
                alt="arrow"
                className="mt-1"
               />
            </button>
          </div>
        </div>
      </section> */}
      <OurWork />
      {/* <section className="flex flex-col justify-center items-center mt-10">
        <div className="flex flex-row justify-between items-center w-[100vw]">
          <div className="border border-[0.25px] border-lineGray w-1/4"></div>
          <h2 className="text-customGray dark:text-white text-[25px] font-beVietnam font-light">
            The team
          </h2>
          <div className="border border-[0.25px] border-lineGray w-1/4"></div>
        </div>
        <div
          className="w-[calc(100vw-4em)] min-h[250px] z-10 relative flex flex-col items-center justify-center py-4 pb-8 px-8 mt-8
          rounded-[30px] border border-[0.25px] border-lineGray dark:border-0 font-beVietnam bg-cardGray dark:bg-[url('/our-work/latest-work-card-bg-dark.svg')]
          bg-cover bg-center bg-blend-darken bg-blend-normal linear-gradient(to bottom, #272B34 0%, #1F2325 46%, #20222D 100%)"
        >
          <img
            src="/our-team/worker-sample.png"
            alt="latest work 1"
            height={200}
            width={300}
            className="rounded-[27px] border-[4px] border-white"
          />
          <div className="flex flex-col items-start mt-8">
            <h4 className="text-[16px] text-darkBrown dark:text-textGray6 mb-1">
              Backend developer
            </h4>
            <h3 className="text-black dark:text-white text-[20px] font-semibold">
              Jane Belway
            </h3>
            <p className="text-[16px] text-paragraphGray dark:text-textGray4 my-4 mt-4">
              Fully integrated website solution. We also implemented the invetory system with updated stock overview.            </p>
            <div className="flex justify-center items-center w-full">
              <button className="flex text-darkBlue2 text-[20px] gap-x-3 px-4 py-2 mt-[20px] font-light bg-white rounded-[27px] shadow-buttonShadow justify-center items-center cursor-pointer">
                <p className="text-textGray7">LinkedIn profile</p>
                <img
                  src="/our-team/arrow-icon.svg"
                  alt="arrow"
                  className="mt-1"
                />
              </button>
            </div>
          </div>
        </div>
      </section> */}
      <Team />
      {/* <section
        className="flex flex-col justify-center items-center mt-[60px] font-beVietnam"
        id="why-us"
      >
        <div className="flex flex-col justify-center items-center w-[100vw]">
          <h2 className="text-customGray dark:text-white text-[25px] font-light">
            Why us
          </h2>
          <div className="w-full flex justify-evenly text-black">
            <div className="w-full flex flex-row">
              <div className="min-w-[10px] border-t-[0.5px] border-lightGray2 dark:border-darkGray3"></div>
              <div className="bg-[url('/why-us/scratched-bg-light.svg')] dark:bg-[url('/why-us/scratched-bg-dark.svg')] min-h-[60px] min-w-[60px] border-x-[0.5px] border-t-[0.5px] border-lightGray2 dark:border-darkGray3"></div>
              <div className="flex-grow"></div>
            </div>
          </div>
          <div className="w-full flex flex-row border-t-[0.5px] border-lightGray2 dark:border-darkGray3">
            <div className="min-w-[10px] border-t-[0.5px] border-lightGray2 dark:border-darkGray3"></div>
            <div className="min-h-[60px] min-w-[60px] border-x-[0.5px] border-t-[0.5px] border-lightGray2 dark:border-darkGray3"></div>
            <div className="flex flex-col justify-center items-start px-4 py-8 gap-y-[10px] flex-grow text-darkBlue4 dark:text-[#DBDBDB] rounded-[30px] hover:bg-[#272B34] hover:border-3 hover:border-[#4A648B]">
            <img src={`${resolvedTheme === "light" ? "/why-us/stack-icon-light.svg" : "/why-us/stack-icon-dark.svg"}`} 
              alt="stack-icon"
              height={20}
              width={20}
            />
              <h3 className="text-[20px]">Lorem Ipsum</h3>
              <p className="text-[14px]">
              Lorem ipsum dolor sit amet consectetur. Ipsum vitae id sed dignissim tincidunt. 
              </p>
            </div>
            <div className="bg-[url('/why-us/scratched-bg-tall-light.svg')] dark:bg-[url('/why-us/scratched-bg-tall-dark.svg')] min-h-[60px] min-w-[60px] border-x-[0.5px] border-t-[0.5px] border-lightGray2 dark:border-darkGray3"></div>
            <div className="min-w-[20px] border-t-[0.5px] border-lightGray2 dark:border-darkGray3"></div>
          </div>
        </div>
      </section> */}
      <WhyUs content={whyUsContent} />
      {/* <div className="flex flex-col justify-center items-center gap-y-4 px-8 text-textBlue">
        <h2 className="font-beVietnam text-darkBlue4 dark:text-white text-[30px]">Get in touch today 👋</h2>
        <input placeholder="Name" 
          className="w-full min-h-[50px] rounded-[16px] border-2 border-darkBlue4 pl-4 dark:bg-customBlack4"
        />
        <input placeholder="Email*" 
          className="w-full min-h-[50px] rounded-[16px] border-2 border-darkBlue4 pl-4 dark:bg-customBlack4"
        />
        <input placeholder="Message*" 
          className="w-full text-start min-h-[200px] rounded-[16px] border-2 border-darkBlue4 pl-4 dark:bg-customBlack4 pb-[140px]"
        />
        <button className="rounded-[16px] bg-darkBlue4 border-2 border-darkBlue4 w-full min-h-[50px] text-[20px] text-white">Send</button>
      </div> */}
      <Contact />
    </div>
  );
}
