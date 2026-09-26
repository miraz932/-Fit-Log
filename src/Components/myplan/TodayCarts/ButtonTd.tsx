
import { ExerciseContext } from '@/Contexts/Contex';
import { IDataType } from '@/Type';
import Link from 'next/link';
import React, { use, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { toast } from 'react-toastify';

const ButtonTd = ({ todaySate }: { todaySate: IDataType }) => {
  const { state, setState } = use(ExerciseContext)!

  const [doneExercises, setDoneExercises] = useState<number[]>([])
  const handleMarkDone = (id: number) => {
    setDoneExercises((prev) => [...prev, id])
    toast.success('Mark as Done')
  }

  const handleButton = (valu: number) => {
    setState(state.filter(state => state.id !== valu))
    toast.success('Remove')

  }

  return (
    <div className=' flex gap-2'>
      <Link href={`/${todaySate.id}`}>
        <button className='rounded-full border border-slate-600 px-5 py-2 text-sm text-white cursor-pointer'>View Details</button>
      </Link>
      <button
        onClick={() => handleMarkDone(todaySate.id)}
        disabled={doneExercises.includes(todaySate.id)}
        className={`rounded-full px-5 py-2 text-sm font-bold ${doneExercises.includes(todaySate.id)
          ? 'cursor-not-allowed bg-gray-500 text-white'
          : 'cursor-pointer bg-[#C2F800] text-black'
          }`} >
        {doneExercises.includes(todaySate.id)
          ? '✓ Done'
          : '✓ Mark as Done'
        }
      </button>
      <button onClick={() => handleButton(todaySate.id)} className='flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-[#1d2027] cursor-pointer hover:text-white '>
        <IoClose size={20} /></button>

    </div>
  );
};

export default ButtonTd;