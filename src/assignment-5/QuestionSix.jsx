/*

6.Modify the previous assignment to implement error handling using Axios.
Display an error message if the request fails and provide a way for the user to retry the request.
*/

import axios from "axios";
import { useEffect, useState } from "react";

const QuestionSix = () => {
  const [data, setData] = useState();
  const [isRetry, setRetry] = useState(true);
  const [isError, setError] = useState();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [isRetry]);
  return (
    <>
      <h4>
        6.Modify the previous assignment to implement error handling using
        Axios. Display an error message if the request fails and provide a way
        for the user to retry the request.
      </h4>
      <h1>Data from API</h1>
      {isError ? (
        <>
          <p>Error Occured</p>
          <button
            onClick={() => {
              setRetry(!isRetry);
            }}
          >
            Retry
          </button>
        </>
      ) : (
        <table>
          <tr>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
          </tr>
          {data &&
            data?.map((item, index) => (
              <tr>
                <td key={index}>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
              </tr>
            ))}
        </table>
      )}
    </>
  );
};

export default QuestionSix;
