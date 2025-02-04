/* eslint-disable react/prop-types */

import Button from '../utils/Button';

const Whoami = ({whoamiRef}) => {

  
  return (
    <div
      className=' w-screen mt-[150px] flex flex-col md:flex-row gap-[40px] justify-center md:justify-center items-center h-auto md:h-[600px] px-6 md:px-[136px] max-w-[1380px] mx-auto py-10 md:py-0 '
      id='whoami'
      ref={whoamiRef}
    >
      
      {/* Video Section */}
      <div className={` hidden min-md:flex relative  object-cover  overflow-hidden shadow-xl mb-10 md:mb-0 max-md:max-w-[500px]  px-[20px] md:px-0 md:min-w-[350px] md:min-h-[350px]   xl:w-[520px]  xl:h-[520px] rounded-[5px] mt-10 xl:mt-0`}>
        <video
          controls
          className=' object-contain aspect-square'
          poster='/assets/123.jpg' // Add a poster image
          aria-label='Introduction video'
          loop
          loading="lazy"
        >
          <source src='/assets/F.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Text Content */}
      <div className='flex flex-col text-center md:text-right justify-between items-center md:items-start gap-6 xl:gap-[25px] h-auto xl:h-[355px] md:w-auto'>
        <h1 className='text-[30px] lg:text-[36px] xl:text-[48px] text-(--Main)'>
          مَن أنا ؟
        </h1>
        <p className='text-[20px]  lg:text-[20px] xl:text-[28px] text-[#626A48] w-[300px] md:w-[350px] lg:w-[468px]'>
          معاجلة نفسية مرخصة من وزارة الصحة الجزائرية صاحبة عيادة نفسية بالجزائر
          منذ 2017 اختصاصية في العلاج المعرفي السلوكي و العلاج بالالتزام و
          التقبل - تطبيق اختبارات الذكاء تشخيص ADHD- صعوبات التعلم- التوحد
        </p>
        <a target='_blank' href='https://wa.me/+905062512430'><Button title='توَاصل مَعيْ' /></a>
      </div>

      {/* Video Section */}
      <div className={` flex min-md:hidden relative max-w-[520px] max-h-[520px] object-cover  overflow-hidden shadow-xl mb-10 md:mb-0 max-md:max-w-[500px] w-screen px-[20px] md:px-0 md:w-[350px] md:h-[350px]  lg:w-[400px] xl:w-[520px] lg:h-[400px] xl:h-[520px] rounded-[5px] mt-10 xl:mt-0`}>
        <video
          controls
          className='w-full h-full object-contain aspect-square'
          poster='/assets/123.jpg' // Add a poster image
          aria-label='Introduction video'
          loop
          loading="lazy"
        >
          <source src='/assets/F.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      
    </div>
  );
};

export default Whoami;