import { useContext } from "react";
import { userLanguage } from "./Language";

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
export default LanguageProvider;  