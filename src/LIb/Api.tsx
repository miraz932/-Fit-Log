import { IDataType } from "@/Type";

const getApidata =async ():Promise<IDataType[]> => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    const data = await res.json()
    return data 

  
  
};

export default getApidata;