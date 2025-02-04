/* eslint-disable react/prop-types */

const Button = ({ title, contactRef, script }) => {
  return (
    <button onClick={script} className='flex justify-center items-center text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] bg-[#626A48] text-white w-[100px] sm:w-[120px] md:w-[135px] h-[40px] sm:h-[45px] md:h-[50px] py-[6px] sm:py-[7px] md:py-[8px] px-auto rounded-[5px] sm:rounded-[6px] md:rounded-[7px] text-center cursor-pointer hover:scale-102 ease-in duration-100'>
      {title}
    </button>
  );
};

export default Button;
