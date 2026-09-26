'use client'
import Image from 'next/image';
import Link from 'next/link';
import logo from "../../../public/logo.png"
import { usePathname } from "next/navigation";
import { ExerciseContext } from '@/Contexts/Contex';
import { use } from 'react';
const Navber = () => {
  const pathname = usePathname()
  const { state } = use(ExerciseContext)!
  const { saveState } = use(ExerciseContext)!
  return (

    <nav className="border-b border-[#1B1F28] bg-[#0C0D10]">
      <div className="container mx-auto px-4 py-4 lg:w-5xl">

        {/* Top Row */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Navbar Logo"
              width={100}
              height={100}
              className="w-fit h-7"
            />

            <h3 className="font-bold text-white text-xl">
              FITLOG
            </h3>
          </div>

          {/* Navigation */}
          <ul className="hidden md:flex items-center gap-4">
            <Link href="/">
              <li
                className={
                  pathname === "/"
                    ? "px-2.5 py-0.5 font-semibold text-[#C2F800] bg-[#c2f8004e] rounded-xl"
                    : "text-white"
                }
              >
                Workout
              </li>
            </Link>

            <Link href="/Myplan">
              <li
                className={
                  pathname === "/Myplan"
                    ? "px-2.5 py-0.5 font-semibold text-[#C2F800] bg-[#c2f8004e] rounded-xl"
                    : "text-white"
                }
              >
                My plan
              </li>
            </Link>
          </ul>

          {/* Plan + Saved */}
          <div className="flex items-center">

            <Link href="/Myplan">
              <button className="flex items-center gap-2 hover:bg-[#1d2027] px-2 sm:px-3 py-2 rounded-2xl">
                <span className="text-sm sm:text-[15px] font-semibold text-white">
                  Plan
                </span>

                <span className="flex items-center justify-center text-sm sm:text-xl text-black font-bold bg-[#C2F800] rounded-full w-6 h-6">
                  {state.length}
                </span>
              </button>
            </Link>

            <Link href="/Myplan">
              <button className="flex items-center gap-2 hover:bg-[#1d2027] px-2 sm:px-3 py-2 rounded-2xl">
                <span className="text-sm sm:text-[15px] font-semibold text-white">
                  Saved
                </span>

                <span className="flex items-center justify-center text-sm sm:text-xl text-white font-bold bg-black rounded-full w-6 h-6 border border-[#838080]">
                  {saveState.length}
                </span>
              </button>
            </Link>

          </div>
        </div>

        {/* Mobile Navigation */}
        <ul className="flex md:hidden justify-center gap-4 mt-3">
          <Link href="/">
            <li
              className={
                pathname === "/"
                  ? "px-2.5 py-0.5 font-semibold text-[#C2F800] bg-[#c2f8004e] rounded-xl"
                  : "text-white"
              }
            >
              Workout
            </li>
          </Link>

          <Link href="/Myplan">
            <li
              className={
                pathname === "/Myplan"
                  ? "px-2.5 py-0.5 font-semibold text-[#C2F800] bg-[#c2f8004e] rounded-xl"
                  : "text-white"
              }
            >
              My plan
            </li>
          </Link>
        </ul>

      </div>
    </nav>
  );
};

export default Navber;