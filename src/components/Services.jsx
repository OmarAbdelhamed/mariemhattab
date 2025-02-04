/* eslint-disable react/prop-types */
import Button from '../utils/Button';

const Services = ({ servicesRef }) => {
  return (
    <div
      ref={servicesRef}
      id='services'
      className=' w-screen flex flex-col justify-between items-center max-w-[1380px] min-h-[480px] mx-auto px-[135px] py-[90px] mb-[200px]'
    >
      <h1 className='text-[32px] lg:text-[48px] text-(--Main) mb-[25px]'>
        الخدمات
      </h1>
      <p className='max-sm:w-screen  max-sm:px-[40px] text-[20px] md:text-[25px] lg:text-[32px] text-[#626A48] mb-[25px] mx-[30px]'>
        أؤمن بأنّ لكل شخص رحلة فريدة في طريقه نحو التعافي والراحة النفسية. نسعد
        بمرافقتكم في هذه الرحلة من خلال خدماتي العلاجية التي تشمل التعامل مع
        الاكتئاب، الوسواس القهري، الفوبيا (الرهاب)، الهوس الاكتئابي، اضطرابات
        القلق بجميع أنواعها، اضطراب الشخصية الحدية، الاضطرابات السلوكية،
        والاضطرابات الجنسية. ولأنّ التشخيص الدقيق هو البداية الصحيحة للعلاج
        الفعّال، أقدّم أيضًا خدمات تشخيصية متكاملة، تشمل تشخيص اضطراب التوحد،
        واضطراب نقص الانتباه وفرط الحركة (ADHD)، بالإضافة إلى تطبيق اختبار
        الذكاء وكسلر (Wechsler IQ Test). أنا هنا لدعمكم ومساعدتكم على استعادة
        صحتكم النفسية
      </p>
      <a target='_blank' href='https://www.instagram.com/psy_meriembatoul/profilecard/?igsh=MWhjbWQxdm13OXMxbw=='><Button title='تفاصيل اكثر' /></a>
    </div>
  );
};

export default Services;
