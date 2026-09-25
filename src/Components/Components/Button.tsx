"use client"
import { ExerciseContext } from '@/Contexts/Contex';
import React, { use } from 'react';
const NavButton = () => {
    const { state } = use(ExerciseContext)!
    const { saveState } = use(ExerciseContext)!
  return (
    <div>
          <button>Plan <p>{state.length}</p></button>
          <button>Saved <p>{saveState.length}</p></button>
    </div>
  );
};

export default NavButton;