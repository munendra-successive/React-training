/*

4.Enhance the previous application by adding protected routes that require authentication.
Create a login page with a form that accepts a username and password.
Implement authentication logic (e.g., hardcode a username and password for now).
Secure the About page so that it can only be accessed by authenticated users.
Redirect unauthenticated users to the login page.
Display a message on the Home page welcoming the authenticated user.

*/

import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { userAuth } from "../../App";

const Home = () => {
  const navigate = useNavigate();
  const { login, setLogin, username, setUsername, password, setPassword } =
    useContext(userAuth);

  const handleClick = () => {
    setUsername(username);
    setPassword(password);
    if (username === "Monu" && password === "Monu@123") {
      setLogin(true);
      navigate("/about");
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          placeholder="Enter Username"
        ></input>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Enter Password"
        ></input>
        <button onClick={handleClick}>Login</button>
      </div>
      <p>{login ? <p>Welcome {username} </p> : "Please Login"}</p>
    </>
  );
};

export default Home;
