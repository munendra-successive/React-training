import { Route, Routes, Link } from "react-router-dom";

import {
  Counter,
  PersonForm,
  ToDoList,
  RandomNumberGenerator,
  CounterWithStep,
  Clock,
  Notification,
  SlideShow,
  QuestionNine,
  ThemeProvider,
  LanguageProvider,
  QuestionTen,
  ShopProvider,
  ShoppingCart,
  Voting,
  Parent,
  List,
  StudentList,
  EmployeeSalary,
  CopyButton,
  UseLocal,
  CountDownTimer,
} from "./index";

const Assignment2 = () => {
  return (
    <>
      <nav class="navbar-1">
        <Link to="/assignment2/">Question1</Link>
        <Link to="/assignment2/question2">Question2</Link>
        <Link to="/assignment2/question3">Question3</Link>
        <Link to="/assignment2/question4">Question4</Link>
        <Link to="/assignment2/question5">Question5</Link>
        <Link to="/assignment2/question6">Question6</Link>
        <Link to="/assignment2/question7">Question7</Link>
        <Link to="/assignment2/question8">Question8</Link>
        <Link to="/assignment2/question9">Question9</Link>
        <Link to="/assignment2/question10">Question10</Link>
        <Link to="/assignment2/question11">Question11</Link>
        <Link to="/assignment2/question12">Question12</Link>
        <Link to="/assignment2/question13">Question13</Link>
        <Link to="/assignment2/question14">Question14</Link>
        <Link to="/assignment2/question15">Question15</Link>
        <Link to="/assignment2/question16">Question16</Link>
        <Link to="/assignment2/question17">Question17</Link>
        <Link to="/assignment2/question18">Question18</Link>
        <Link to="/assignment2/question19">Question19</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/question2" element={<PersonForm />} />
        <Route path="/question3" element={<ToDoList />} />
        <Route path="/question4" element={<RandomNumberGenerator />} />
        <Route path="/question5" element={<CounterWithStep />} />
        <Route path="/question6" element={<Clock />} />
        <Route path="/question7" element={<Notification />} />
        <Route path="/question8" element={<SlideShow />} />

        <Route
          path="/question9"
          element={
            <ThemeProvider>
              <QuestionNine />
            </ThemeProvider>
          }
        />
        <Route
          path="/question10"
          element={
            <LanguageProvider>
              <QuestionTen />
            </LanguageProvider>
          }
        />

        <Route
          path="/question11"
          element={
            <ShopProvider>
              <ShoppingCart />
            </ShopProvider>
          }
        />
        <Route path="/question12" element={<Voting />} />
        <Route path="/question13" element={<Parent />} />
        <Route path="/question14" element={<List />} />
        <Route path="/question15" element={<StudentList />} />
        <Route path="/question16" element={<EmployeeSalary />} />
        <Route path="/question17" element={<CopyButton />} />
        <Route path="/question18" element={<UseLocal />} />
        <Route path="/question19" element={<CountDownTimer />} />
      </Routes>
    </>
  );
};

export { Assignment2 };
