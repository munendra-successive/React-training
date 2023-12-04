import { useContext } from "react";
import { UserAuthContext } from "./AuthContextProvider";

const Login = () => {
  const {
    username,
    setPassword,
    setUsername,
    password,
    login,
    handleSubmit,
    text,
  } = useContext(UserAuthContext);

  return (
    <>
      {!login && (
        <>
          {" "}
          <div>{text}</div>
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
