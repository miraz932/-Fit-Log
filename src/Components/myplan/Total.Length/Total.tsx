'use client'
import { ExerciseContext } from '@/Contexts/Contex';
import React, { use } from 'react';

export const Total = () => {
  const {state} = use(ExerciseContext)!
  const duration = state.reduce((acc,minutes)=>acc+ minutes.duration,0)
  const calories = state.reduce((acc,calories)=>acc+ calories.caloriesBurned,0)
  return (

    <div>
      <div className='mb-4'>
      <h2 className=' text-2xl font-bold'>MY PLAN</h2>
      <h6 className='text-[#8A92A0] '>Cap of five lifts for today. Finish them, then load more.</h6>
      </div>

      <div className='flex justify-between px-6 py-5 pr-40 rounded-xl bg-[#13161D]'>

        <div className=''>
          <h3 className='text-[#8A92A0]'>Exercises</h3>
          <h1 className='font-bold text-4xl text-[#CCFF00]'>{state.length}</h1>
        </div>

        <div className='border-l  border-[#8488918e]'>
          <h3 className='pl-4 text-[#8A92A0]'>Minutes</h3>
          <h1 className='pl-4 font-bold text-4xl'>{duration}</h1>
        </div>

        <div className='border-l border-[#8488918e]'>
          <h3 className='pl-4 text-[#8A92A0]'>Calories</h3>
          <h1 className='pl-4 font-bold text-4xl'>{calories}</h1>
        </div>
      </div>

    </div>
  )
}


export default Total