import { useContext } from "react";
import {UserAuthContext } from "../../App";

const Login = () => {
  const { username, setPassword, setUsername, password, login, handleSubmit } =
    useContext(UserAuthContext);

  return (
    <>
      {!login && (
        <>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
        </>
      )}
    </>
  );
};
export default Login;
