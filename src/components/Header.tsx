import React from 'react'
import { useState, useEffect } from 'react'
import ThemeSwitch from './ThemeSwitch'

function Header() {
  return (
    <nav className='flex justify-between items-center bg-white dark:bg-black px-8 py-4'>
        <h1 className='text-4xl text-center text-gray-900 dark:text-white font-spotnik'>Attention</h1>
        <ThemeSwitch/>
    </nav>
  )
}

export default Header