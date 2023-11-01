import { useContext } from "react";
import { userThemeContext } from "./Theme";


const ThemeProvider = () => {
    const {theme, setTheme } = useContext(userThemeContext);
  
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
            {theme}
          </button>
        </div>
      </>
    );
  };
  
  export default ThemeProvider;