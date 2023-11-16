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
import { UserAuthContext } from "../../App";
const Home = () => {
  const navigate = useNavigate();
  const {loginfour,
    setLoginFour,
    usernamefour,
    setUsernameFour,
    passwordfour,
    setPasswordFour, } =
    useContext(UserAuthContext);

  const handleClick = () => {
    if (usernamefour === "Monu" && passwordfour === "Monu@123") {
      setLoginFour(true);
      navigate("/homefour");
    }
  };

  return (
    <>
      <p>
        {loginfour ? (
          <p>Welcome {usernamefour} </p>
        ) : (
          <div>
            <input
              type="text"
              onChange={(e) => setUsernameFour(e.target.value)}
              value={usernamefour}
              placeholder="Enter Username"
            ></input>
            <input
              type="password"
              onChange={(e) => setPasswordFour(e.target.value)}
              value={passwordfour}
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
