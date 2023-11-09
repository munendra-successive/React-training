import React from "react";
import { useState } from "react";
/*

3.Create a functional component called ToDoList.
Use the useState hook to manage a state variable named todos, initialized as an empty array.
Render a list of todos using the map function.
Each todo should have a checkbox to mark it as completed and a delete button to remove it from the list.
Use the useState hook to manage the state of each todo item (completed or not).

*/

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewToDo] = useState("");

  const addToDo = () => {
    if(newTodo)
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewToDo("");
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <>
      <h4>
        3.Create a functional component called ToDoList. Use the useState hook
        to manage a state variable named todos, initialized as an empty array.
        Render a list of todos using the map function. Each todo should have a
        checkbox to mark it as completed and a delete button to remove it from
        the list. Use the useState hook to manage the state of each todo item
        (completed or not).
      </h4>
      <h1>TODO List</h1>
      <input
        type="text"
        onChange={(e) => {
          setNewToDo(e.target.value);
        }}
        value={newTodo}
      />
      <button onClick={addToDo}>ADD</button>
      <ul>
        {todos.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todos.completed}
              onChange={() => toggleTodo(index)}
            />
            {task.text}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
