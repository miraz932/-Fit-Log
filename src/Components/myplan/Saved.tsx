'use client'
import { IDataType } from '@/Type';
import Link from 'next/link';
import SavedCart from './TodayCarts/SavedCart';



const Saved = ({ savedState }: { savedState: IDataType[] }) => {


  return (
    <div className='mt-5 grid gap-2 sm:gap-3'>
      {savedState.length === 0 ? (
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

        savedState.map((saveData: IDataType) => {
          return (
            <SavedCart
              key={saveData.id}
              saveData={saveData}
            />
          )
        })

      )}

    </div>


  );
};

export default Saved;