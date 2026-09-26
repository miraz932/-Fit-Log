import { IDataType } from '@/Type';
import Image from 'next/image';
import React from 'react';
import { IoMdTime } from 'react-icons/io';
import { MdOutlineStarOutline } from 'react-icons/md';
import { TbCircleDotFilled } from 'react-icons/tb';
import icon from '../../../public/Vector (1).png'
import Link from 'next/link';

const CartAdd = ({ exercise }: { exercise: IDataType }) => {
  return (
    <div className='group w-full max-w-md overflow-hidden rounded-2xl cursor-pointer border border-slate-700 bg-[#15171e] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border hover:border-[#C2F800] hover:shadow-lg '>
      <Link href={`/${exercise.id}`}>
        <Image className='overflow-hidden w-full h-50 object-center object-cover ' src={exercise.image} alt=''
          height={450}
          width={300} />
 
        <div className='space-y-2 p-5'>
          <div className='flex gap-4 '>
            {exercise.muscleGroups[0] && (
              <p className="bg-[#C2F800] py-1 px-4 rounded-xl text-black font-bold">
                {exercise.muscleGroups[0]}
              </p>
            )}
            {exercise.muscleGroups[1] && (
              <p className="bg-[#C2F800] py-1 px-2 rounded-[14px] text-black font-bold">
                {exercise.muscleGroups[1]}
              </p>
            )}
          </div>

          <h1 className='text-2xl font-bold'>{exercise.name}</h1>
          <p className='text-[#9CA3AF]'>{exercise.equipment}</p>
          <div className="divider" />
          <div className='flex gap-4'>

            <div className='flex items-center gap-1'>
              <IoMdTime />
              <p className='text-[#9CA3AF]'>{exercise.duration} min</p>
            </div>
            <div className='flex items-center gap-1'>
              <Image src={icon} alt='' />
              <p className='text-[#9CA3AF]'>{exercise.caloriesBurned} kcal</p>
            </div>
            <div className='flex items-center gap-1'>
              <MdOutlineStarOutline />
              <p className='text-[#9CA3AF]'>{exercise.rating}</p>
            </div>
          </div>

        </div>
      </Link>
    </div>
  );
};

export default CartAdd;