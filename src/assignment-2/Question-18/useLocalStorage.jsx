import { useState } from "react";

const useLocalStorage = (key,initialValue)=>{
        const storedValue = localStorage.getItem(key);
        const initial = storedValue ? JSON.parse(storedValue):initialValue;
        const[value,setValue]=useState(initial)


        const setLocalStorageValue =(newValue)=>{
            setValue(newValue);
            localStorage.setItem(key,JSON.stringify(newValue));
        }
        
        const removeLocalStorageValue=()=>{
            setValue("");
            localStorage.removeItem(key);
        }

        return[
            value,
            setLocalStorageValue,
            removeLocalStorageValue
        ]
}

export default useLocalStorage;