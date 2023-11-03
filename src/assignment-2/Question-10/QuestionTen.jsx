import { useContext } from "react";
import { UserLanguage } from "./Language";

const QuestionTen = () => {
    const { language, setLanguage } = useContext(UserLanguage);
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