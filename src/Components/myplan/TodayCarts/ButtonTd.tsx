
import { ExerciseContext } from '@/Contexts/Contex';
import { IDataType } from '@/Type';
import Link from 'next/link';
import React, { use } from 'react';
import { IoClose } from 'react-icons/io5';
import { toast } from 'react-toastify';

const ButtonTd = ({ todaySate }: { todaySate: IDataType }) => {
  const {state,setState} = use(ExerciseContext)!
  const handleButton =(valu:number)=>{
    setState(state.filter(state=>state.id!==valu))
    toast.success('Remove')

  }

  return (
    <div className=' flex gap-2'>
      <Link href={`/${todaySate.id}`}>
      <button className='rounded-full border border-slate-600 px-5 py-2 text-sm text-white cursor-pointer'>View Details</button>
      </Link>
      <button onClick={() =>handleButton(todaySate.id)} className='rounded-full bg-[#C2F800] cursor-pointer px-4  text-sm font-bold text-black'> ✓ Mark as Done</button>
      <button onClick={() =>handleButton(todaySate.id)} className='flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-[#1d2027] cursor-pointer hover:text-white '>
        <IoClose size={20} /></button>

    </div>
  );
};

export default ButtonTd;