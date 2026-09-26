import Image from 'next/image';
import React from 'react';
import banner from "../../../public/banner.png"

const Banner = () => {
  return (
    <div className='lg:w-250 container py-6 mx-auto md:p-10 bg-[#15171D] flex flex-col-reverse md:flex-row justify-between items-center rounded-2xl mt-8'>

      <div className='grid  gap-3.5 md:gap-2.5 w-150 justify-center md:justify-start text-center md:text-start'>
        <p className='text-[#C2F800] font-light'>WORKOUT LIBRARY</p>

        <h1 className='font-bold text-4xl'>
          TRAIN WITH INTENT. LOG<br />
          EVERY SET.
        </h1>

        <p className='text-[#9CA3AF]'>
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock <br /> it
          into today s plan, and watch the week s work add up.
        </p>

        <div className='flex justify-center md:justify-start'>
          <button className='bg-[#C2F800] max-w-fit font-medium text-black rounded-lg py-2 cursor-pointer px-3'>
            BROWSE WORKOUTS
          </button>
        </div>
      </div>

      <div className='flex justify-center md:justify-start mt-4 md:mt-0'>
        <Image
          src={banner}
          alt='banner'
          width={300}
          height={300}
          className='w-fit h-63.5'
        />
      </div>

    </div>


  );
};

export default Banner;