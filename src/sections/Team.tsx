import SwiperComponent from '@/components/SwiperComponent'
import React from 'react'

export default function Team() {
  const carouselItems = [
    {
      imgPath: '/our-team/worker-sample.png',
      position: 'Fullstack Developer',
      name: 'Jonathan Sillak',
      description: 'Co-founder of Attention. Changing the world line by line.',
      link: 'https://ee.linkedin.com/in/jonathan-sillak-375a59279'
    },
    {
      imgPath: '/our-team/worker-sample.png',
      position: 'Fullstack Developer',
      name: 'Martin Metsküla',
      description: 'Co-founder of Attention. Use the power of code to change the world.',
      link: 'https://ee.linkedin.com/in/martin-metskula'
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