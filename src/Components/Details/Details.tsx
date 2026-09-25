'use client'

import { ExerciseContext } from "@/Contexts/Contex";
import { IDataType } from "@/Type";
import { use } from "react";
import { IoBookmarkOutline, IoCalendarOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const Details = ({ paramsData }: { paramsData: IDataType }) => {
  const { state, setState } = use(ExerciseContext)!
  const { saveState, setSaveState } = use(ExerciseContext)!

  const handleState = (value: number) => {
    const isAlreadyExist = state.some(state => state.id === value)
    if (isAlreadyExist) {
      toast.error('Already added')
      return
    }
    setState([...state, paramsData])
    toast.success("Add Successfull")

  }
  const handleSaved = (saveVlue:number) => {
    const alreadyExist = saveState.some(saved=>saved.id=== saveVlue)
    if(alreadyExist){
      toast.error("Already saved")
      return
    }
    setSaveState([...saveState, paramsData])
    toast.success("Save for a letter")

  }
  return (
    <div className="flex gap-3">
      <button onClick={() => handleState(paramsData.id)} className='bg-[#C2F800] max-w-fit font-medium  text-black flex items-center gap-1 rounded-[10px] py-2 cursor-pointer px-3 hover:bg-[#c0ee19dd]'> <IoCalendarOutline/>Add to today&apos;s plan</button>
      
      <button onClick={() => handleSaved(paramsData.id)} className=' max-w-fit  rounded-[10px] py-2 cursor-pointer px-3 border flex items-center gap-1 hover:bg-gray-600 border-gray-500 font-medium'><IoBookmarkOutline/>Save for a letter </button>
    </div>
  );
};

export default Details;