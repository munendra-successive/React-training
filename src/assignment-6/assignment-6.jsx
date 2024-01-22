import { Route, Routes, Link } from "react-router-dom";

import {
  QuestionOne,
  Counter,
  LoginForm,
  UserProfile,
  ModalComponent,
} from "./index";

const userDetails = {
  name: "Monu",
  email: "monu@gmail.com",
  phone: "9867463289",
};

const Assignment6 = () => {
  return (
    <>
      <nav className="navbar-1">
        <Link to="/assignment6/">Question1</Link>
        <Link to="/assignment6/question3">Question3</Link>
        <Link to="/assignment6/question4">Question4</Link>
        <Link to="/assignment6/question5">Question5</Link>
        <Link to="/assignment6/question6">Question6</Link>
      </nav>
      <div id="question">
        <Routes>
          <Route path="/" element={<QuestionOne />} />
          <Route path="/question3" element={<Counter />} />
          <Route path="/question4" element={<LoginForm />} />

          <Route path="/question5" element={<UserProfile {...userDetails} />} />

          <Route path="/question6" element={<ModalComponent />} />
        </Routes>
      </div>
    </>
  );
};

export { Assignment6 };
