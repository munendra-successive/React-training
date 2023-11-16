import { Link, Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";
import "./App.css";
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
} from "./assignment-3";

export const UserAuthContext = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginfour, setLoginFour] = useState(false);
  const [usernamefour, setUsernameFour] = useState("");
  const [passwordfour, setPasswordFour] = useState("");
  const[text,setText]=useState("Please Login")
  return (
    <>
      {/* Question - 1 */}

      <div id="question">
        <ParentOne>{<ChildOne />}</ParentOne>
      </div>

      {/* Question - 2 */}

      <div id="question">
        <ParentTwo>{<ChildTwo />}</ParentTwo>
      </div>

      {/* Question - 3 */}

      <div id="question">
        <h4>
          3.create pages: Home and About. Implement routing using React Router
          DOM. Create navigation links to switch between the Home and About
          pages. Display appropriate content on each page. Add a "404 Not Found"
          page for any invalid routes.
        </h4>
        <NavbarThree />
        <Routes>
          <Route path="/homethree" element={<HomeThree />} />
          <Route path="/aboutthree" element={<AboutThree />} />
          <Route path="*" element={<ErrorThree />} />
        </Routes>
      </div>

      {/* Question - 4 */}

      <div id="question">
        <h4>
          4.Enhance the previous application by adding protected routes that
          require authentication. Create a login page with a form that accepts a
          username and password. Implement authentication logic (e.g., hardcode
          a username and password for now). Secure the About page so that it can
          only be accessed by authenticated users. Redirect unauthenticated
          users to the login page. Display a message on the Home page welcoming
          the authenticated user.
        </h4>
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
            <Route path="/homefour" element={<HomeFour />} />
            <Route path="/aboutfour" element={<AboutFour />} />
            <Route path="/servicefour" element={<ServiceFour />} />
            <Route path="*" element={<ErrorFour />} />
          </Routes>
        </UserAuthContext.Provider>
      </div>

      {/* Question - 5 */}

      <div id="question">
        <h4>
          5.Extend the application to include nested routes for a more complex
          user interface. Create a new section of your application (e.g., a
          Dashboard) with multiple sub-pages (e.g., Dashboard, Profile,
          Settings). Implement nested routing within this section using nested
          routes. Add navigation links to switch between the sub-pages within
          the Dashboard section. Customize the content displayed on each
          sub-page.
        </h4>
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
            <Route path="/homefive" element={<HomeFive />} />
            <Route path="/aboutfive" element={<AboutFive />} />
            <Route path="/servicefive" element={<ServiceFive />} />
            <Route path="*" element={<ErrorFive />} />
            <Route path="/dashboardfive" element={<DashboardFive />} />
            <Route path="/dashboardfive/profile" element={<ProfileFive />} />
            <Route path="/dashboardfive/setting" element={<SettingFive />} />
          </Routes>
        </UserAuthContext.Provider>
      </div>

      {/* Question - 6 */}

      <div id="question">
        <h4>
          6.Create a list of items (e.g., products, articles) in your
          application. Implement dynamic routing to display details for each
          item when clicked. Create a route parameter that represents the item's
          ID in the URL (e.g., "/products/:id"). Fetch item details based on the
          route parameter and display them on the detail page. Add a "Go Back"
          button on the detail page to return to the list.
        </h4>
        <Link to="/">Home Page</Link>
        <Routes>
          <Route path="/" element={<HomeSix />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
