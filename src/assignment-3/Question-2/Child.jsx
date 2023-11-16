import { useContext, useState } from "react";
import { UserAuthContext, UserPrefContext } from "./Parent";

const Child = () => {
  const { setLogin, islogin, userDetails } = useContext(UserAuthContext);
  const { styles, theme, handleClickPref } = useContext(UserPrefContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("Please Login");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userDetails.name === username && userDetails.pass === password) {
      setLogin(true);
    } else {
      setText("Invalid username or password");
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
          <>
            <p>{text}</p>
            <form onSubmit={handleSubmit}>
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
              <button type="submit">Login</button>
            </form>
          </>
        )}
      </div>
      <div>
        <button onClick={handleClickPref}>Change Theme</button>
      </div>
    </>
  );
};

export default Child;
