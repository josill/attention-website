import React from "react";

interface CardContent {
  iconPath: string;
  css: string;
  height: string;
  width: string;
}

interface TechStackCardProps {
  content: CardContent[];
}

export default function TechStackCard({ content }: TechStackCardProps) {
  return (
    <div
      className="w-full min-h-[350px] z-10 relative flex flex-col items-start py-8 px-8 shadow-smallLight dark:shadow-smallDark
        rounded-[30px] border border-[0.25px] border-lineGray dark:border-0 font-beVietnam bg-[url('/services/tech-stack-card-bg-light.svg')]
        dark:bg-[url('/services/tech-stack-card-bg-dark.svg')] 
        bg-cover bg-center bg-blend-darken bg-blend-normal linear-gradient(to bottom, #272B34 0%, #1F2325 46%, #20222D 100%)"
    >
      <h3 className="text-customBlack3 dark:text-white text-[20px] font-semibold">
        Stacks we use
      </h3>
      <p className="text-[16px] text-textGray dark:text-textGray3 my-4 mt-4">
        We use the latest technologies to build your product and we don&apos;t
        overcomplicate our tech stack.
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 sm:gap-y-8 items-center justify-center w-full">
        {content.map((icon, index) => {
          return (
            <div
              className={`flex w-[70px] h-[70px] items-center justify-center ${icon.css} p-2 rounded-[18px]`}
              key={index}
            >
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
  );
}
