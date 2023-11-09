import { createContext, useState } from "react";

/*

1.create two components: a parent component that acts as a provider and a child component that consumes the context.
Create a context to manage a user's authentication status (logged in or out).
Implement a login button in the child component that, when clicked, updates the authentication status in the context to "logged in."
Display a message in the child component based on the user's authentication status. If the user is logged in, s
how "Welcome, [username]!" Otherwise, display "Please log in."

*/

export const UserAuthContext = createContext();
const Parent = ({ children }) => {
  const [islogin, setLogin] = useState(false);
  const userDetails = {
    name: "Monu",
    pass: "Monu@123",
  };

  return (
    <>
      <UserAuthContext.Provider value={{ islogin, setLogin, userDetails }}>
        {children}
      </UserAuthContext.Provider>
    </>
  );
};
export default Parent;
