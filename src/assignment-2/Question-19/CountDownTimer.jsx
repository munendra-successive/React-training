import useTimer from './useTimer'

function CountDownTimer() {

  const { timer, isActive, startTimer, pauseTimer, reset } =
    useTimer(60);

  return (
    <div>
    <h1>CountDownTimer</h1>
      <h4>Time Left: {timer} seconds</h4>
      {isActive ? (
        <button onClick={pauseTimer}>Pause</button>
      ) : (
        <button onClick={startTimer}>Start</button>
      )}
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CountDownTimer;