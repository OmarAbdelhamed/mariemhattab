/* eslint-disable react/prop-types */
import { useState } from 'react';

const Contact = ({ contactRef }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Encode the message for WhatsApp
    const whatsappMessage = encodeURIComponent(
      `🌟 استفسار جديد 🌟\n\n👤 الاسم: ${formData.name}\n📞 رقم الهاتف: ${formData.phone}\n📧 البريد الإلكتروني: ${formData.email}\n📝 الرسالة: ${formData.message}`
    );

    // Replace with your WhatsApp number (including country code, but without "+")
    const whatsappNumber = '+905062512430'; // Example: Algeria (+213)

    // WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappURL, '_blank');
  };
  return (
    <div
      ref={contactRef}
      id='contact'
      className='flex flex-col h-auto items-center px-4 md:px-[70px] py-[30px]'
    >
      <img
        className='size-[50px] md:size-[70px] mb-[10px]'
        src='/assets/contact.png'
        alt=''
      />
      <div className='flex flex-col  items-center bg-white rounded-[20px] w-[300px] sm:w-[600px] md:rounded-[40px] md:w-[730px]  xl:w-full lg:max-w-[875px] mb-[50px] md:mb-[150px] h-auto px-4 md:px-[20px] py-[20px] md:py-[30px] shadow-lg md:shadow-2xl shadow-slate-300'>
        <h1 className='text-[24px] md:text-[30px] text-black mb-[15px] text-center'>
          مستـــــعد لنتحدّث ؟
        </h1>
        <form onSubmit={handleSubmit} className='flex flex-col w-full'>
          {/* Input Fields */}
          <div className='flex flex-col md:flex-row gap-[10px] md:gap-[20px] justify-between mb-[5px]'>
            {/* Name Input */}
            <div className='flex flex-col w-full'>
              <label htmlFor='name' className='text-right mr-[10px]'>
                الإسم
              </label>
              <input
                className='w-full focus:outline-(--Main) focus:border-0 focus:outline-1 h-[40px] border-1 border-slate-300 p-[5px] rounded-[10px]'
                type='text'
                name='name'
                placeholder='الإسم و اللقب'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone Input */}
            <div className='flex flex-col w-full'>
              <label className='text-right mr-[10px]' htmlFor='phone'>
                رقم الهاتف
              </label>
              <input
                className='w-full focus:outline-(--Main) focus:border-0 focus:outline-1 text-right h-[40px] border-1 border-slate-300 p-[5px] rounded-[10px]'
                type='tel'
                name='phone'
                placeholder='اكتب رقمك'
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email Input */}
            <div className='flex flex-col w-full'>
              <label className='text-right mr-[10px]' htmlFor='email'>
                البريد الإلكتروني
              </label>
              <input
                className='w-full focus:outline-(--Main) focus:border-0 focus:outline-1 h-[40px] border-1 border-slate-300 p-[5px] rounded-[10px]'
                type='email'
                name='email'
                placeholder='اكتب بريدك الإلكتروني'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Message Textarea */}
          <label className='text-right mr-[10px]' htmlFor='message'>
            الرسالة
          </label>
          <textarea
            className='w-full h-[120px] focus:outline-(--Main) focus:border-0 focus:outline-1 md:h-[170px] border-1 border-slate-300 p-[5px] rounded-[10px] mb-[15px]'
            placeholder='اكتب مشكلتك'
            name='message'
            rows='4'
            value={formData.message}
            onChange={handleChange}
            required
          />

          {/* Submit Button */}
          <div className='flex justify-center'>
            <button
              type='submit'
              className='flex justify-center items-center text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] bg-[#626A48] text-white w-[100px] sm:w-[120px] md:w-[135px] h-[40px] sm:h-[45px] md:h-[50px] py-[6px] sm:py-[7px] md:py-[8px] px-auto rounded-[5px] sm:rounded-[6px] md:rounded-[7px] text-center cursor-pointer hover:scale-102 ease-in duration-100'
            >
              أرسل
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
