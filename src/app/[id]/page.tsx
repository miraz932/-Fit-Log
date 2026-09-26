import Details from '@/Components/Details/Details';
import getApidata from '@/LIb/Api';
import { IDataType } from '@/Type';
import Image from 'next/image';
import React from 'react';
interface IParamsType {
  params: Promise<{
    id: string
  }>
}

const DetailsPage = async ({ params }: IParamsType) => {
  const data = await getApidata()
  const { id } = await params

  const paramsData = data.find((data) => data.id === Number(id))
  if (!paramsData) {
    return <p>Data not found</p>;
  }
  return (
    <div className='mt-8 container mx-auto flex justify-between gap-14'>

      <Image src={paramsData.image} alt={paramsData?.name} width={300} height={300} className='rounded-xl w-140 h-140 object-cover object-center'></Image>

      <div className='grid gap-4'>

        <h3 className='font-bold text-4xl '>{paramsData.name}</h3>
        <p className='text-[#9CA3AF]'>{paramsData.description}</p>


        <div className='flex gap-2'>
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

        <div className='bg-[#151922] rounded-2xl  border border-gray-500'>


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
          <div className='flex justify-between py-2.5 px-3 '>
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