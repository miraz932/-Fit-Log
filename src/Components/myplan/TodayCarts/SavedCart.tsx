import { IDataType } from '@/Type';
import React from 'react';

const SavedCart = ({saveData}:{saveData:IDataType}) => {
  return (
    <div>

      <h3>{saveData.name}</h3>
      
    </div>
  );
};

export default SavedCart;