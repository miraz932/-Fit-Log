// "use client"
import { ExerciseContext } from '@/Contexts/Contex';
import { IDataType } from '@/Type';
import React, { use } from 'react';
import TodayCart from './TodayCarts/TodayCart';
import Link from 'next/link';


const TodayPlan = () => {
  const { state } = use(ExerciseContext)!
  // const {toggle} = use(ExerciseContext)!

  return (
    <div className='mt-5 grid gap-1'>

      {state.length === 0 ? (<div className='bg-[#111317] border-dotted border rounded py-28 text-center grid justify-center items-center border-[#bbe613a6]'>
        <div className='grid gap-2'>
          <h3 className=''>NOTHING HERE YET</h3>
          <p className='text-[#A1A1AA] mb-1'>Browse the library and add a lift to get today moving.</p>
          <div className='grid justify-center'>
            <Link href='/'>
            <button className='bg-[#C2F10D] hover:bg-[#c5ed23f0] cursor-pointer py-2 px-5 text-black font-semibold rounded-2xl'>Go to workouts</button>
            </Link>
          </div>
        </div>
      </div>) : (
        state.map((todaySate: IDataType) => {
          return (
            <TodayCart key={todaySate.id} todaySate={todaySate} />
          )
        })
      )
      }

    </div>
  );
};

export default TodayPlan;