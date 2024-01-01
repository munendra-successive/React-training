/*
3.Create a functional component named Weather that accepts a prop called temperature (a number).
Display a message like "It's sunny today!" if the temperature is above 25°C and "It's cold today!" if the temperature is below 10°C.
Import and render the Weather component in the App component with different temperature values. */

const Weather = ({ temperature }) => {
  let msg = "Normal Day";
  if (temperature > 25) {
    msg = "It's sunny today!";
  } else if (temperature < 10) {
    msg = "It's cold today!";
  }
  return (
    <>
      <p>
        3.Create a functional component named Weather that accepts a prop called
        temperature (a number). Display a message like "It's sunny today!" if
        the temperature is above 25°C and "It's cold today!" if the temperature
        is below 10°C. Import and render the Weather component in the App
        component with different temperature values.
      </p>
      <h1>{msg}</h1>
    </>
  );
};

export default Weather;
