import Image from 'next/image';
import React from 'react';
import banner from"../../../public/banner.png"

const Banner = () => {
  return (
    <div className='container mx-auto p-10 bg-[#15171D] flex justify-between items-center rounded-2xl mt-8'>

      <div className='grid gap-2.5 w-150'>
        <p className='text-[#C2F800] font-[300]'>WORKOUT LIBRARY</p>
        <h1 className='font-bold text-4xl'>TRAIN WITH INTENT. LOG<br/>
          EVERY SET.</h1>
        <p className='text-[#9CA3AF]'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock <br/> it
          into today s plan, and watch the week s work add up.</p>
          <button className='bg-[#C2F800] max-w-fit font-medium  text-black rounded-lg py-2 cursor-pointer px-3'> BROWSE WORKOUTS</button>
      </div>

      <Image src={banner} alt='banner'width={300} height={300} className='w-fit h-62.5'></Image>
  
    </div>
  );
};

export default Banner;