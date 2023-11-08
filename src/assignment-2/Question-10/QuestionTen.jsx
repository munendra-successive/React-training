import { useContext } from "react";
import { LanguageContext } from "./LanguageProvider";

const QuestionTen = () => {
    const { language, setLanguage } = useContext(LanguageContext);
    return (
      <button
        onClick={() =>
          language === "English" ? setLanguage("Spanish") : setLanguage("English")
        }
      >
        {language}
      </button>
    );
  };
export default QuestionTen;  