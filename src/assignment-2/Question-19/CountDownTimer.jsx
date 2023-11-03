import useTimer from "./useTimer";
/*

19.Build a custom hook named useTimer for creating countdown timers.
Create a useTimer hook that takes a countdown duration as a parameter.
Use setInterval to decrement the timer at regular intervals.
Return the current timer value and methods to start, pause, and reset the timer.
Develop a component that utilizes the useTimer hook to display and control a countdown.


*/

const CountDownTimer = () => {
  const [timerValue, startTimer, pauseTimer, reset] = useTimer(60);

  return (
    <>
      <h4>
        19.Build a custom hook named useTimer for creating countdown timers.
        Create a useTimer hook that takes a countdown duration as a parameter.
        Use setInterval to decrement the timer at regular intervals. Return the
        current timer value and methods to start, pause, and reset the timer.
        Develop a component that utilizes the useTimer hook to display and
        control a countdown.
      </h4>
      <h2>CountDownTimer</h2>
      <p>Time Left: {timerValue} seconds</p>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={startTimer}>Start</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default CountDownTimer;
