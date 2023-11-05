import { useContext } from "react";
import { UserAuth } from "./Login";
import { useNavigate } from "react-router-dom";

const About = () => {
  // const { login } = useContext(UserAuth);
  const navigate=useNavigate()
  return (
    <>
      {true ? <div>This about Page</div>:<div><button onClick={()=>navigate("/")}>Please LogIn</button></div>}
    </>
  );
};
export default About;
