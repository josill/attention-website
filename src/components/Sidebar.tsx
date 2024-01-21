import React from 'react';
import ThemeSwitch from './ThemeSwitch';

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
  const animationClasses = isOpen ? `sidebar open` : `sidebar closed`;

  return (
    <div
      className={`
        ${animationClasses} bg-lightBlue2 dark:bg-customBlack dark:border-l dark:border-y dark:border-l-2 dark:border-y-2
      `}
    >
      <ThemeSwitch />
      <p>Services</p>
      <p>Our work</p>
      <p>The team</p>
      <p>Why us</p>
      <button className='p-2 px-4 rounded-[27px] bg-white text-darkBlue2 text-[18px] shadow-xl'>Contact us</button>
    </div>
  );
}