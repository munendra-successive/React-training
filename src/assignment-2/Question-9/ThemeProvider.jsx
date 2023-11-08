import { useState,createContext } from "react";
/* 

9.Create a theme switcher application using the useContext hook.
Create a context to manage the current theme (e.g., light or dark).
Provide a button to toggle between the two themes.
Use the useContext hook to access the theme value and update it.
Apply different styles and colors to components based on the selected theme.

*/

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
export const ThemeContext = createContext();
const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme,styles }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};


export default ThemeProvider;
