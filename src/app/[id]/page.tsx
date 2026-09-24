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

      <Image src={paramsData.image} alt={paramsData?.name} width={300} height={300} className='rounded-xl w-90 h-100'></Image>

      <div className=''>
        <h3 className='font-bold text-4xl '>{paramsData.name}</h3>
        <p className='text-[#9CA3AF]'>{paramsData.description}</p>
        <div className='flex'>
            {paramsData.muscleGroups[0] && (
              <p className="bg-[#C2F800] py-1 px-4 rounded-xl text-black font-bold">
                {paramsData.muscleGroups[0]}
              </p>
            )}
            {paramsData.muscleGroups[1] && (
              <p className="bg-[#C2F800] py-1 px-2 rounded-[14px] text-black font-bold">
                {paramsData.muscleGroups[1]}
              </p>
            )}


        </div>
        

      </div>


    </div>
  );
};

export default DetailsPage;