'use client'
import { IDataType } from '@/Type';
import React, { createContext, ReactNode, useState,} from 'react';
export interface contextType {
  toggle: boolean
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
  state: IDataType[]
  setState: React.Dispatch<React.SetStateAction<IDataType[]>>
  saveState: IDataType[]
  setSaveState: React.Dispatch<React.SetStateAction<IDataType[]>>


}

export const ExerciseContext = createContext<contextType | null>(null)

const ContexProvider = ({ children }: { children: ReactNode }) => {
  const [toggle, setToggle] = useState<boolean>(false)
  const [state, setState] = useState<IDataType[]>([])
  const [saveState,setSaveState] = useState<IDataType[]>([])
  const shareData = {
    toggle,
    setToggle,
    state,
    setState,
    saveState,
    setSaveState

  }

  return (
    <ExerciseContext.Provider value={shareData}>
      {children}
    </ExerciseContext.Provider>
  );
};

export default ContexProvider;