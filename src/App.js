import "./App.css";
import Home from "./assignment-5/QuestionFourteen/Home";
import { Route, Routes } from "react-router-dom";
import {
  ApolloProvider1,
  ShowLogs,
  withLogger,
  WithAuth,
  Login,
  AuthContextProvider,
  Navbar,
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
  QuestionTwo,
} from "./assignment-5";

function App() {
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
      {/* <div id="question">
        <ApolloProvider2 />
      </div> */}
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

        <AuthContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" Component={Login} />
            <Route path="/home" Component={() => WithAuth(Home)} />
          </Routes>
        </AuthContextProvider>
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
