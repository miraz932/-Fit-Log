import Image from 'next/image';
import React from 'react';
import banner from "../../../public/banner.png"

const Banner = () => {
  return (
    <div className='container mx-auto mt-8 lg:w-5xl bg-[#15171D] rounded-2xl px-5 py-7 sm:px-8 sm:py-8 md:p-10 md:flex md:justify-between md:items-center'>
      <div className='grid gap-3md:gap-2.5w-full md:w-150justify-center md:justify-starttext-center md:text-start'>
        <p className='text-[#C2F800] font-light'>
          WORKOUT LIBRARY
        </p>

        <h1 className='font-boldtext-3xlsm:text-4xl leading-tight'>
          TRAIN WITH INTENT. LOG
          <br className='hidden sm:block' />
          EVERY SET.
        </h1>
        
        <p className='text-[#9CA3AF]text-sm sm:text-base leading-relaxed'>
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock
          <br className='hidden md:block' />
          it into today s plan, and watch the week s work add up.
        </p>

        <div className='flex justify-center md:justify-start'>
          <button className=' bg-[#C2F800] max-w-fit font-medium text-black rounded-lg py-2 px-3 cursor-pointer'>
            BROWSE WORKOUTS
          </button>
        </div>
      </div>

      <div className='flex justify-center md:justify-end mt-6 md:mt-0'>
        <Image src={banner} alt='banner' width={300} height={300} className='w-55 h-55 sm:w-62.5 sm:h-62.5 object-contain' />
      </div>

    </div>
  );
};

export default Banner;