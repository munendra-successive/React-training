import { useContext } from "react";
import { ThemeContext } from "./Theme";


const QuestionNine = () => {
    const {theme, setTheme,styles } = useContext(ThemeContext);
  
    
    return (
      <>
        <h4>
          9.Create a theme switcher application using the useContext hook. Create
          a context to manage the current theme (e.g., light or dark). Provide a
          button to toggle between the two themes. Use the useContext hook to
          access the theme value and update it. Apply different styles and colors
          to components based on the selected theme.
        </h4>
        <div style={styles[theme].div}>
          <p style={styles[theme].p}>Hello Everyone</p>
          <button
            onClick={() =>
              theme === "light" ? setTheme("dark") : setTheme("light")
            }
          >
            Change Theme
          </button>
        </div>
      </>
    );
  };
  
  export default QuestionNine;