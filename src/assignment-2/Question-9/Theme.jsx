import { useState, useContext, createContext } from "react";
import ThemeProvider from "./ThemeProvider";
/* 

9.Create a theme switcher application using the useContext hook.
Create a context to manage the current theme (e.g., light or dark).
Provide a button to toggle between the two themes.
Use the useContext hook to access the theme value and update it.
Apply different styles and colors to components based on the selected theme.

*/
export const userThemeContext = createContext();
const Theme = () => {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <userThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider />
      </userThemeContext.Provider>
    </>
  );
};


export default Theme;
