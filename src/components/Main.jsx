/* eslint-disable react/prop-types */
import Button from '../utils/Button';

const Main = ({ mainRef, contactRef }) => {
  return (
    <div
      className='w-screen flex flex-col md:flex-row justify-center items-center h-auto md:h-[825px] px-6 md:px-[135px] max-w-[1380px] mx-auto py-10 md:py-0'
      id='main'
      ref={mainRef}
    >
      {/* Text Content */}
      <div className='flex flex-col text-center md:text-right justify-between items-center md:items-start gap-6 xl:gap-[25px] h-auto xl:h-[260px] md:w-auto'>
        <h1 className='px-[20px] md:px-0 md:pl-[20px] max-md:w-screen text-[25px] lg:text-[28px] lg:w-[445px] xl:text-[36px] text-(--Main) xl:w-[545px]'>
          إبدا رحلتك نحو التغيير مع الأخصائية النفسية حطاب مريم البتول
        </h1>
        <p className=' w-[300px] md:text-[15px] lg:text-[18px] lg:w-[400px]  xl:text-[20px] text-[#626A48]  xl:w-[350px]'>
          اعرف نفسك اكثر و تصالح معها ستجعلك اكثر مرونة مع الاخرين و مع المواقف
        </p>
        <Button 
          contactRef={contactRef}
          script = {() =>contactRef.current?.scrollIntoView({ behavior: 'smooth' })}
          className='cursor-pointer'
          title='إحجز إستشارة'
        />
      </div>

      {/* Image */}
      <img
        className=' max-md:max-w-[500px] w-screen px-[20px] md:px-0 md:w-[350px] md:h-[350px]  lg:w-[400px] xl:w-[520px] lg:h-[400px] xl:h-[520px] rounded-[5px] mt-10 xl:mt-0'
        src='/assets/mh.jpg'
        alt='مريم البتول حطاب'
      />
    </div>
  );
};

export default Main;
