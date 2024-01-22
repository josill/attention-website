import React, { useState } from 'react'
import { useSpring, animated, config } from "react-spring";
import useMeasure from "react-use-measure";

interface CardContent {
  iconPath: string;
  css: string;
  header: string;
  description: string;
}

interface SoftwareDevelopmentCardProps {
  content: CardContent[];
}

export default function SoftwareDevelopmentCard({ content }: SoftwareDevelopmentCardProps) {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const handleCardClick = (index: number) => {
    setExpandedCards((prevExpandedCards) => {
      if (prevExpandedCards.includes(index)) {
        return prevExpandedCards.filter((item) => item !== index);
      } else {
        return [...prevExpandedCards, index];
      }
    });
  };
  return (
    <div
    className="w-[calc(100vw-4em)] min-h[250px] z-10 relative flex flex-col items-start justify-center py-4 pb-8 px-8 mt-8 shadow-small
  rounded-[30px] border border-[0.25px] border-lineGray dark:border-0 font-beVietnam dark:bg-[url('/services/software-development-card-bg.png')] 
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
        <div className="relative" key={index}>
          <div className="absolute w-full right-0 top-0 z-0 border-t border-gridLight dark:border-gridDark"></div>
          <div
            className={`w-full rounded-[16px] p-4 cursor-pointer z-20 ${item.css}`}
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
  </div>  )
}

