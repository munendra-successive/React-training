/*

5.Create a functional component called CounterWithStep.
Use the useState hook to manage a state variable named count initialized to 0.
Render the current value of count in a <p> element.
Add two buttons, one for incrementing the count and another for decrementing it.
Add an input field where the user can specify a step value.
Update the count using the specified step value when the buttons are clicked.

*/

import { useState } from "react";
const CounterWithStep = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleIncrement() {
    setCount(count + Number(step));
  }

  function handleDecrement() {
    setCount(count - Number(step));
  }

  return (
    <div>
      <h4>
        5.Create a functional component called CounterWithStep. Use the useState
        hook to manage a state variable named count initialized to 0. Render the
        current value of count in a element. Add two buttons, one for
        incrementing the count and another for decrementing it. Add an input
        field where the user can specify a step value. Update the count using
        the specified step value when the buttons are clicked.
      </h4>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <div>
        <label>StepValue:</label>
        <input
          type="text"
          value={step}
          onChange={(e) => setStep(e.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default CounterWithStep;
