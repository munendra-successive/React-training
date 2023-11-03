import { useContext } from "react";
import { userAuth } from "../../App";
import { useNavigate } from "react-router-dom";

const About = () => {
  const { login } = useContext(userAuth);
  const navigate = useNavigate();
  return (
    <>
      {login ? (
        <div>This about Page</div>
      ) : (
        <div>
          <button onClick={() => navigate("/")}>Please LogIn</button>
        </div>
      )}
    </>
  );
};
export default About;
