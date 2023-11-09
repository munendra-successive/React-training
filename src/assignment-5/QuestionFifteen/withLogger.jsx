import React, { useEffect, useState } from "react";

const withLogger = (ShowLogs) => (props) => {
  const [count, setCount] = useState(0);
  const [state, setState] = useState(false);
  useEffect(() => {
    console.log("Component Mounted");
    return () => {
      console.log("Component UnMounted");
    };
  }, [state]);

  useEffect(() => {
    console.log("Component Updated");
  }, [count]);

  return <ShowLogs value={{ setCount, state, setState, count }} />;
};

export default withLogger;
