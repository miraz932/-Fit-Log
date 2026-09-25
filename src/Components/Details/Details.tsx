'use client'

import { ExerciseContext } from "@/Contexts/Contex";
import { IDataType } from "@/Type";
import { use } from "react";

const Details = ({paramsData}:{paramsData:IDataType}) => {
  const {state,setState}=use(ExerciseContext)!
  const {saveState,setSaveState}=use(ExerciseContext)!
  const {toggle,setToggle}=use(ExerciseContext)!
  const handleState = ()=>{
    setState([...state,paramsData])
   
  }
  const handleSaved = ()=>{
    setSaveState([...saveState,paramsData])
   
  }
  return (
    <div>
      <button onClick={()=>handleState()} className='bg-[#C2F800] max-w-fit font-medium  text-black rounded-lg py-2 cursor-pointer px-3 hover:bg-[#c0ee19dd]'> Add to today s plan</button>
      <button onClick={()=>handleSaved()} className=' max-w-fit  rounded-lg py-2.5 cursor-pointer px-3 border border-gray-500'>Save for a letter </button>
    </div>
  );
};

export default Details;