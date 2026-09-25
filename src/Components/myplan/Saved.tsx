'use client'
import React, { use } from 'react';
import { ExerciseContext } from '@/Contexts/Contex';
import { IDataType } from '@/Type';
import SavedCart from './TodayCarts/SavedCart';






const Saved = () => {
const {saveState} =use(ExerciseContext)!

  return (
    <div>
      {
        saveState.map((saveData:IDataType)=>{
          return(
            <SavedCart key={saveData.id} saveData={saveData}></SavedCart>
      
          )
        })
      }

    </div>
  );
};

export default Saved;