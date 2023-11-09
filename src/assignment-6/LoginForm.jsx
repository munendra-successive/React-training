/*
4.You are given a simple form component (LoginForm) that contains 
input fields for username and password, as well as a submit button. 
Create test cases to verify that the form fields can be filled, and the submit button works correctly.

*/

import { useState } from "react";

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const handleClick = () => {
    if (username === "Monu" && password === "Monu@123") {
      setLogin(true);
    }
  };
  return (
    <>
      <h4>
        4.You are given a simple form component (LoginForm) that contains input
        fields for username and password, as well as a submit button. Create
        test cases to verify that the form fields can be filled, and the submit
        button works correctly.
      </h4>
      <input
        data-testid="username"
        type="text"
        placeholder="Username"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <input
        data-testid="password"
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button data-testid="submit" onClick={handleClick}>
        Submit
      </button>
      {login ? <p>Log in Successful</p> : ""}
    </>
  );
};

export default LoginForm;
