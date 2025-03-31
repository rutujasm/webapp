import { Expense } from '../model/Expense';
import { getExpenses } from './../services/expense-service';
import React, { useEffect, useState } from 'react'

const useExpenses = () => {
  
    const [expenses,setExpenses]=useState<Expense[]>([]);
    const [error,setError]=useState(null);
    const[loader,setLoader]=useState(true);

    useEffect(()=>{
        setLoader(true)
        getExpenses()
        .then((response)=>{setExpenses(response.data);setLoader(false)})
        .catch((err)=>setError(err.message))
    
    }
        
    ,[])

    return {expenses,error,loader};

}

export default useExpenses
