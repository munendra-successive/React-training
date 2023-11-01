/*

1.Create a functional component called Counter.
Inside the component, use the useState hook to manage a state variable named count initialized to 0.
Render the current value of count in a <p> element.
Add two buttons, one for incrementing the count and another for decrementing it.
When the user clicks on the buttons, update the count state accordingly.


*/

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function incrementHandler() {
    setCount(count + 1);
  }
  function decrementHandler() {
    if (count > 0) setCount(count - 1);
  }

  return (
    <>
      <h4>
        1.Create a functional component called Counter. Inside the component,
        use the useState hook to manage a state variable named count initialized
        to 0. Render the current value of count in a p element. Add two buttons,
        one for incrementing the count and another for decrementing it. When the
        user clicks on the buttons, update the count state accordingly.
      </h4>
      <p>{count}</p>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </>
  );
};

export default Counter;
