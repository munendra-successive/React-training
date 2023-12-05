import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h4>
        3.Create a React component named Counter that displays a number and two
        buttons, one for incrementing the number and another for decrementing
        it. Write tests using React Testing Library to ensure that the component
        behaves as expected.
      </h4>
      <h4>Counter: {count}</h4>
      <button data-testid="inc" onClick={handleIncrement}>
        Increment
      </button>
      <button data-testid="dec" onClick={handleDecrement}>
        Decrement
      </button>
    </>
  );
};
export default Counter;
