/*

10.Develop a language switcher application using the useContext hook.
Create a context to manage the current language (e.g., English or Spanish).
Provide buttons to switch between languages.
Use the useContext hook to access the current language value.
Display different language versions of the application's content.


*/

import { useState, useContext, createContext } from "react";
export const userLanguage = createContext();

const Language = () => {
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
      <userLanguage.Provider value={{ language, setLanguage }}>
        <LanguageProvider />
      </userLanguage.Provider>
    </>
  );
};

const LanguageProvider = () => {
  const { language, setLanguage } = useContext(userLanguage);
  return (
    <button
      onClick={() =>
        language === "English" ? setLanguage("Hindi") : setLanguage("English")
      }
    >
      {language}
    </button>
  );
};

export default Language;
