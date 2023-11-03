import { Route, Routes } from "react-router-dom";
import Home from "./assignment-3/Question-5/Home";
import About from "./assignment-3/Question-5/About";
import Error from "./assignment-3/Question-5/Error";
import Navbar from "./assignment-3/Question-5/Navbar";
import Service from "./assignment-3/Question-5/Service";
import Dashboard from "./assignment-3/Question-5/Dashboard";
import Profile from "./assignment-3/Question-5/Profile";
import Setting from "./assignment-3/Question-5/Setting";
import "./App.css";

import { createContext, useState } from "react";

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
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/setting" element={<Setting />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </userAuth.Provider>
    </>
  );
}

export default App;
