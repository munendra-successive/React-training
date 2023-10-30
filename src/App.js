import React from "react";
import Greeting from "./assignment-1/Greeting";
import UserCard from "./assignment-1/UserCard";
import Weather from "./assignment-1/Weather";
import Counter from "./assignment-1/Counter";
import TaskList from "./assignment-1/TaskList";
import Button from "./assignment-1/Button";

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