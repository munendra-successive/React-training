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
import { UserAuth } from "../../App";
const Home = () => {
  const navigate = useNavigate();
  const {login,setLogin, username, setUsername, password, setPassword } =
    useContext(UserAuth);

  const handleClick = () => {
    if (username === "Monu" && password === "Monu@123") {
      setLogin(true);
      navigate("/");
    }
  };

  return (
    <>
      <p>
        {login ? (
          <p>Welcome {username} </p>
        ) : (
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
        )}
      </p>
    </>
  );
};

export default Home;
