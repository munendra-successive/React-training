import { useState } from "react";

/*

1.Create a React component with an input field. 
Implement it as a controlled component where the input value is controlled by the component's state.
 When the user types into the input field, the component's state should update accordingly.

*/

const QuestionOne = () => {
  const [name, setName] = useState("");
  return (
    <>
      <h1>My name is {name}</h1>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        name="name"
        value={name}
        placeholder="Enter youe name"
      />
    </>
  );
};

export default QuestionOne;
