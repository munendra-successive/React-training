import { Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";
import Home from "./assignment-3/Question-6/Home";
import "./App.css";
import ProductDetail from "./assignment-3/Question-6/ProductDetail";
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
import Error from "./assignment-3/Question-5/Error";
import Navbar from "./assignment-3/Question-5/Navbar";
import Service from "./assignment-3/Question-5/Service";
import Dashboard from "./assignment-3/Question-5/Dashboard";
import Profile from "./assignment-3/Question-5/Profile";
import Setting from "./assignment-3/Question-5/Setting";

export const userAuth = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div id="question">
        <ParentOne>
          <ChildOne />
        </ParentOne>
      </div>
      <div id="question">
        <ParentTwo>
          <ChildTwo />
        </ParentTwo>
      </div>
      <div id="question">
        <h4>
          3.create pages: Home and About. Implement routing using React Router
          DOM. Create navigation links to switch between the Home and About
          pages. Display appropriate content on each page. Add a "404 Not Found"
          page for any invalid routes.
        </h4>
        <NavbarThree />
        <Routes>
          <Route path="/" element={<HomeThree />} />
          <Route path="about" element={<AboutThree />} />
          <Route path="*" element={<ErrorThree />} />
        </Routes>
      </div>

      {/* <div>
        <h4>
          4.Enhance the previous application by adding protected routes that
          require authentication. Create a login page with a form that accepts a
          username and password. Implement authentication logic (e.g., hardcode
          a username and password for now). Secure the About page so that it can
          only be accessed by authenticated users. Redirect unauthenticated
          users to the login page. Display a message on the Home page welcoming
          the authenticated user.
        </h4>
        <NavbarFour />
        <Routes>
          <Route path="/" element={<HomeFour />} />
          <Route path="about" element={<AboutFour />} />
          <Route path="service" element={<ServiceFour />} />
          <Route path="*" element={<ErrorFour />} />
        </Routes>
      </div> */}

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
        <userAuth.Provider
          value={{
            login,
            setLogin,
            username,
            setUsername,
            password,
            setPassword,
          }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeFive />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/dashboard/setting" element={<Setting />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </userAuth.Provider>
      </div>
      <div id="question">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
