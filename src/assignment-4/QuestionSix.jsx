/*

6.Build a simple todo list component with a text input for adding new tasks and a list to display them.
Use controlled components to handle the input and update the list of tasks.

*/

import React, { useState } from "react";
const QuestionSix = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const handleClick = () => {
    if (taskName)
      setTasks([
        ...tasks,
        { text: taskName, completed: false, date: new Date().getDate },
      ]);
    setTaskName("");
  };
  return (
    <>
      <h4>
        6.Build a simple todo list component with a text input for adding new
        tasks and a list to display them. Use controlled components to handle
        the input and update the list of tasks.
      </h4>
      <input
        type="text"
        onChange={(event) => {
          setTaskName(event.target.value);
        }}
        value={taskName}
        placeholder="Enter a Task"
      />
      <button onClick={handleClick}>Add in Todo</button>
      <ol>
        <h4>ToDo List</h4>

        {tasks.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
      </ol>
    </>
  );
};
export default QuestionSix;
