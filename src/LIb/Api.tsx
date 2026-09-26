import { IDataType } from "@/Type";

const getApidata =async ():Promise<IDataType[]> => {
    const res = await fetch('https://api.api-store.workers.dev/api/fitlog',{cache:"force-cache"})
    if(!res.ok){
        throw new Error('Fetch Failed Data')
    }
    const data = await res.json()
    return data 
  
};

export default getApidata;




