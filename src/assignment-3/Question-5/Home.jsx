/*

5.Extend the application to include nested routes for a more complex user interface.
Create a new section of your application (e.g., a Dashboard) with multiple sub-pages (e.g., Dashboard, Profile, Settings).
Implement nested routing within this section using nested routes.
Add navigation links to switch between the sub-pages within the Dashboard section.
Customize the content displayed on each sub-page.

*/

import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { UserAuthContext } from "../assignment-3";
const Home = () => {
  const navigate = useNavigate();
  const {
    login,
    setLogin,
    username,
    setUsername,
    password,
    setPassword,
    text,
    setText,
  } = useContext(UserAuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "Monu" && password === "Monu@123") {
      setLogin(true);
      navigate("/homefive");
    } else if (username && password) {
      setText("Invalid Username or Password");
    }
  };

  return (
    <>
      <p>
        {login ? (
          <h4>Welcome {username} </h4>
        ) : (
          <div>
            <p>{text}</p>
            <form onSubmit={handleSubmit}>
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
              <button type="submit">Login</button>
            </form>
          </div>
        )}
      </p>
    </>
  );
};

export default Home;
