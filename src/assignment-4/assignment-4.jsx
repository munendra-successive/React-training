import { Route, Routes, Link } from "react-router-dom";
import {
  QuestionOne,
  QuestionTwo,
  QuestionThree,
  QuestionFour,
  QuestionFive,
  QuestionSix,
  QuestionSeven,
  QuestionEight,
  QuestionNine,
  QuestionTen,
  QuestionEleven,
  QuestionTwelve,
  QuestionThirteen,
  QuestionFourTeen,
} from "./index";

const Assignment4 = () => {
  return (
    <>
      <nav>
        <Link to="/assignment4/">Question1</Link>
        <Link to="/assignment4/question2">Question2</Link>
        <Link to="/assignment4/question3">Question3</Link>
        <Link to="/assignment4/question4">Question4</Link>
        <Link to="/assignment4/question5">Question5</Link>
        <Link to="/assignment4/question6">Question6</Link>
        <Link to="/assignment4/question7">Question7</Link>
        <Link to="/assignment4/question8">Question8</Link>
        <Link to="/assignment4/question9">Question9</Link>
        <Link to="/assignment4/question10">Question10</Link>
        <Link to="/assignment4/question11">Question11</Link>
        <Link to="/assignment4/question12">Question12</Link>
        <Link to="/assignment4/question13">Question13</Link>
        <Link to="/assignment4/question14">Question14</Link>
      </nav>
      <Routes>
        <Route path="/" element={<QuestionOne />} />

        <Route path="/question2" element={<QuestionTwo />} />

        <Route path="/question3" element={<QuestionThree />} />

        <Route path="/question4" element={<QuestionFour />} />

        <Route path="/question5" element={<QuestionFive />} />

        <Route path="/question6" element={<QuestionSix />} />

        <Route path="/question7" element={<QuestionSeven />} />
        <Route path="/question8" element={<QuestionEight />} />
        <Route path="/question9" element={<QuestionNine />} />
        <Route path="/question10" element={<QuestionTen />} />
        <Route path="/question11" element={<QuestionEleven />} />
        <Route path="/question12" element={<QuestionTwelve />} />
        <Route path="/question13" element={<QuestionThirteen />} />
        <Route path="/question14" element={<QuestionFourTeen />} />
      </Routes>
    </>
  );
};

export { Assignment4 };
