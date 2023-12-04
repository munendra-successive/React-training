import { React, useEffect, useState } from "react";

const withDataFetching = (DisplayData) => {
  return function DataFetch() {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((response) => {
          setData(response);
        });
    }, []);
    return <DisplayData data={data} />;
  };
};
export default withDataFetching;
