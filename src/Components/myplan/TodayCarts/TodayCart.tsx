
import { IDataType } from '@/Type';
import Image from 'next/image';
import { IoMdTime } from 'react-icons/io';
import { MdOutlineStarOutline } from 'react-icons/md';
import icon from "../../../../public/Vector (1).png"
import ButtonTd from './ButtonTd';

const TodayCart = ({ todaySate }: { todaySate: IDataType }) => {
  return (
    <div>
      <div
        className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-slate-800 bg-[#14171D] p-4 sm:p-5'
        key={todaySate.id}
      >
        <div className='flex items-center gap-3 sm:gap-5 min-w-0'>
          <div className='h-20 w-24 sm:w-32 shrink-0 overflow-hidden rounded-2xl'>
            <Image
              src={todaySate.image}
              alt=''
              height={200}
              width={120}
              className='h-full w-full object-cover'
            />
          </div>
          <div className='flex flex-col min-w-0'>
            <h1 className='text-xl sm:text-2xl font-bold truncate'>
              {todaySate.name}
            </h1>

            <p className='text-[#9CA3AF] truncate'>
              {todaySate.equipment}
            </p>

            <div className='flex flex-wrap gap-3 sm:gap-5 items-center'>
              <div className='flex items-center gap-1'>
                <IoMdTime className='text-[#C2F800]' />
                <p className='text-[#9CA3AF]'>{todaySate.duration} min</p>
              </div>

              <div className='flex items-center gap-1'>
                <Image
                  className='text-[#C2F800] text-xl'
                  src={icon}
                  alt=''
                />
                <p className='text-[#9CA3AF]'>{todaySate.caloriesBurned} kcal</p>
              </div>

              <div className='flex items-center gap-1'>
                <MdOutlineStarOutline className='text-[#C2F800] text-xl' />
                <p className='text-[#9CA3AF]'>{todaySate.rating}</p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex gap-4  justify-end md:justify-start sm:shrink-0'>
          <ButtonTd todaySate={todaySate}></ButtonTd>
        </div>
      </div>
    </div>
  );
};

export default TodayCart;