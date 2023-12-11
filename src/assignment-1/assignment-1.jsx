import Button from "./Button";
import Counter from "./Counter";
import Greeting from "./Greeting";
import TaskList from "./TaskList";
import UserCard from "./UserCard";
import Weather from "./Weather";

const Assignment1 = () => {
  return (
    <>
      <div id="question">
        <Greeting />
      </div>
      <div id="question">
        <Button />
      </div>
      <div id="question">
        <Counter />
      </div>
      <div id="question">
        <Weather />
      </div>

      {/* <TaskList /> */}
      {/* <UserCard /> */}
    </>
  );
};

export default Assignment1;
