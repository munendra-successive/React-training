/* 

2.Create a functional component called PersonForm.
Use the useState hook to manage three state variables: firstName, lastName, and age, all initialized to empty strings.
Render three input fields for the user to enter their first name, last name, and age.
As the user types, update the respective state variables.
Display the entered information below the input fields.

*/
import { useState } from "react";
const PersonForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  function handleFirstName(e) {
    setFirstName(e.target.value);
  }
  function handleLastName(e) {
    setLastName(e.target.value);
  }
  function handleAge(e) {
    setAge(e.target.value);
  }
  return (
    <div>
      <h4>
        2.Create a functional component called PersonForm. Use the useState hook
        to manage three state variables: firstName, lastName, and age, all
        initialized to empty strings. Render three input fields for the user to
        enter their first name, last name, and age. As the user types, update
        the respective state variables. Display the entered information below
        the input fields.
      </h4>
      <div>
        <label>First Name:</label>
        <input type="text" value={firstName} onChange={handleFirstName} />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" value={lastName} onChange={handleLastName} />
      </div>
      <div>
        <label>Age:</label>
        <input type="text" value={age} onChange={handleAge} />
      </div>

      <p>firstName: {firstName}</p>
      <p>lastName: {lastName}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default PersonForm;
