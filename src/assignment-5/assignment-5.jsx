import { Route, Routes, Link } from "react-router-dom";
import {
  ApolloProvider1,
  ShowLogs,
  withLogger,
  WithAuth,
  Login,
  AuthContextProvider,
  Navbar,
  Home,
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
} from "./index";

const Assignment5 = () => {
  const DataFetching = withDataFetching(DisplayData);
  const ShowLog = withLogger(ShowLogs);
  return (
    <>
      <nav>
        <Link to="/assignment5/">Question1</Link>
        <Link to="/assignment5/question2">Question2</Link>
        <Link to="/assignment5/question3">Question3</Link>
        <Link to="/assignment5/question4">Question4</Link>
        <Link to="/assignment5/question5">Question5</Link>
        <Link to="/assignment5/question6">Question6</Link>
        <Link to="/assignment5/question7">Question7</Link>
        <Link to="/assignment5/question8">Question8</Link>
        {/* <Link to="/assignment5/question9">Question9</Link> */}
        <Link to="/assignment5/question12">Question12</Link>
        <Link to="/assignment5/question13">Question13</Link>
        <Link to="/assignment5/question14">Question14</Link>
        <Link to="/assignment5/question15">Question15</Link>
        <Link to="/assignment5/question16">Question16</Link>
      </nav>

      <Routes>
        <Route path="/" element={<QuestionOne />} />
        <Route path="/question2" element={<QuestionTwo />} />

        <Route path="/question3" element={<QuestionThree />} />

        <Route path="/question4" element={<QuestionFour />} />

        <Route path="/question5" element={<QuestionFive />} />

        <Route path="/question6" element={<QuestionSix />} />

        <Route path="/question7" element={<QuestionSeven />} />

        <Route path="/question8" element={<ApolloProvider1 />} />

        <Route path="/question9" element={<ApolloProvider2 />} />

        <Route path="/question12" element={<QuestionTwelve />} />

        <Route path="/question13" element={<QuestionThirteen />} />
        <Route
          path="/question14/*"
          element={
            <>
              <AuthContextProvider>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/home" element={() => WithAuth(Home)} />
                </Routes>
              </AuthContextProvider>
            </>
          }
        />
        <Route path="/question15" element={<ShowLog />} />
        <Route path="/question16" element={<DataFetching />} />
      </Routes>
    </>
  );
};

export { Assignment5 };
