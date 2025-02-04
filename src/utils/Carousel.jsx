/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs';

const Carousel = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(2);
  const [progress, setProgress] = useState(0);
  const [pause, setPause] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const intervalRef = useRef(null);

  const progressUpdateInterval = 30;
  const totalProgressTime = windowWidth >= 640 ? 7000 : 5000;

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
    setProgress(0);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
    setProgress(0);
  };

  useEffect(() => {
    if (pause) return;

    const progressIncrement =
      (100 / totalProgressTime) * progressUpdateInterval;

    intervalRef.current = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          handleNextSlide();
          return 0;
        }
        return prevProgress + progressIncrement;
      });
    }, progressUpdateInterval);

    return () => clearInterval(intervalRef.current);
  }, [currentSlide, pause]);

  // Track window resizing
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseLeave = () => setPause(false);
  const handleHover = () => {
    setPause(true);
    clearInterval(intervalRef.current);
  };

  // Calculate transform value dynamically based on screen width
  const translateValue =
    -(currentSlide - 1.5) * (windowWidth >= 640 ? 140 : 200);

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      className='flex flex-col items-center w-screen justify-center'
    >
      {/* Carousel Slides */}
      <div className='flex gap-[250px] mb-[40px]  justify-center'>
        {data.map((item, idx) => (
          <div
            key={idx}
            className='w-[250px] h-auto p-[20px] sm:w-[640px] sm:h-[185px] bg-white flex items-center text-center rounded-[15px] opacity-90 shadow-md transition-transform duration-500 ease-in-out'
            style={{
              transform: `translateX(${translateValue}%)`, // Corrected transform calculation
            }}
          >
            <p className='text-[18px] text-black'>{item.message}</p>
          </div>
        ))}
      </div>

      {/* Progress Line */}
      <div className=' w-screen h-1 bg-gray-200 relative opacity-50 mb-[20px]'>
        <div
          className=' w-screen absolute bottom-0 h-1 bg-(--Main) transition-all duration-30 ease-linear'
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Navigation Arrows */}
      <div className='flex flex-row items-center justify-center gap-4 mb-[100px]'>
        <BsArrowRightSquare
          className='cursor-pointer h-[2rem] w-[2rem] text-(--Main) hover:bg-(--Main) hover:text-white rounded-[4px] ease-in-out duration-200'
          onClick={handleNextSlide}
        />
        <BsArrowLeftSquare
          className='cursor-pointer h-[2rem] w-[2rem] text-(--Main) hover:bg-(--Main) hover:text-white rounded-[4px] ease-in-out duration-200'
          onClick={handlePrevSlide}
        />
      </div>
    </div>
  );
};

export default Carousel;
