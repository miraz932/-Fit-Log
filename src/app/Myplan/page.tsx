/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Saved from '@/Components/myplan/Saved';
import TodayPlan from '@/Components/myplan/TodayPlan';
import ToggleButton from '@/Components/myplan/Toggle';
import SaveTotal from '@/Components/myplan/Total.Length/SaveTotal';
import Total from '@/Components/myplan/Total.Length/Total';

import { ExerciseContext } from '@/Contexts/Contex';
import { IDataType } from '@/Type';
import { use, useContext } from 'react';


const MuplanePage = () => {
  const { toggle } = useContext(ExerciseContext)!
  const { sortBy, setSortBy } = use(ExerciseContext)!
  const { state, saveState } = use(ExerciseContext)!

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
    <div className='mt-5 container mx-auto px-4 lg:w-5xl'>
      {toggle === false && <Total />}
      {toggle === true && <SaveTotal />}

      <div
        className='flex flex-col gap-4 mt-5 md:flex-row md:justify-between md:items-center'>
        <div
          className=' bg-[#151921] border border-gray-700 cursor-pointerw-fit px-3 py-2 flex gap-2 rounded-lg '>
          <ToggleButton></ToggleButton>
        </div>

        <div>
          <select
            defaultValue="Pick a Runtime"
            className='select select-success w-full md:w-auto'
            onChange={(e) =>
              setSortBy(
                e.target.value as 'rating' | 'duration' | 'celories')}>
            <option disabled={true}>Sort By</option>
            <option value='duration'>Duration</option>
            <option value='celories'>Celories</option>
            <option value='rating'>Rating</option>
          </select>
        </div>
      </div>

      <div className='mt-4'>
        {toggle === false && (
          <TodayPlan exercises={sortedExercises} />)}
        {toggle === true && (
          <Saved savedState={sortedSaved} />)}
      </div>
    </div>
  );
};

export default MuplanePage;