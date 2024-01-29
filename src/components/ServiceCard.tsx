import React from "react";
import { useSpring, animated, config } from "react-spring";
import useMeasure from "react-use-measure";

interface CardContent {
  iconPath: string;
  css: string;
  header: string;
  description: string;
}

interface ServiceCardProps {
  content: CardContent;
  isExpanded: boolean;
  setExpandedCards: React.Dispatch<React.SetStateAction<number[]>>;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  content,
  isExpanded,
  setExpandedCards,
  index,
}) => {
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
    <div className="relative">
      <div className="absolute w-full right-0 top-0 z-0 border-t border-gridLight dark:border-gridDark"></div>
      <div
        className={`w-full rounded-[16px] p-4 cursor-pointer z-20 ${content.css}`}
        onClick={() => handleCardClick(index)}
      >
        <div className="flex flex-row">
          <img src={content.iconPath} alt={content.header} className="mr-3" />
          <h4 className="text-[18px]">{content.header}</h4>
        </div>
        <animated.div style={{ overflow: "hidden", ...animationStyles }}>
          <div ref={measureRef}>
            <p className="text-[15px] font-light pt-4">{content.description}</p>
          </div>
        </animated.div>
        <div className="absolute w-full right-0 bottom-0 z-0 border-t border-gridLight dark:border-gridDark"></div>
      </div>
    </div>
  );
};

export default ServiceCard;
