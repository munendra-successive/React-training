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
      <h4>
        2.Extend the previous application to demonstrate the use of nested
        contexts. Create a new context to manage user preferences (e.g., theme
        preference). Modify the parent component to provide both the
        authentication and preferences contexts. Create a child component that
        consumes both contexts. Allow the user to change their theme preference
        (light/dark) using a button in the child component. Display the theme
        preference in the UI and adjust the component's styling accordingly.
      </h4>
      <div style={styles[theme].div}>
        {islogin ? (
          <p>
            Welcome <h3>{username}</h3>
          </p>
        ) : (
          <p>Please Log In</p>
        )}
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
      </div>
      <div>
        <button onClick={handleClickPref}>Change Theme</button>
      </div>
    </>
  );
};

export default Child;
