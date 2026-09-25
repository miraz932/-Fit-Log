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
      <button onClick={() => handleToggle(false)} className={`${toggle === false ? "bg-[#C2F10D]" : ""} px-2 cursor-pointer rounded-[8px]`}>Today s plan </button>
      <button onClick={() => handleToggle(true)} className={`${toggle === true ? "bg-[#C2F10D]" : ""} px-2 cursor-pointer rounded-[8px]`}>Saved</button>
      <div>
    </div>
      </div>
  );
};

export default ToggleButton;