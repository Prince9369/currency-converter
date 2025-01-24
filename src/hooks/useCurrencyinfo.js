//hooks aksar .js se hi save krte hai
import { useEffect,useState } from "react";

//useCurrencyInfo hamara custom hook hai 
//useCurrencyInfo isliye nam de rhe h kyoki jyadatar hooks use.... se hi start hote hai
function useCurrencyInfo(currency){
    const [data,setData] =useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())//res.json api calls se aane wali string wale data ko json format me convert krta hai
        .then((res)=>setData(res[currency]))//hold krne ke liye data we use useState Hook
        console.log(data);
        
    },[currency])//currency change krne pr call krana chahte hai to currency ko dependencies array me dal denge
    //useEffect se iske andr wala function automatically call ho jayega

    console.log(data);
    return data

    
}

export default useCurrencyInfo;