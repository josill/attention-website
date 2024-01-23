import React from 'react'

export default function Team() {
  return (
    <section className="flex flex-col justify-center items-center mt-10" id='team'>
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
    </section>  )
}