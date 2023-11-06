import React from "react";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <h4>This is About Page</h4>
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
};
export default About;
