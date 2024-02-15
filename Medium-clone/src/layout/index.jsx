import React, { useEffect, useState } from 'react'
import CustomSvg from '../utils/logo'
import Search from '../components/search'
import { RiEditBoxLine, RiUser3Fill   } from "react-icons/ri";


const Header = () => {

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollTop > lastScrollTop) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); 
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <header className={` bg-backgroundColor fixed top-0 inset-x-0 px-3 py-1 border flex items-center justify-between mb-14 z-10 transition ease-in-out duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <h1 className='flex items-center gap-5'>
        <a href="#">
          <CustomSvg className="w-[142px] h-[30px] ml-3"/>
        </a>
        <Search/>
      </h1>
      <nav>
        <ul className='flex items-center justify-evenly p-2 gap-3'>
          <li>
            <a href="#" className='flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors mr-5' >
              <RiEditBoxLine className='text-2xl' aria-hidden="true"/>
              <span className='pl-2'>Write</span>
            </a>
          </li>
          <li>
            <a href="#" className='p-2 bg-button text-white text-sm rounded-full px-3 hover:bg-green-800 transition-colors' >
              Sign Up
            </a>
          </li>
          <li>
            <a href="#" className='flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors gap-4'>
              <span>Sign in</span>
              <RiUser3Fill  className='text-3xl border rounded-full text-gray-400' aria-hidden="true"/>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
