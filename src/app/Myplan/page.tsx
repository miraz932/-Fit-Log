/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Saved from '@/Components/myplan/Saved';
import TodayPlan from '@/Components/myplan/TodayPlan';
import ToggleButton from '@/Components/myplan/Toggle';
import SaveTotal from '@/Components/myplan/Total.Length/SaveTotal';
import Total from '@/Components/myplan/Total.Length/Total';

import { ExerciseContext } from '@/Contexts/Contex';
import { IDataType } from '@/Type';
import { Dispatch, SetStateAction, use, useContext } from 'react';


const MuplanePage = () => {
  const { toggle } = useContext(ExerciseContext)!
  const { sortBy, setSortBy } = use(ExerciseContext)!
  const { state } = use(ExerciseContext)!
  const {saveState}=use(ExerciseContext)!


  const getSortedExercises = (exercises: IDataType[]): IDataType[] => {
    const sorted = [...exercises];

    if (sortBy === 'rating') {
      return sorted.sort((a, b) => a.rating - b.rating);
    }
    if (sortBy === 'duration') {
      return sorted.sort((a, b) => a.duration - b.duration);
    }

    if (sortBy === 'celories') {
      return sorted.sort((a: any, b: any) => a.celories - b.celories);
    }
    return sorted;
  };
  const sortedExercises = getSortedExercises(state);
  const sortedSaved = getSortedExercises(saveState);


  return (
    <div className='mt-5 container mx-auto'>

      {toggle === false && <Total />}
      {toggle === true && <SaveTotal />}


      <div className=' flex justify-between mt-5 items-center '>
        <div className='bg-[#151921] cursor-pointer w-fit p-3 flex gap-2 rounded-lg'>
          <ToggleButton></ToggleButton>
        </div>


        <div>
          {/* <h3>Sort</h3> */}
          <select
            defaultValue="Pick a Runtime"
            className="select select-success"
            onChange={(e) => setSortBy(e.target.value as 'rating' | "duration" | "celories")}
          >
            <option disabled={true}>Sort By</option>
            <option value='duration'>Duration</option>
            <option value='celories'>Celories</option>
            <option value='rating'>Rating</option>
          </select>
        </div>

      </div>

      <div>
        {toggle === false && <TodayPlan exercises={sortedExercises}/>}
        {toggle === true && <Saved savedState={sortedSaved}/>}

      </div>




    </div>
  );
};

export default MuplanePage;