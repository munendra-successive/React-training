import React from "react";
import "./App.css";
import Counter from "./assignment-2/Question-1/Counter";
import PersonForm from "./assignment-2/Question-2/PersonForm";
import ToDoList from "./assignment-2/Question-3/ToDoList";
import RandomNumberGenerator from "./assignment-2/Question-4/RandomNumberGenerator";
import CounterWithStep from "./assignment-2/Question-5/CounterWithStep";
import Clock from "./assignment-2/Question-6/Clock";
import Notification from "./assignment-2/Question-7/Notification";
import SlideShow from "./assignment-2/Question-8/SlideShow";
import Theme from "./assignment-2/Question-9/Theme";
import QuestionNine from "./assignment-2/Question-9/QuestionNine";
import Language from "./assignment-2/Question-10/Language";
import QuestionTen from "./assignment-2/Question-10/QuestionTen";
import Shopping from "./assignment-2/Question-11/Shopping";
import ShoppingCart from "./assignment-2/Question-11/ShoppingCart";
import Voting from "./assignment-2/Question-12/Voting";
import Parent from "./assignment-2/Question-13/Parent";
import List from "./assignment-2/Question-14/List";
import StudentList from "./assignment-2/Question-15/StudentList";
import EmployeeSalary from "./assignment-2/Question-16/EmployeeSalary";
import CopyButton from "./assignment-2/Question-17/CopyButton";
import UserPrefence from "./assignment-2/Question-18/UserPrefence";
import CountDownTimer from "./assignment-2/Question-19/CountDownTimer";

function App() {
  return (
    <>
      <div id="question">
        <Counter />
      </div>
      <div id="question">
        <PersonForm />
      </div>
      <div id="question">
        <ToDoList />
      </div>
      <div id="question">
        <RandomNumberGenerator />
      </div>
      <div id="question">
        <CounterWithStep />
      </div>
      <div id="question">
        <Clock />
      </div>
      <div id="question">
        <Notification />
      </div>
      <div id="question">
        <SlideShow />
      </div>
      <div id="question">
        <Theme>
          <QuestionNine />
        </Theme>
      </div>
      <div id="question">
        <Language>
          <QuestionTen />
        </Language>
      </div>
      <div id="question">
        <Shopping>
          <ShoppingCart />
        </Shopping>
      </div>
      <div id="question">
        <Voting />
      </div>
      <div id="question">
        <Parent />
      </div>
      <div id="question">
        <List />
      </div>
      <div id="question">
        <StudentList />
      </div>
      <div id="question">
        <EmployeeSalary />
      </div>
      <div id="question">
        <CopyButton />
      </div>
      <div id="question">
        <UserPrefence />
      </div>
      <div id="question">
        <CountDownTimer />
      </div>
    </>
  );
}

export default App;
