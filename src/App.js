import "./App.css";
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
} from "./assignment-4";

function App() {
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
        <QuestionEight />
      </div>
      <div>
        <QuestionNine />
      </div>
      <div id="question">
        <QuestionTen />
      </div>
      <div id="question">
        <QuestionEleven />
      </div>
      <div id="question">
        <QuestionTwelve />
      </div>
      <div id="question">
        <QuestionThirteen />
      </div>
      <div id="question">
        <QuestionFourTeen />
      </div>
    </>
  );
}

export default App;
