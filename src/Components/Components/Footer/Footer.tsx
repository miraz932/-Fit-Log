import Image from 'next/image';
import footer from "../../../../public/logo.png"
import React from 'react';

const Footer = () => {
  return (
    <div>
       <footer className='bg-[#090A0D] border-gray-600 mt-20 border-t '>
            <div className='flex justify-between container mx-auto py-8'>
                <div className='flex gap-2 '>

                    <Image src={footer} alt=''
                        height={15}
                        width={30} />
                    <h1 className='text-xl font-bold'>FITLOG</h1>
                </div>
                <div>
                   <h3 className='text-[#6B7280]'> © 2026 FitLog — Workout Library. Train hard, log honest.</h3>
                </div>
            </div>
        </footer>
      
    </div>
  );
};

export default Footer;