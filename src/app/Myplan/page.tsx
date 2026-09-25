'use client'
import Saved from '@/Components/myplan/Saved';
import TodayPlan from '@/Components/myplan/TodayPlan';
import ToggleButton from '@/Components/myplan/Toggle';
import SaveTotal from '@/Components/myplan/Total.Length/SaveTotal';
import Total from '@/Components/myplan/Total.Length/Total';

import { ExerciseContext } from '@/Contexts/Contex';
import { use, useContext } from 'react';


const MuplanePage = () => {
  const { toggle } = useContext(ExerciseContext)!

  return (
    <div className='mt-5 container mx-auto'>

      {toggle === false && <Total />}
      {toggle === true && <SaveTotal />}


      <div className=' flex justify-between mt-5 items-center '>
        <div className='bg-[#151921] cursor-pointer w-fit p-3 flex gap-2 rounded-lg'>
          <ToggleButton></ToggleButton>
        </div>


        <div>
          <h3>Sort</h3>
        </div>
        
      </div>

      <div>
        {toggle === false && <TodayPlan />}
        {toggle === true && <Saved />}

      </div>




    </div>
  );
};

export default MuplanePage;