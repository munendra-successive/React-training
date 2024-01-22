import { useState } from "react";
/*

4.Create a functional component named Counter that displays a count and two buttons: "Increment" and "Decrement".
Implement event handlers for the "Increment" and "Decrement" buttons to increase and decrease the count.
Display the updated count on the screen.

*/

const Counter = () => {
  const [count, setCount] = useState(0);
  function HandlerIncrement() {
    setCount(count + 1);
  }
  function HandlerDecrement() {
    if (count > 0) setCount(count - 1);
  }
  return (
    <>
      <p>
        4.Create a functional component named Counter that displays a count and
        two buttons: "Increment" and "Decrement". Implement event handlers for
        the "Increment" and "Decrement" buttons to increase and decrease the
        count. Display the updated count on the screen
      </p>
      <button onClick={HandlerIncrement}>Increment</button>
      <p>{count}</p>
      <button onClick={HandlerDecrement}>Decrement</button>
    </>
  );
};

export default Counter;
