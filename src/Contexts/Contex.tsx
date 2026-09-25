'use client'
import { IDataType } from '@/Type';
import React, { createContext, ReactNode, useState,} from 'react';


type SortByType = "rating" | "duration" | "celories";

export interface contextType {
  toggle: boolean
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
  state: IDataType[]
  setState: React.Dispatch<React.SetStateAction<IDataType[]>>
  saveState: IDataType[]
  setSaveState: React.Dispatch<React.SetStateAction<IDataType[]>>
  sortBy:SortByType
  setSortBy:React.Dispatch<React.SetStateAction<SortByType>>


}
export const ExerciseContext = createContext<contextType | null>(null)

const ContexProvider = ({ children }: { children: ReactNode }) => {
  const [toggle, setToggle] = useState<boolean>(false)
  const [state, setState] = useState<IDataType[]>([])
  const [saveState,setSaveState] = useState<IDataType[]>([])
  const [sortBy,setSortBy]=useState<'rating'|"duration"|"celories">('rating')
  const shareData = {
    toggle,
    setToggle,
    state,
    setState,
    saveState,
    setSaveState,
    sortBy,
    setSortBy

  }

  return (
    <ExerciseContext.Provider value={shareData}>
      {children}
    </ExerciseContext.Provider>
  );
};

export default ContexProvider;