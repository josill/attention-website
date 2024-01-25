import React, { useState } from 'react'
import { useSpring, animated, config } from "react-spring";
import useMeasure from "react-use-measure";
import ServiceCard from './ServiceCard';

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
  const [measureRef, { height }] = useMeasure();

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
      className="w-[calc(100vw-4em)] min-h[250px] z-10 relative flex flex-col items-start justify-center py-4 pb-8 px-8 mt-8 shadow-smallLight dark:shadow-smallDark
  rounded-[30px] border border-[0.25px] border-lineGray dark:border-0 font-beVietnam dark:bg-[url('/services/software-development-card-bg.png')] 
  bg-cover bg-center bg-blend-darken bg-blend-normal linear-gradient(to bottom, #272B34 0%, #1F2325 46%, #20222D 100%)"
    >
      <h3 className="text-black dark:text-white text-[20px] font-semibold">
        Software development
      </h3>
      <p className="text-[16px] text-paragraphGray dark:text-white my-4 mt-4">
        Some of the solutions we have built for our clients.
      </p>
      <div className="flex flex-col gap-y-8">
        {content.map((item, index) => (
          <ServiceCard 
          content={item} 
          isExpanded={expandedCards.includes(index)} 
          setExpandedCards={setExpandedCards}
          index={index}
          key={index} />
        ))}
      </div>  
    </div>
  )
}

