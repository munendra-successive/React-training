import { useState, useCallback } from "react";

/*

14.create a component that displays a list of tasks.
Each task has a "Complete" button.
Implement a feature where clicking the "Complete" button marks the task as completed.
Use the useCallback hook to create dynamic callback functions for each task.
Ensure that clicking the "Complete" button for one task doesn't trigger unnecessary re-renders for other tasks.

*/
const arr = [
  {
    id: 1,
    task: "task1",
    status: "Incomplete",
  },
  {
    id: 2,
    task: "task2",
    status: "Incomplete",
  },
];
const List = () => {
  const [status, setStatus] = useState(arr);

  const Mark = useCallback((id) => {
    setStatus(
      arr.map((item) => {
        if (item.id === id) {
          item.status = "Complete";
        }
        return item;
      })
    );
  }, arr);

  return (
    <div>
      <h4>
        14.create a component that displays a list of tasks. Each task has a
        "Complete" button. Implement a feature where clicking the "Complete"
        button marks the task as completed. Use the useCallback hook to create
        dynamic callback functions for each task. Ensure that clicking the
        "Complete" button for one task doesn't trigger unnecessary re-renders
        for other tasks.
      </h4>
      <ol>
        {status.map((item) => (
          <>
            <li>{item.task}</li>
            <button onClick={() => Mark(item.id)}>Status: {item.status}</button>
          </>
        ))}
      </ol>
    </div>
  );
};

export default List;
