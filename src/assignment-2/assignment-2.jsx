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
  useClipboard,
  useLocalStorage,
  UseLocal,
  useTimer,
  CountDownTimer,
} from "./index";

const Assignment2 = () => {
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
        <QuestionNine />
      </div>
      <div id="question">
        <ThemeProvider />
      </div>
      <div id="question">
        <LanguageProvider />
      </div>
      <div id="question">
        <QuestionTen />
      </div>
      <div id="question">
        < />
      </div>
    </>
  );
};

export { Assignment2 };
