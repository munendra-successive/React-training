import Button from "./Button";
import Counter from "./Counter";
import Greeting from "./Greeting";
import TaskList from "./TaskList";
import UserCard from "./UserCard";
import Weather from "./Weather";

const Assignment1 = () => {
  const users = [
    {
      name: "Munendra",
      email: "munendra@gmail.com",
      avatarUrl:
        "https://fastly.picsum.photos/id/494/200/300.jpg?hmac=YdLwRbrTAzFXaAJcsj854mgNuS5jqYM8bcjCzSrSDRM",
    },
    {
      name: "Monu",
      email: "monu@gmail.com",
      avatarUrl:
        "https://fastly.picsum.photos/id/938/200/300.jpg?hmac=MVXKrDXBUPK5fv_Ev3FTdCFeYf9rvJE2Tz9xynjeelM",
    },
  ];
  const tasks = ["task 1", "task 2", "task 3", "task 4"];
  return (
    <>
      <div id="question">
        <Greeting />
      </div>

      <div id="question">
        <UserCard users={users} />
      </div>

      <div id="question">
        <Weather temperature={34} />
      </div>

      <div id="question">
        <Counter />
      </div>

      <div id="question">
        <TaskList tasks={tasks} />
      </div>

      <div id="question">
        <Button text="Button" color="Yellow" />
      </div>
    </>
  );
};

export default Assignment1;
