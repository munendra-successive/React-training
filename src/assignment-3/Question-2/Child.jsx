import { useContext, useState } from "react";
import { UserAuth, UserPref } from "./Parent";

const Child = () => {
  const { setLogin, islogin, userDetails } = useContext(UserAuth);
  const { styles, theme, handleClickPref } = useContext(UserPref);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    if (userDetails.name === username && userDetails.pass === password) {
      setLogin(true);
    }
  };

  return (
    <>
      <div style={styles[theme].div}>
        <label>Username </label>
        <input
          type="text"
          name={username}
          required
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label>Password </label>
        <input
          type="password"
          name={password}
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={handleClick}>Login</button>
        {islogin ? <p>Welcome {username}</p> : <p>Please Log In</p>}

        <button onClick={handleClickPref}>Change Theme</button>
      </div>
    </>
  );
};

export default Child;
