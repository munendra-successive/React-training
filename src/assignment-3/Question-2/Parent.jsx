/*

2.Extend the previous application to demonstrate the use of nested contexts.
Create a new context to manage user preferences (e.g., theme preference).
Modify the parent component to provide both the authentication and preferences contexts.
Create a child component that consumes both contexts.
Allow the user to change their theme preference (light/dark) using a button in the child component.
Display the theme preference in the UI and adjust the component's styling accordingly.

*/

import React from "react";
import { createContext, useState } from "react";

export const UserAuthContext = createContext();
export const UserPrefContext = createContext();
const styles = {
  dark: {
    div: {
      backgroundColor: "grey",
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

const Parent = ({ children }) => {
  const [islogin, setLogin] = useState(false);
  const userDetails = {
    name: "Monu",
    pass: "Monu@123",
  };

  const [theme, setTheme] = useState("light");
  const handleClickPref = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <UserAuthContext.Provider value={{ islogin, setLogin, userDetails }}>
        <UserPrefContext.Provider value={{ styles, theme, handleClickPref }}>
          {children}
        </UserPrefContext.Provider>
      </UserAuthContext.Provider>
    </>
  );
};
export default Parent;
