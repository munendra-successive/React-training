import { useContext } from "react";
import { UserAuth } from "../../App";
import { useNavigate } from "react-router-dom";

const About = () => {
  const { login } = useContext(UserAuth);
  const navigate = useNavigate();
  return (
    <>
      {login ? (
        <div>This about Page</div>
      ) : (
        <div>
          <button onClick={() => navigate("/homefive")}>Please LogIn</button>
        </div>
      )}
    </>
  );
};
export default About;
