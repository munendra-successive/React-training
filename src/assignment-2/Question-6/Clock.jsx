import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const timeClr = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(timeClr);
    };
  }, []);

  return (
    <>
      <h4>
        6.Create a functional component called Clock. Use the useState hook to
        manage a state variable named time initialized to the current time. Use
        the useEffect hook to update the time state every second to display the
        current time. Render the current time in a p element. When the component
        unmounts, clear the interval to stop updating the time.
      </h4>
      <div>{time}</div>
    </>
  );
};

export default Clock;
