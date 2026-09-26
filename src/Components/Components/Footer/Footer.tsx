import Image from 'next/image';
import footer from "../../../../public/logo.png"
import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className=' bg-[#090A0D] border-gray-600 border-t mt-20'>
                <div className='container mx-auto py-6 px-4 lg:w-5xl md:flex md:justify-between md:items-center text-center md:text-start '>
                    <div className='flex gap-2 justify-center md:justify-star items-center'>
                        <Image src={footer} alt='' height={15} width={30} />
                        <h1 className='text-xl font-bold'>
                            FITLOG
                        </h1>
                    </div>

                    <div className='mt-4 md:mt-0'>
                        <h3 className='text-[#6B7280] text-sm md:text-base'>
                            © 2026 FitLog — Workout Library. Train hard, log honest.
                        </h3>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;