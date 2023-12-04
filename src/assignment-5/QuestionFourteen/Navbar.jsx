import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserAuthContext } from "./AuthContextProvider";
const Navbar = () => {
  const navigate = useNavigate();
  const { setLogin, login } = useContext(UserAuthContext);

  return (
    <nav>
      <Link
        to="/"
        onClick={() => {
          setLogin(false);
          navigate("/");
        }}
      >
        Login
      </Link>
      <Link to={login ? "/home" : "/"}>Home</Link>
      {login && (
        <Link to="/" onClick={() => setLogin(false)}>
          Logout
        </Link>
      )}
    </nav>
  );
};
export default Navbar;
