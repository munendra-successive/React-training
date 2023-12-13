import Button from "./Button";
import Counter from "./Counter";
import Greeting from "./Greeting";
import TaskList from "./TaskList";
import UserCard from "./UserCard";
import Weather from "./Weather";
import { Route, Routes, Link } from "react-router-dom";

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
      <nav>
        <Link to="/assignment1/">Question1</Link>
        <Link to="/assignment1/question2">Question2</Link>
        <Link to="/assignment1/question3">Question3</Link>
        <Link to="/assignment1/question4">Question4</Link>
        <Link to="/assignment1/question5">Question5</Link>
        <Link to="/assignment1/question6">Question6</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Greeting />} />

        <Route path="/question2" element={<UserCard users={users} />} />

        <Route path="/question3" element={<Weather temperature={34} />} />

        <Route path="/question4" element={<Counter />} />

        <Route path="/question5" element={<TaskList tasks={tasks} />} />

        <Route
          path="/question6"
          element={<Button text="Button" color="Yellow" />}
        />
      </Routes>
    </>
  );
};

export { Assignment1 };
