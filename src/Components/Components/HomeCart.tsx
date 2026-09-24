import getApidata from '@/LIb/Api';
import { IDataType } from '@/Type';
import React from 'react';
import CartAdd from '../Shared/CartAdd';

const HomeCart = async () => {

  const data = await getApidata()

  return (
    <div className='container  mx-auto mt-10'>
      <div>
        <h1>THE LIBRARY {data.length}</h1>
        <p>Twelve lifts covering every major muscle group.</p>
      </div>


      <div className='grid grid-cols-3 gap-3 mt-4 '>
        {
          data.map((exercise: IDataType) => {
            return (
              <CartAdd key={exercise.id} exercise={exercise}></CartAdd>

            )
          })
        }
      </div>
    </div>
  );
};

export default HomeCart;