import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import userAuth from "./Home";

const About = () => {
  const navigate = useNavigate();
  const {username}=useContext(userAuth);    
  console.log(username);
  return (
    <>
          <h1>This is About Page</h1>
          <h1>{username}</h1>
          <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
};
export default About;
