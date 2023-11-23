import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserAuthContext } from "./AuthContextProvider";
const Navbar = () => {
  const navigate = useNavigate();
  const { setLogin } = useContext(UserAuthContext);

  return (
    <nav>
      <Link
        onClick={() => {
          setLogin(false);
          navigate('/')
        }}
      >
        Login
      </Link>
      <Link to="/home">Home</Link>
      <Link onClick={() => setLogin(false)}>Logout</Link>
    </nav>
  );
};
export default Navbar;
