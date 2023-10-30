/*

5.Create a functional component named TaskList that accepts an array of task names as a prop.
Use the map function to render each task name as a list item.
Import and render the TaskList component in the App component with an array of tasks.

*/

const TaskList = ({ tasks }) => {
    return (
      <div>
        <p>
          5.Create a functional component named TaskList that accepts an array of
          task names as a prop. Use the map function to render each task name as a
          list item. Import and render the TaskList component in the App component
          with an array of tasks.
        </p>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default TaskList;