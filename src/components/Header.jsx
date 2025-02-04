/* eslint-disable react/prop-types */
import { useState } from 'react';

const Header = ({ mainRef, whoamiRef, servicesRef, packsRef, contactRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className='h-[70px] max-w-[1380px] min-mx-[50px] w-screen mx-auto flex items-center justify-between bg-white py-[12px] px-[32px] mt-[17px] rounded-[8px]'>
        <h1 className='text-[24px] xl:text-[32px] text-(--Main)'>
          حَطَّابْ مَريَم البَتُولْ
        </h1>
        <ul
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row gap-[30px] absolute rounded-[7px] md:static top-[100px] left-[10px]  md:w-auto bg-white md:bg-transparent p-4 md:p-0`}
        >
          <li className='text-[#626A48] xl:text-[20px]'>
            <button
              onClick={() => {
                mainRef.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className='cursor-pointer'
            >
              الرئيسية
            </button>
          </li>
          <li className='text-[#626A48] xl:text-[20px]'>
            <button
              onClick={() =>
                whoamiRef.current?.scrollIntoView({ behavior: 'smooth' })
              }
              className='cursor-pointer'
            >
              مَن أنا ؟
            </button>
          </li>
          <li className='text-[#626A48] xl:text-[20px]'>
            <button
              onClick={() =>
                servicesRef.current?.scrollIntoView({ behavior: 'smooth' })
              }
              className='cursor-pointer'
            >
              الخدمات
            </button>
          </li>
          <li className='text-[#626A48] xl:text-[20px]'>
            <button
              onClick={() =>
                packsRef.current?.scrollIntoView({ behavior: 'smooth' })
              }
              className='cursor-pointer'
            >
              الباقات
            </button>
          </li>
          <li className='text-[#626A48] xl:text-[20px]'>
            <button
              onClick={() =>
                contactRef.current?.scrollIntoView({ behavior: 'smooth' })
              }
              className='cursor-pointer'
            >
              التواصل
            </button>
          </li>
        </ul>
        <a target='_blank'
          href='https://wa.me/+905062512430?text=%D9%87%D9%84%20%D9%8A%D9%85%D9%83%D9%86%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AD%D8%AC%D8%B2%20%D8%A7%D9%84%D8%AC%D9%84%D8%B3%D8%A7%D8%AA%20%D9%85%D9%86%20%D9%81%D8%B6%D9%84%D9%83%20%D8%9F'
          className=' xl:flex justify-center w-[80px] h-[40px] text-[15px] xl:text-[22px] bg-[#626A48] text-white xl:w-[135px] xl:h-[50px] py-[8px] px-auto rounded-[7px] text-center cursor-pointer hover:scale-102 ease-in duration-100 hidden md:block'
        >
          إحجز جلستك
        </a>
        {/* Hamburger menu for mobile */}
        <button
          className='md:hidden'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16m-7 6h7'
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default Header;
