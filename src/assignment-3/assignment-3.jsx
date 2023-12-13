import { Link, Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";
import {
  ParentOne,
  ChildOne,
  ParentTwo,
  ChildTwo,
  HomeThree,
  ErrorThree,
  AboutThree,
  NavbarThree,
  AboutFour,
  ErrorFour,
  HomeFour,
  NavbarFour,
  ServiceFour,
  AboutFive,
  DashboardFive,
  ErrorFive,
  HomeFive,
  NavbarFive,
  ProfileFive,
  ServiceFive,
  SettingFive,
  HomeSix,
  ProductDetail,
} from "./index";

export const UserAuthContext = createContext();

const Assignment3 = () => {
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginfour, setLoginFour] = useState(false);
  const [usernamefour, setUsernameFour] = useState("");
  const [passwordfour, setPasswordFour] = useState("");
  const [text, setText] = useState("Please Login");
  return (
    <>
      <nav>
        <Link to="/assignment3/">Question1</Link>
        <Link to="/assignment3/question2">Question2</Link>
        <Link to="/assignment3/question3">Question3</Link>
        <Link to="/assignment3/question4">Question4</Link>
        <Link to="/assignment3/question5">Question5</Link>
        <Link to="/assignment3/question6">Question6</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ParentOne>{<ChildOne />}</ParentOne>} />

        <Route
          path="/question2"
          element={<ParentTwo>{<ChildTwo />}</ParentTwo>}
        />

        <Route
          path="/question3/*"
          element={
            <>
              <NavbarThree />
              <Routes>
                <Route path="/" element={<HomeThree />} />
                <Route path="/about" element={<AboutThree />} />
                <Route path="*" element={<ErrorThree />} />
              </Routes>
            </>
          }
        />

        <Route
          path="/question4/*"
          element={
            <>
              <UserAuthContext.Provider
                value={{
                  loginfour,
                  setLoginFour,
                  usernamefour,
                  setUsernameFour,
                  passwordfour,
                  setPasswordFour,
                  text,
                  setText,
                }}
              >
                <NavbarFour />
                <Routes>
                  <Route path="/" element={<HomeFour />} />
                  <Route path="/about" element={<AboutFour />} />
                  <Route path="/service" element={<ServiceFour />} />
                  <Route path="*" element={<ErrorFour />} />
                </Routes>
              </UserAuthContext.Provider>
            </>
          }
        />

        <Route
          path="/question5/*"
          element={
            <>
              <UserAuthContext.Provider
                value={{
                  login,
                  setLogin,
                  username,
                  setUsername,
                  password,
                  setPassword,
                  text,
                  setText,
                }}
              >
                <NavbarFive />
                <Routes>
                  <Route path="/" element={<HomeFive />} />
                  <Route path="/about" element={<AboutFive />} />
                  <Route path="/service" element={<ServiceFive />} />
                  <Route path="*" element={<ErrorFive />} />
                  <Route path="/dashboard" element={<DashboardFive />} />
                  <Route
                    path="/dashboard/profile"
                    element={<ProfileFive />}
                  />
                  <Route
                    path="/dashboard/setting"
                    element={<SettingFive />}
                  />
                </Routes>
              </UserAuthContext.Provider>
            </>
          }
        />

        <Route
          path="/question6"
          element={
            <>
              <Link to="/">Home Page</Link>
              <Routes>
                <Route path="/" element={<HomeSix />} />
                <Route path="/product/:id" element={<ProductDetail />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </>
  );
};

export { Assignment3 };
