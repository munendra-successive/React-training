/*

4.Create a functional component called RandomNumberGenerator.
Use the useState hook to manage a state variable named randomNumber, initialized to a random number between 1 and 100.
Render the current value of randomNumber.
Add a button that generates a new random number and updates the state when clicked.

*/
import { useState } from "react";

const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  function Handler() {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  }
  return (
    <>
      <h4>
        4.Create a functional component called RandomNumberGenerator. Use the
        useState hook to manage a state variable named randomNumber, initialized
        to a random number between 1 and 100. Render the current value of
        randomNumber. Add a button that generates a new random number and
        updates the state when clicked.
      </h4>
      <div>
        <p>Current value : {randomNumber}</p>
        <button onClick={Handler}>Generate</button>
      </div>
    </>
  );
};

export default RandomNumberGenerator;
