import { useState } from "react";
import ThreeComp from "./ThreeComp";
/*

3.Create a component with controlled input field and a button. 
When the user enters a specific value into the input (e.g., "show"), 
a new component should be rendered below the input, displaying a message. Otherwise, nothing should be displayed.

*/

const QuestionThree = () => {
  const [data, setData] = useState("");
  const [ishow, setShow] = useState("");
  const handleClick = () => {
    if (data === "show") {
      setShow(true);
    }
  };
  return (
    <>
      <h4>
        3.Create a component with controlled input field and a button. When the
        user enters a specific value into the input (e.g., "show"), a new
        component should be rendered below the input, displaying a message.
        Otherwise, nothing should be displayed.
      </h4>
      <input
        onChange={(e) => {
          setData(e.target.value);
        }}
        type="text"
        placeholder="Enter Specific Text"
        value={data}
      />
      <button onClick={handleClick}>Click</button>
      {ishow ? <ThreeComp /> : <></>}
    </>
  );
};

export default QuestionThree;
