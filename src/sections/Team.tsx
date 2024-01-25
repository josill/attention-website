import SwiperComponent from '@/components/SwiperComponent'
import React from 'react'

export default function Team() {
  const carouselItems = [
    {
      imgPath: '/our-team/worker-sample.png',
      position: 'Backend developer',
      name: 'Jane Belway',
      description: 'Fully integrated website solution. We also implemented the invetory system with updated stock overview.',
      link: '#'
    },
    {
      imgPath: '/our-team/worker-sample.png',
      position: 'Backend developer',
      name: 'Jane Belway',
      description: 'Fully integrated website solution. We also implemented the invetory system with updated stock overview.',
      link: '#'
    },
    {
      imgPath: '/our-team/worker-sample.png',
      position: 'Backend developer',
      name: 'Jane Belway',
      description: 'Fully integrated website solution. We also implemented the invetory system with updated stock overview.',
      link: '#'
    },
    {
      imgPath: '/our-team/worker-sample.png',
      position: 'Backend developer',
      name: 'Jane Belway',
      description: 'Fully integrated website solution. We also implemented the invetory system with updated stock overview.',
      link: '#'
    },
    {
      imgPath: '/our-team/worker-sample.png',
      position: 'Backend developer',
      name: 'Jane Belway',
      description: 'Fully integrated website solution. We also implemented the invetory system with updated stock overview.',
      link: '#'
    },
  ]
  return (
    <section className="flex flex-col justify-center items-center mt-10 w-[100vw]" id='team'>
      <div className="flex flex-row justify-between items-center w-[100vw]">
        <div className="border border-[0.25px] border-lineGray w-1/4"></div>
        <h2 className="text-customGray dark:text-white text-[25px] font-beVietnam font-light">
          The team
        </h2>
        <div className="border border-[0.25px] border-lineGray w-1/4"></div>
      </div>
      <div className='max-w-[100vw]'>
        <SwiperComponent carouselItems={carouselItems} />
      </div>
    </section>
  )
}