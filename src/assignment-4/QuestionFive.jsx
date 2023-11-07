import { useState } from "react";

/*

5.Construct a select dropdown menu with multiple options. Control the selected option using state. 
When an option is selected, display a message showing the selected value.

*/
const QuestionFive = () => {
  const [name, setName] = useState("");
  return (
    <>
      <label>Choose a City:</label>
      <select
        name="city"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      >
        <option value="">Select City</option>
        <option value="Nodia">Noida</option>
        <option value="Delhi">Delhi</option>
        <option value="Mathura">Mathura</option>
        <option value="Ghaziabad">Ghaziabad</option>
      </select>
      <h4>You selected: {name}</h4>
    </>
  );
};
export default QuestionFive;
