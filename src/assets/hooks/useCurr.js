 import {useEffect, useState} from 'react'
 
 function useCurr(currency)
 {
   cont [data,setData]=useState({})//ui pe rendering ke liy
   //loopbar bar chlta hai aur o object ke upr lgta hai esliy esko {} ye liy 
   //agr y nhi hota to ye website creash ho jati 
    //useEffect is for refilection on ui

useEffect(()=>{fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/
    currency-api@latest/v1/currencies/${currency}.json`)
    .then((res)=>{res.json()})
    .then((res)=>{setData(res[currency])})
    console.log(data);
},[currency])
return data;
 }
export default useCurr


















 