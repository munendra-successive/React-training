import { useEffect, useState } from "react"

const useTimer=(duration)=>{
   const [timerValue,setTimerValue]=useState(duration);
   const[isActive,setActive]=useState(false)
   const startTimer=()=>{
        setActive(true)
   }

   const pauseTimer=()=>{
    setActive(false);
   }
   const reset=()=>{
    setActive(false)
    setTimerValue(duration);
   }
   
   useEffect(()=>()=>{
    let interval;
    if(isActive){
        interval=setInterval(()=>{
            setTimerValue((prevTimer)=>{
                if(prevTimer===0){
                    clearInterval(interval);
                    setActive(false);
                    return 0;
                }
                else{
                    return prevTimer-1
                }
                
            })
        },1000)
    }else{
        clearInterval(interval);
    }
    return ()=>clearInterval(interval);
   },[isActive,duration])

   return[timerValue,startTimer,pauseTimer,reset,isActive];
}

export default useTimer;