import React from "react";
import Greeting from "./component/Greeting";
import UserCard from "./component/UserCard";
import Weather from "./component/Weather";
import Counter from "./component/Counter";
import TaskList from "./component/TaskList";
import Button from "./component/Button";

function App() {
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
      <Greeting />

      <UserCard users={users} />

      <Weather temperature={34} />

      <Counter />

      <TaskList tasks={tasks} />

      <Button text="Button" color="Yellow" />
    </>
  );
}

export default App;