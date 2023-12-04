import "./App.css";

import {
  QuestionOne,
  Counter,
  LoginForm,
  UserProfile,
  ModalComponent,
} from "./assignment-6";

const userDetails = {
  name: "Monu",
  email: "monu@gmail.com",
  phone: "9867463289",
};

function App() {
  return (
    <>
      <div id="question">
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
      </div>
    </>
  );
}

export default App;
