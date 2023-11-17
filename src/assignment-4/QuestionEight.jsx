/*

Create a temperature converter component with two input fields: one for Celsius and one for Fahrenheit. 
Implement controlled components for both inputs.
When the user enters a value in one input, the other input should update with the converted temperature.

*/

import { useState } from "react";

const QuestionEight = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    const converted = (value * 9) / 5 + 32;
    setFahrenheit(converted);
    setCelsius(value);
  };
  const handleFahreinheitChange = (e) => {
    const value = e.target.value;
    const converted = (value -32) *5/9
    setCelsius(converted)
    setFahrenheit(value)
    
  };
  return (
    <>
      <h4>
        8.Create a temperature converter component with two input fields: one
        for Celsius and one for Fahrenheit. Implement controlled components for
        both inputs. When the user enters a value in one input, the other input
        should update with the converted temperature.
      </h4>
      <div>
        <label>Enter temperature in Celsius</label>
        <input
          type="text"
          placeholder="Celsius"
          name="celsius"
          value={celsius}
          onChange={handleCelsiusChange}
        />
      </div>
      <div>
        <label>Temperature in Fahreinheit</label>
        <input
          type="text"
          placeholder="Fahreinheit"
          name="fahreinheit"
          value={fahrenheit}
          onChange={handleFahreinheitChange}
        />
      </div>
    </>
  );
};

export default QuestionEight;
