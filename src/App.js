import "./App.css";
import { Assignment1 } from "./assignment-1/assignment-1";
import { Assignment2 } from "./assignment-2/assignment-2";
import { Assignment3 } from "./assignment-3/assignment-3";
import { Assignment4 } from "./assignment-4/assignment-4";
// import {
//   QuestionOne,
//   Counter,
//   LoginForm,
//   UserProfile,
//   ModalComponent,
// } from "./assignment-6";

// const userDetails = {
//   name: "Monu",
//   email: "monu@gmail.com",
//   phone: "9867463289",
// };

function App() {
  return (
    <>
      {/* <Assignment1 /> */}

      {/* <Assignment2 /> */}
      {/* <Assignment3 /> */}
      <Assignment4 />

      {/* <div id="question">
        <QuestionOne />
      </div>

      <div id="question">
        <Counter />
      </div>
      <div id="question">
        <LoginForm />
      </div>
      <div id="question">
        <UserProfile {...userDetails} />
      </div>
      <div id="question">
        <ModalComponent />
      </div> */}
    </>
  );
}

export default App;
