/* eslint-disable react/prop-types */
import CardButton from '../utils/CardButton';
import { LuCircleCheckBig } from 'react-icons/lu';
const PacksCard = ({
  title,
  sub,
  first,
  second,
  buttonTitle,
  buttonColor,
  buttonTextColor,
  message,
}) => {
  return (
    <div className='flex flex-col justify-between mx-auto text-center w-[275px] lg:w-[325px] h-[325px] bg-white rounded-[7px] px-[20px] py-[30px]'>
      <div className='flex flex-col items-start'>
        <h1 className='text-[32px] text-black text-right'>{title}</h1>
        <p className='text-[20px] text-black text-right opacity-50'>{sub}</p>
      </div>
      <div className='flex flex-col gap-[10px]'>
        <div className='flex flex-row gap-[10px] justify-start items-start'>
          <LuCircleCheckBig className='size-[20px] text-(--Main)' />
          <p className='text-[18px]'>{first}</p>
        </div>
        <div className='flex flex-row gap-[10px] justify-start items-start'>
          <LuCircleCheckBig className='size-[20px] text-(--Main)' />
          <p className='text-[18px]'>{second}</p>
        </div>
      </div>
      <div className='flex flex-row justify-center items-center'>
        <a href={`https://wa.me/+905062512430?text=${message}`} target='_blank'> 
          <CardButton
            title={buttonTitle}
            textColor={buttonTextColor}
            bgColor={buttonColor}
          />
        </a>
      </div>
    </div>
  );
};

export default PacksCard;
