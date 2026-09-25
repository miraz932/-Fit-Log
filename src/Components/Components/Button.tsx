"use client"
import { ExerciseContext } from '@/Contexts/Contex';
import React, { use } from 'react';
const NavButton = () => {
    const { state } = use(ExerciseContext)!
    const { saveState } = use(ExerciseContext)!
  return (
    <div className='flex gap-3'>
          <button className='flex gap-2'>Plan <h2><p className='font-semibold rounded-full px-1.5 text-black bg-[#C2F800]'>{state.length}</p></h2> </button>
          <button className='flex gap-2 text-[#9CA3AF]'>Saved <h2> <p className='border-gray-500 border text-white rounded-full px-1.5'>{saveState.length}</p></h2></button>
    </div>
  );
};

export default NavButton;