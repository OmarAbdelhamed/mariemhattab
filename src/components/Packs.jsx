/* eslint-disable react/prop-types */
import PacksCard from '../utils/PacksCard';

const Packs = ({ packsRef }) => {
  return (
    <div
      ref={packsRef}
      id='packs'
      className='flex flex-col bg-(--Main) items-center justify-center px-4 md:px-[385px] py-[50px] md:py-[110px] my-[50px] md:my-[145px]  h-auto md:h-[775px]'
    >
      <img
        className='w-[50px] h-[50px] md:w-[70px] md:h-[70px] mb-[20px] md:mb-[30px]'
        src='/assets/packs.png'
        alt=''
      />
      <h1 className='text-[32px] md:text-[48px] text-white mb-[40px] md:mb-[77px]'>
        الباقاتْ
      </h1>

      <div className='flex flex-col md:flex-row items-center px-[20px] lg:p-0 w-screen md:items-end justify-center md:justify-between gap-[20px] md:gap-[10px] lg:gap-[85px] lg:w-full max-w-[990px]'>
        <PacksCard
          title='جلسة إستشارية'
          sub='المدة 60 دقيقة'
          first='إستشارة مبدئية لفهم حالتك'
          second='أونلاين او  في المكتب'
          buttonTitle='احجز الان'
          buttonColor='(--Main)'
          buttonTextColor='white'
          message='%D8%A7%D8%B1%D9%8A%D8%AF%20%D8%AD%D8%AC%D8%B2%20%D8%AC%D9%84%D8%B3%D8%A9%20%D8%A5%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D9%8A%D8%A9%20%D9%85%D9%86%20%D9%81%D8%B6%D9%84%D9%83%20%D9%87%D9%84%20%D9%8A%D9%85%D9%83%D9%86%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84%20%D8%9F
'
        />
        <PacksCard
          title='باقة شهرية'
          sub='8-4 جلسات'
          first=' جلسات علاج و تشخيص'
          second='أونلاين او  في المكتب'
          buttonTitle='احجز الان'
          buttonColor='(--Main)'
          buttonTextColor='white'
          message='%D8%A7%D8%B1%D9%8A%D8%AF%20%D8%AD%D8%AC%D8%B2%20%D8%A8%D8%A7%D9%82%D8%A9%20%D8%B4%D9%87%D8%B1%D9%8A%D8%A9%20%D9%85%D9%86%20%D9%81%D8%B6%D9%84%D9%83%20%D9%87%D9%84%20%D9%8A%D9%85%D9%83%D9%86%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84%20%D8%9F
'
        />
        <PacksCard
          title='باقة تشخيص'
          sub=' 3 جلسات '
          first=' ADHD-صعوبات التعلم-توحد'
          second='أونلاين او  في المكتب'
          buttonTitle='احجز الان'
          buttonColor='(--Main)'
          buttonTextColor='white'
          message='%D8%A7%D8%B1%D9%8A%D8%AF%20%D8%AD%D8%AC%D8%B2%20%D8%A8%D8%A7%D9%82%D8%A9%20%D8%AA%D8%B4%D8%AE%D9%8A%D8%B5%20%D9%85%D9%86%20%D9%81%D8%B6%D9%84%D9%83%20%D9%87%D9%84%20%D9%8A%D9%85%D9%83%D9%86%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84%20%D8%9F
'
        />
      </div>
    </div>
  );
};

export default Packs;
