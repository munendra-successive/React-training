/*

15.Create a functional component named StudentList that displays a list of student names..
Define an array of student names as a constant within the component.
Use the useMemo hook to memorize the list of student names.
Render the list of student names on the screen.
Include a button that, when clicked, appends a new student name to the list.

*/

import { useMemo, useState } from "react";
const students = ["Mohit", "Monu"];
const StudentList = () => {
  const [names, setNames] = useState(students);
  const [newName, setNewName] = useState("");
  const changedNames=useMemo(() => names, [names]);
  const addStudent = () => {
    if(newName)
    setNames([...names, newName]);
  };
  return (
    <>
      <h4>
        15.Create a functional component named StudentList that displays a list
        of student names.. Define an array of student names as a constant within
        the component. Use the useMemo hook to memoize the list of student
        names. Render the list of student names on the screen. Include a button
        that, when clicked, appends a new student name to the list.
      </h4>
      <ul>
        {changedNames.map((student) => (
          <li>{student}</li>
        ))}
      </ul>
      <input
        onChange={(e) => setNewName(e.target.value)}
        value={newName}
      ></input>
      <button onClick={addStudent}>Add Student</button>
    </>
  );
};

export default StudentList;
