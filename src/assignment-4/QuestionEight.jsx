/*

Create a temperature converter component with two input fields: one for Celsius and one for Fahrenheit. 
Implement controlled components for both inputs.
When the user enters a value in one input, the other input should update with the converted temperature.

*/

import { useEffect, useState } from "react";


const QuestionEight=()=>{
    const[celsius,setCelsius]=useState(0)
    const[fahrenheit,setFahrenheit]=useState(0)
    useEffect(()=>{
        const newfahreinheit=(celsius*9/5)+32
        setFahrenheit(newfahreinheit)
    },[celsius])
    return(
        <>
        <div>
        <label>Enter temperature in Celsius</label>
        <input type="text" placeholder="Celsius" name="celsius" value={celsius} onChange={(e)=>{setCelsius(e.target.value)}}/>
        </div>
        <div>
        <label>Temperature in Fahreinheit</label>
        <input type="text" placeholder="Fahreinheit" name="fahreinheit" value={fahrenheit}/>
        </div>
        </>
    )
}

export default QuestionEight;