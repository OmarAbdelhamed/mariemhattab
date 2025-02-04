/* eslint-disable react/prop-types */
import { BiLogoWhatsapp } from 'react-icons/bi';
import { IoMailOutline, IoLogoInstagram } from 'react-icons/io5';

const Footer = ({ mainRef, whoamiRef, servicesRef, packsRef, contactRef }) => {
  return (
    <footer className=' flex flex-col items-center h-auto md:h-[235px] justify-between w-full bg-[#626A48] pt-[30px]'>
      {/* Main Content */}
      <div className='flex flex-col md:flex-row justify-between items-center gap-[20px] md:gap-[50px] w-full max-w-[690px] px-4 md:px-0 h-auto md:h-[100px]'>
        {/* Sections */}
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-[20px] mb-[10px] md:mb-0 md:text-[32px] font-extralight text-slate-200 underline'>
            الأقسام
          </h1>
          <ul className='flex flex-row flex-wrap justify-center gap-[10px] md:gap-[15px]'>
            <li className='text-[15px] md:text-[25px] text-slate-200'>
              <button
                onClick={() =>
                  mainRef.current?.scrollIntoView({ behavior: 'smooth' })
                }
                className='cursor-pointer'
              >
                الرئيسية
              </button>
            </li>
            <li className='text-[15px] md:text-[25px] text-slate-200'>
              {' '}
              <button
                onClick={() =>
                  whoamiRef.current?.scrollIntoView({ behavior: 'smooth' })
                }
                className='cursor-pointer'
              >
                مَن أنا ؟
              </button>
            </li>

            <li className='text-[15px] md:text-[25px] text-slate-200'>
              <button
                onClick={() =>
                  servicesRef.current?.scrollIntoView({ behavior: 'smooth' })
                }
                className='cursor-pointer'
              >
                الخدمات
              </button>
            </li>
            <li className='text-[15px] md:text-[25px] text-slate-200'>
              <button
                onClick={() =>
                  packsRef.current?.scrollIntoView({ behavior: 'smooth' })
                }
                className='cursor-pointer'
              >
                الباقات
              </button>
            </li>
            <li className='text-[15px] md:text-[25px] text-slate-200'>
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
        </div>

        {/* Contact Icons */}
        <div className='flex flex-col items-center md:items-start'>
          <h1 className='text-[20px] md:text-[32px] mb-[10px] md:mb-0 font-extralight text-slate-200 underline antialiased'>
            التواصل
          </h1>
          <div className='flex flex-row gap-[10px]'>
            <a
              href='https://www.instagram.com/psy_meriembatoul/profilecard/?igsh=MWhjbWQxdm13OXMxbw=='
              target='_blank'
              rel='noopener noreferrer'
            >
              <IoLogoInstagram className='size-[20px] md:size-[30px] text-slate-200 cursor-pointer' />
            </a>
            <a target='_blank' href='https://wa.me/+905062512430'>
              <BiLogoWhatsapp className='size-[20px] md:size-[30px] text-slate-200' />
            </a>
            <a target='_blank'  href='mailto:hattabmeriembatoul@gmail.com'   >
              <IoMailOutline className='size-[20px] md:size-[30px] text-slate-200' />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='w-full flex flex-col items-center justify-end mt-[20px] md:mt-0'>
        <hr className='w-full h-[1px]  bg-white border-0 opacity-80' />
        <div className='flex flex-row md:flex-row items-center justify-center h-[50px] md:h-[75px] gap-[5px] md:gap-0'>
          <p className='text-[14px] md:text-[18px] text-slate-200 subpixel-antialiased'>
            حَطَّابْ مَريَم البَتُولْ 2025 © 
          </p>
          <p className='text-[14px] md:text-[18px] mr-[3px] text-slate-200 antialiased'>
            | &nbsp;موقع &nbsp;تطوير&nbsp;&nbsp; <a href='https://www.dev-omar.com' target='_blank' rel='noopener noreferrer' className='underline hover:text-blue-600'>عمــر أبوالسعود</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
