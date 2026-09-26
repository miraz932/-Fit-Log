import { IDataType } from '@/Type';
import Image from 'next/image';
import React, { use } from 'react';
import { IoMdTime } from 'react-icons/io';
import { MdOutlineStarOutline } from 'react-icons/md';
import icon from "../../../../public/Vector (1).png"
import { IoClose } from 'react-icons/io5';
import { ExerciseContext } from '@/Contexts/Contex';
import Link from 'next/link';
import { toast } from 'react-toastify';

const SavedCart = ({ saveData }: { saveData: IDataType }) => {
  const { saveState, setSaveState } = use(ExerciseContext)!

  
  const handleSaveButton = (valu: number) => {
    setSaveState(saveState.filter(state => state.id !== valu))
    toast.success("Remove")

  }
  return (
    <div>
      <div
        className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-slate-800 bg-[#14171D] p-4 sm:p-5'
        key={saveData.id}
      >
        <div className='flex items-center gap-3 sm:gap-5 min-w-0'>
          <div className='h-20 w-24 sm:w-32 shrink-0 overflow-hidden rounded-2xl'>
            <Image
              src={saveData.image}
              alt={saveData.name}
              height={100}
              width={220}
              className='h-full w-full object-cover'
            />
          </div>

          <div className='flex flex-col min-w-0'>
            <h1 className='text-xl sm:text-2xl font-bold truncate'>
              {saveData.name}
            </h1>

            <p className='text-[#9CA3AF] truncate'>
              {saveData.equipment}
            </p>

            <div className='flex flex-wrap gap-3 sm:gap-5 items-center'>

              <div className='flex items-center gap-1'>
                <IoMdTime className='text-[#C2F800]' />
                <p className='text-[#9CA3AF]'>{saveData.duration} min</p>
              </div>

              <div className='flex items-center gap-1'>
                <Image
                  className='text-[#C2F800] text-xl'
                  src={icon}
                  alt=''
                />
                <p className='text-[#9CA3AF]'>{saveData.caloriesBurned} kcal</p>
              </div>

              <div className='flex items-center gap-1'>
                <MdOutlineStarOutline className='text-[#C2F800] text-xl' />
                <p className='text-[#9CA3AF]'>{saveData.rating}</p>
              </div>

            </div>
          </div>
        </div>

        <div className='flex gap-3 justify-end md:justify-start sm:gap-4'>
          <Link href={`/${saveData.id}`}>
            <button className='rounded-full border border-slate-600 px-4 sm:px-5 py-2 text-sm text-white cursor-pointer'>
              View Details
            </button>
          </Link>
          <button
            onClick={() => handleSaveButton(saveData.id)}
            className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-slate-500 transition hover:bg-[#1d2027] cursor-pointer hover:text-white'
          >
            <IoClose size={20} />
          </button>
        </div>
      </div>

    </div>

  );
};

export default SavedCart;