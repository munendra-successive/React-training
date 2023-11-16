import { useContext, useState } from "react";
import { UserAuthContext } from "./Parent";

const Child = () => {
  const { setLogin, islogin, userDetails } = useContext(UserAuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("Please Login");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userDetails.name === username && userDetails.pass === password) {
      setLogin(true);
    } else {
      setText("Invalid Username or Password");
    }
  };

  return (
    <>
      <h4>
        1.create two components: a parent component that acts as a provider and
        a child component that consumes the context. Create a context to manage
        a user's authentication status (logged in or out). Implement a login
        button in the child component that, when clicked, updates the
        authentication status in the context to "logged in." Display a message
        in the child component based on the user's authentication status. If the
        user is logged in, show "Welcome, [username]!" Otherwise, display
        "Please log in."
      </h4>
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
    </>
  );
};

export default Child;
