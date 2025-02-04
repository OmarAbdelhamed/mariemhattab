/* eslint-disable react/prop-types */
import { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

const Button = ({ title, textColor, bgColor, classes, contactRef, script }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      onClick={script}
      className={`flex justify-center items-center ${classes} text-[16px] sm:text-[18px] md:text-[20px] bg-${bgColor} font-extralight text-${textColor} w-[120px] sm:w-[140px] md:w-[165px] h-[40px] sm:h-[45px] md:h-[50px] py-[6px] sm:py-[8px] md:py-[10px] rounded-[3px] sm:rounded-[4px] text-center cursor-pointer transition-all duration-300`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`flex items-center transition-transform duration-300 ${
          hover ? '-translate-x-1' : ''
        }`}
      >
        <p className='text-[18px] sm:text-[20px] md:text-[24px]'>{title}</p>
        <IoIosArrowBack
          className={`mr-2 w-[20px] h-[25px] sm:w-[22px] sm:h-[27px] md:w-[25px] md:h-[30px]`}
        />
      </div>
    </button>
  );
};

export default Button;
