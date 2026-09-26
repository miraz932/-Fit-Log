import Link from 'next/link'; // বা আপনার ব্যবহৃত রাউটার লিংক
import { IDataType } from '@/Type';
import TodayCart from './TodayCarts/TodayCart';

interface TodayPlanProps {
  exercises: IDataType[];
}

const TodayPlan = ({ exercises }: TodayPlanProps) => {
  return (
    <div className='mt-5 grid gap-2 sm:gap-3'>
      {exercises.length === 0 ? (
        <div className='bg-[#111317] border-dotted border rounded py-20 sm:py-28 px-4 sm:px-6 text-center grid justify-center items-center border-[#bbe613a6]'>

          <div className='grid gap-2 max-w-full sm:max-w-xl mx-auto'>
            <h3 className='font-bold text-xl sm:text-2xl'>
              NOTHING HERE YET
            </h3>
            <p className='text-[#A1A1AA] mb-1 text-sm sm:text-base'>
              Browse the library and add a lift to get today moving.
            </p>

            <div className='grid justify-center'>
              <Link href='/'>
                <button className='bg-[#C2F10D] hover:bg-[#c5ed23f0] cursor-pointer py-2 px-5 text-black font-semibold rounded-2xl text-sm sm:text-base'>
                  Go to workouts
                </button>
              </Link>

            </div>
          </div>
        </div>
      ) : (
        exercises.map((todaySate: IDataType) => {
          return (
            <TodayCart
              key={todaySate.id}
              todaySate={todaySate}
            />
          )
        })
      )}
    </div>
  );
};

export default TodayPlan;
