import Details from '@/Components/Details/Details';
import { getSingleData } from '@/LIb/Api';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
interface IParamsType {
  params: Promise<{
    id: string
  }>
}

const DetailsPage = async ({ params }: IParamsType) => {
  const { id } = await params
  const paramsData = await getSingleData(id)



  if (!paramsData) {
    notFound()
  }
  return (
    <div className='mt-8 container lg:w-239 mx-auto flex flex-col lg:flex-row justify-between gap-8 lg:gap-14 px-4 sm:px-6 lg:px-0'>

      <Image
        src={paramsData.image}
        alt={paramsData?.name}
        width={300}
        height={300}
        className='rounded-xl w-full sm:w-140 lg:w-100 h-auto sm:h-140 lg:h-140 object-cover object-center' />

      <div className='grid gap-4 w-full'>
        <h3 className='font-bold text-3xl sm:text-4xl'>
          {paramsData.name}
        </h3>
        <p className='text-[#9CA3AF]'>
          {paramsData.description}
        </p>

        <div className='flex flex-wrap gap-2'>
          {paramsData.muscleGroups[0] && (
            <p className="bg-[#C2F800] py-1 px-4 rounded-xl text-black font-bold">
              {paramsData.muscleGroups[0]}
            </p>
          )}

          {paramsData.muscleGroups[1] && (
            <p className="bg-[#C2F800] py-1 px-1 rounded-[14px] text-black font-bold">
              {paramsData.muscleGroups[1]}
            </p>
          )}
        </div>
        <div className='bg-[#151922] rounded-2xl border border-gray-500'>

          <div className='flex justify-between py-2.5 px-3 border-b border-gray-500'>
            <p className='text-[#9CA3AF] font-medium text-[14px]'>EQUIPMENT</p>
            <p>{paramsData.equipment}</p>
          </div>

          <div className='flex justify-between py-2.5 px-3 border-b border-gray-500'>
            <p className='text-[#9CA3AF] font-medium text-[14px]'>DIFFICULITY</p>
            <p>{paramsData.difficulty}</p>
          </div>

          <div className='flex justify-between py-2.5 px-3 border-b border-gray-500'>
            <p className='text-[#9CA3AF] font-medium text-[14px]'>SETS</p>
            <p>{paramsData.sets}</p>
          </div>

          <div className='flex justify-between py-2.5 px-3 border-b border-gray-500'>
            <p className='text-[#9CA3AF] font-medium text-[14px]'>RPEPS</p>
            <p>{paramsData.reps}</p>
          </div>

          <div className='flex justify-between py-2.5 px-3 border-b border-gray-500'>
            <p className='text-[#9CA3AF] font-medium text-[14px]'>DURATION</p>
            <p>{paramsData.duration}min</p>
          </div>

          <div className='flex justify-between py-2.5 px-3 border-b border-gray-500'>
            <p className='text-[#9CA3AF] font-medium text-[14px]'>CALORIES</p>
            <p>{paramsData.caloriesBurned}kcal</p>
          </div>

          <div className='flex justify-between py-2.5 px-3'>
            <p className='text-[#9CA3AF] font-medium text-[14px]'>RATING</p>
            <p>{paramsData.rating}</p>
          </div>

        </div>

        <div>
          <h2 className='font-bold text-2xl'>INSTRUCTIONS</h2>
          <div className='grid gap-1 mt-1.5'>
            <h4 className='text-[#D1D5DB]'>1.{paramsData.instructions[0]}</h4>
            <h4 className='text-[#D1D5DB]'>2.{paramsData.instructions[1]}</h4>
            <h4 className='text-[#D1D5DB]'>3.{paramsData.instructions[2]}</h4>
            <h4 className='text-[#D1D5DB]'>4.{paramsData.instructions[3]}</h4>
          </div>
        </div>
        <div className=''>
          <Details paramsData={paramsData}></Details>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;