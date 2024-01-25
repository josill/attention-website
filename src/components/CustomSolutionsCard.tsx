import React from 'react'

export default function CustomSolutionsCard() {
  return (
    <div
    className="w-[calc(100vw-4em)] min-h-[350px] z-10 relative flex flex-col items-start py-4 px-8 mt-8 shadow-smallLight dark:shadow-smallDark
rounded-[30px] border border-[0.25px] border-lineGray dark:border-0 font-beVietnam bg-[url('/services/custom-solutions-card-bg-light.svg')]
dark:bg-[url('/services/custom-solutions-card-bg-dark.svg')] 
bg-cover bg-center bg-blend-darken bg-blend-normal linear-gradient(to bottom, #272B34 0%, #1F2325 46%, #20222D 100%)"
  >
    <h3 className="text-customBlack2 dark:text-white text-[20px] font-semibold">
      Custom solutions
    </h3>
    <p className="text-[16px] text-textGray dark:text-textGray my-4 mt-4">
      We are flexible in our approach and can build a custom solution for your business.
    </p>
  </div>
  )
}