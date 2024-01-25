import React, { useEffect, useRef } from 'react';
import ThemeSwitch from './ThemeSwitch';
import handleClick from '@/utils/ScrollHandler';

export default function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
  const sidebarRef = useRef<HTMLDivElement>(null);

  const animationClasses = isOpen ? `sidebar open` : `sidebar closed`;

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const burgerMenuElement = document.getElementById('burger-menu');
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && isOpen && event.target !== burgerMenuElement) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div
      ref={sidebarRef}
      className={`
        ${animationClasses} z-20 bg-lightBlue2 dark:bg-customBlack dark:border-l dark:border-y dark:border-l-2 dark:border-y-2
      `}
      onClick={(e) => handleClick(e)}
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
