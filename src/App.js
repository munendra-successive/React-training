import React, { createContext, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
//import Parent from "./assignment-3/Question-2/Parent";
// import Home from "./assignment-3/Question-3/Home";
// import About from "./assignment-3/Question-3/About";
// import Error from "./assignment-3/Question-3/Error";
// import Navbar from "./assignment-3/Question-3/Navbar";

// import Parent from "./assignment-3/Question-2/Parent";
import Home from "./assignment-3/Question-4/Home";
import About from "./assignment-3/Question-4/About";
import Error from "./assignment-3/Question-4/Error";
import Navbar from "./assignment-3/Question-4/Navbar";
import Service from "./assignment-3/Question-4/Service";

import { BrowserRouter } from "react-router-dom";
export const userAuth = createContext();
function App() {
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <userAuth.Provider
        value={{
          login,
          setLogin,
          username,
          setUsername,
          password,
          setPassword,
        }}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/service" Component={Service} />
            <Route path="*" Component={Error} />
          </Routes>
        </BrowserRouter>
      </userAuth.Provider>
    </>
  );
}

export default App;
