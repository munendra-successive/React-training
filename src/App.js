import { createContext } from "react";
import "./App.css";
import Home from "./assignment-5/QuestionFourteen/Home";
import { useState } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import {ApolloProvider1,
  ShowLogs,
  withLogger,
  WithAuth,
  Login,
  ApolloProvider2,
  DisplayData,
  withDataFetching,
  QuestionThirteen,
  QuestionTwelve,
  QuestionFive,
  QuestionFour,
  QuestionOne,
  QuestionSeven,
  QuestionSix,
  QuestionThree,
  QuestionTwo} from './assignment-5'

export const UserAuthContext = createContext();
function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const navi = useNavigate();
  const handleSubmit = () => {
    if (username === "Monu" && password === "Monu@123") {
      setLogin(true);
      navi("/home");
    }
  };
  const DataFetching = withDataFetching(DisplayData);
  const ShowLog = withLogger(ShowLogs);
  return (
    <>
      <div id="question">
        <QuestionOne />
      </div>
      <div id="question">
        <QuestionTwo />
      </div>
      <div id="question">
        <QuestionThree />
      </div>
      <div id="question">
        <QuestionFour />
      </div>
      <div id="question">
        <QuestionFive />
      </div>
      <div id="question">
        <QuestionSix />
      </div>
      <div id="question">
        <QuestionSeven />
      </div>
      <div id="question">
        <ApolloProvider1 />
      </div>
      <div id="question">
        <ApolloProvider2 />
      </div>
      <div id="question">
        <QuestionTwelve />
      </div>
      <div id="question">
        <QuestionThirteen />
      </div>
      <div id="question">
        <h4>
          14.Create an HOC named withAuth that restricts access to a specific
          component to authenticated users only. Implement this HOC on a
          sampleFile: Untitled Document 1 component and demonstrate how it
          protects routes.
        </h4>
        <UserAuthContext.Provider
          value={{
            username,
            password,
            setUsername,
            setPassword,
            login,
            setLogin,
            handleSubmit,
          }}
        >
          <nav>
            <Link to="/">Login</Link>
            <Link to="/home">Home</Link>
            <Link onClick={() => setLogin(false)}>Logout</Link>
          </nav>
          <Routes>
            <Route path="/" Component={Login} />
            <Route path="/home" Component={() => WithAuth(Home)} />
          </Routes>
        </UserAuthContext.Provider>
      </div>
      <div id="question">
        <ShowLog />
      </div>
      <div id="question">
        <DataFetching />
      </div>
    </>
  );
}
export default App;
