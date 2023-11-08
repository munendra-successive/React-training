/*

10.Develop a language switcher application using the useContext hook.
Create a context to manage the current language (e.g., English or Spanish).
Provide buttons to switch between languages.
Use the useContext hook to access the current language value.
Display different language versions of the application's content.


*/

import { useState, createContext } from "react";
export const LanguageContext = createContext();

const LanguageProvider = ({children}) => {
  const [language, setLanguage] = useState("English");
  return (
    <>
      <h4>
        10.Develop a language switcher application using the useContext hook.
        Create a context to manage the current language (e.g., English or
        Spanish). Provide buttons to switch between languages. Use the
        useContext hook to access the current language value. Display different
        language versions of the application's content.
      </h4>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        {children}
      </LanguageContext.Provider>
    </>
  );
};

export default LanguageProvider;
