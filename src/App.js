import React from "react";
import "./App.css";
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
} from "./assignment-2";

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
        <ThemeProvider>
          <QuestionNine />
        </ThemeProvider>
      </div>
      <div id="question">
        <LanguageProvider>
          <QuestionTen />
        </LanguageProvider>
      </div>
      <div id="question">
        <ShopProvider>
          <ShoppingCart />
        </ShopProvider>
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
        <UseLocal />
      </div>
      <div id="question">
        <CountDownTimer />
      </div>
    </>
  );
}
export default App;
