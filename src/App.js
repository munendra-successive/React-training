import { Link, Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";
import "./App.css";
import ParentOne from "./assignment-3/Question-1/Parent";
import ChildOne from "./assignment-3/Question-1/Child";
import ParentTwo from "./assignment-3/Question-2/Parent";
import ChildTwo from "./assignment-3/Question-2/Child";
import HomeThree from "./assignment-3/Question-3/Home";
import AboutThree from "./assignment-3/Question-3/About";
import ErrorThree from "./assignment-3/Question-3/Error";
import NavbarThree from "./assignment-3/Question-3/Navbar";
import HomeFour from "./assignment-3/Question-4/Home";
import AboutFour from "./assignment-3/Question-4/About";
import ServiceFour from "./assignment-3/Question-4/Service";
import ErrorFour from "./assignment-3/Question-4/Error";
import NavbarFour from "./assignment-3/Question-4/Navbar";
import HomeFive from "./assignment-3/Question-5/Home";
import About from "./assignment-3/Question-5/About";
import NavbarFive from "./assignment-3/Question-5/Navbar";
import Service from "./assignment-3/Question-5/Service";
import Dashboard from "./assignment-3/Question-5/Dashboard";
import Profile from "./assignment-3/Question-5/Profile";
import Setting from "./assignment-3/Question-5/Setting";
import ErrorFive from "./assignment-3/Question-5/Error";
import HomeSix from "./assignment-3/Question-6/Home";
import ProductDetail from "./assignment-3/Question-6/ProductDetail";

export const UserAuth = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginfour, setLoginFour] = useState(false);
  const [usernamefour, setUsernameFour] = useState("");
  const [passwordfour, setPasswordFour] = useState("");
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
          <Route path="*" element={<ErrorThree/>}/>
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
        <UserAuth.Provider
          value={{
            loginfour,
            setLoginFour,
            usernamefour,
            setUsernameFour,
            passwordfour,
            setPasswordFour,
          }}
        >
          <NavbarFour />
          <Routes>
            <Route path="/homefour" element={<HomeFour />} />
            <Route path="/aboutfour" element={<AboutFour />} />
            <Route path="/servicefour" element={<ServiceFour />} />
            <Route path="*" element={<ErrorFour/>}/>
          </Routes>
        </UserAuth.Provider>
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
        <UserAuth.Provider
          value={{
            login,
            setLogin,
            username,
            setUsername,
            password,
            setPassword,
          }}
        >
          <NavbarFive />
          <Routes>
            <Route path="/homefive" element={<HomeFive />} />
            <Route path="/aboutfive" element={<About />} />
            <Route path="/servicefive" element={<Service />} />
            <Route path="*" element={<ErrorFive/>}/>
            <Route path="/dashboardfive" element={<Dashboard />} />
            <Route path="/dashboardfive/profile" element={<Profile />} />
            <Route path="/dashboardfive/setting" element={<Setting />} />
          </Routes>
        </UserAuth.Provider>
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
