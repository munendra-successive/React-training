import { useState, useEffect } from "react";

function useTimer(duration) {
  const [timer, setTimer] = useState(duration);
  const [isActive, setActive] = useState(false);

  const startTimer = () => {
    setActive(true);
  };

  const pauseTimer = () => {
    setActive(false);
  };

  const reset = () => {
    setActive(false);
    setTimer(duration);
  };

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 0) {
            clearInterval(interval);
            setActive(false);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, duration]);

  return {
    timer,
    isActive,
    startTimer,
    pauseTimer,
    reset,
  };
}
export default useTimer;
