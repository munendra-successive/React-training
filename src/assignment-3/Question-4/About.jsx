import { useContext } from "react";
import { UserAuth } from "../../App";
import { useNavigate } from "react-router-dom";

const About = () => {
  const { loginfour } = useContext(UserAuth);
  const navigate=useNavigate()
  return (
    <>
      {loginfour ? <div>This about Page</div>:<div><button onClick={()=>navigate("/")}>Please LogIn</button></div>}
    </>
  );
};
export default About;
