'use client'
import Image from 'next/image';
import Link from 'next/link';
import logo from "../../../public/logo.png"
import NavButton from './Button';
import { usePathname } from "next/navigation";





const Navber = () => {
  const pathname = usePathname()
  return (
    
      <nav className='border-b border-[#1B1F28] bg-[#0C0D10]'>
      <div className='container mx-auto flex justify-between items-center  py-5'>

        <div className='flex items-center gap-2'>
          <Image src={logo} alt='Nabver Logo' width={100} height={100} className='w-fit items-center h-7 '>
          </Image>
          <h3 className='font-bold text-[#FFFFFF] text-xl '>FITLOG</h3>
        </div>

        <ul className='flex gap-4'>
          <Link href='/'><li className={pathname==='/'? "px-2.5 py-0.5 font-semibold text-[#C2F800] bg-[#c2f8004e] rounded-xl":""}>Workout</li></Link>
          <Link href='/Myplan'><li className={pathname==='/Myplan'? "px-2.5 py-0.5 font-semibold text-[#C2F800] bg-[#c2f8004e] rounded-xl":""}>My plan</li></Link>
        </ul>

        <div className='flex'>
            <NavButton></NavButton>
        </div>
 

      </div>
    </nav>
  );
};

export default Navber;