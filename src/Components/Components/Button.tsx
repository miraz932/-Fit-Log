"use client"
import { ExerciseContext } from '@/Contexts/Contex';
import Link from 'next/link';
import React, { use } from 'react';
const NavButton = () => {
  const { state } = use(ExerciseContext)!
  const { saveState } = use(ExerciseContext)!
  return (
    <div className='flex gap-3'>
      <Link href='/Myplan'>
        <button className='flex items-center gap-3 hover: hover:bg-[#1d2027] hover:cursor-pointer px-4 py-2 rounded-2xl'>
          <span className='text-xl font-semibold cursor-pointer'>Plan</span>
          <span className='flex items-center justify-center text-xl text-black font-bold bg-[#C2F800] rounded-full w-6 h-6 cursor-pointer '>{saveState.length}</span>
        </button>
      </Link>
      <Link href='/Myplan'>
        <button className='flex items-center gap-3 hover: hover:bg-[#1d2027] px-4 py-2 rounded-2xl'>
          <span className='text-xl font-semibold cursor-pointer'>Saved</span>
          <span className='flex items-center justify-center text-xl text-white font-bold bg-black rounded-full w-6 h-6 border border-[#2D313B] cursor-pointer '>{saveState.length}</span>
        </button>
      </Link>
    </div>
  );
};

export default NavButton;