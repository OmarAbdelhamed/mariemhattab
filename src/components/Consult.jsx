/* eslint-disable react/prop-types */
import CardButton from '../utils/CardButton';

const Consult = ({ contactRef }) => {
  return (
    <div className=' flex flex-col bg-(--Main) items-center justify-center px-[195px] py-[90px] my-[145px] h-auto'>
      <img
        className='w-[70px] h-[70px] items-center'
        src='/assets/256.png'
        alt=''
      />
      <h1 className='text-[32px] mt-[10px] md:mt-0 md:text-[48px] text-white mb-[77px]'>
        الإستشارات النفسِّية
      </h1>

      <div className='flex md:flex-row sm:flex-col max-sm:flex-col items-end md:w-[700px] lg:w-[990px] h-auto justify-between'>
        <div className='flex flex-col max-sm:mb-[20px] sm:mb-[20px] items-center justify-center text-center max-w-[175px] '>
          <h1 className='text-[28px] md:text-[32px] text-white '>
            إستشارة في المكتب
          </h1>
          <p className='text-[20px] text-white opacity-45 mb-[30px]'>
            المدة 45 دقيقة
          </p>
          <CardButton
            contactRef={contactRef}
            script={() =>
              contactRef.current?.scrollIntoView({ behavior: 'smooth' })
            }
            classes='max-sm:hidden sm:hidden md:flex'
            title='احجز الان'
            textColor='(--Main)'
            bgColor='white'
          />
        </div>
        <div className='flex flex-col max-sm:mb-[20px] sm:mb-[20px] items-center justify-center text-center max-w-[175px]'>
          <h1 className='text-[28px] md:text-[32px] text-white'>
            إستشارة VIP في مكتب مفتوح
          </h1>
          <p className='text-[20px] text-white opacity-45 mb-[30px]'>
            المدة 60 دقيقة
          </p>
          <CardButton
            contactRef={contactRef}
            script={() =>
              contactRef.current?.scrollIntoView({ behavior: 'smooth' })
            }
            classes='max-sm:hidden sm:hidden md:flex'
            title='احجز الان'
            textColor='(--Main)'
            bgColor='white'
          />
        </div>
        <div className='flex flex-col  items-center justify-center max-sm:mb-[20px] sm:mb-[20px] text-center max-w-[175px]'>
          <h1 className='text-[28px] md:text-[32px] text-white'>
            إستشارة أونلاين
          </h1>
          <p className='text-[20px] text-white opacity-45 mb-[30px]'>
            المدة 45 دقيقة
          </p>
          <CardButton
            contactRef={contactRef}
            script={() =>
              contactRef.current?.scrollIntoView({ behavior: 'smooth' })
            }
            title='احجز الان'
            textColor='(--Main)'
            bgColor='white'
          />
        </div>
      </div>
    </div>
  );
};

export default Consult;
