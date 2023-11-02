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
import Child from "./Child";

export const UserAuth = createContext();
export const UserPref = createContext();
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

const Parent = () => {
  const [islogin, setLogin] = useState(false);
  const userDetails = {
    name: "Monu",
    pass: "Monu@123",
  };

  const [theme, setTheme] = useState("light");
  const handleClickPref = () => {
    return theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <UserAuth.Provider value={{ islogin, setLogin, userDetails }}>
        <UserPref.Provider value={{ styles, theme, handleClickPref }}>
          <Child />
        </UserPref.Provider>
      </UserAuth.Provider>
    </>
  );
};
export default Parent;
