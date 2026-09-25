// "use client"
import { ExerciseContext } from '@/Contexts/Contex';
import { IDataType } from '@/Type';
import React, { use } from 'react';
import TodayCart from './TodayCarts/TodayCart';


const TodayPlan = () => {
  const { state } = use(ExerciseContext)!
  // const {toggle} = use(ExerciseContext)!

  return (
    <div className='mt-5'>
      {
         state.map((todaySate: IDataType) => {
          return (
            <TodayCart key={todaySate.id} todaySate={todaySate} />
          )
        })
      }


    </div>
  );
};

export default TodayPlan;