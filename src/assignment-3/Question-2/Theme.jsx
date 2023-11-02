import React, { useState } from "react";
import { createContext } from "react";


const userTheme=createContext();
const styles = {
    dark: {
      div: {
        backgroundColor: "black",
      },
      p: {
        color: "white",
      },
    },
    light: {
      div: {
        backgroundColor: "White",
      },
      p: {
        color: "black",
      },
    },
  };

const Theme=()=>{
    const[theme,setTheme]=useState("light");
    const handleClick=()=>{
        return theme==="light"?setTheme("dark"):setTheme("light")
    }
    
    return(
        <>
            <button onClick={handleClick}>Change Theme</button>
        </>
    )
}

export default Theme;