import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from "../../../public/logo.png"

const Navber = () => {
  return (
      <nav className='border-b border-[#1B1F28] bg-[#0C0D10]'>
      <div className='container mx-auto flex justify-between items-center  py-5'>

        <div className='flex items-center gap-2'>
          <Image src={logo} alt='Nabver Logo' width={100} height={100} className='w-fit items-center h-7 '>
          </Image>
          <h3 className='font-bold text-[#FFFFFF] text-xl '>FITLOG</h3>
        </div>

        <ul className='flex gap-4'>
          <Link href='/'><li>Workout</li></Link>
          <Link href='/Myplan'><li>My plan</li></Link>
        </ul>

        <div className='flex gap-2'>
          <button>Plan</button>
          <button>Saved</button>

        </div>
 

      </div>
    </nav>
  );
};

export default Navber;