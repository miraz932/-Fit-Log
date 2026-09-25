'use client'
import { ExerciseContext } from '@/Contexts/Contex';
import React, { use, useContext } from 'react';
import TodayPlan from './TodayPlan';
const ToggleButton = () => {
  const { toggle, setToggle } = useContext(ExerciseContext)!

  const handleToggle = (value: boolean) => {
    setToggle(value)
  }
  return (
    <div>
      <button onClick={() => handleToggle(false)} className={`${toggle === false ? "bg-[#c3f10de7] text-black font-semibold" : ""} px-2 py-1 cursor-pointer rounded-xl`}>Today s plan </button>
      <button onClick={() => handleToggle(true)} className={`${toggle === true ? "bg-[#c3f10de8] text-black font-semibold" : ""} px-2 py-1 cursor-pointer rounded-xl`}>Saved</button>
      <div>
    </div>
      </div>
  );
};

export default ToggleButton;