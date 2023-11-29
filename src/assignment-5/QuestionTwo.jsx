/*

2.Implement error handling for the fetch request. 
Display an error message if the request fails and provide a way for the user to retry the request.

*/

import { useEffect, useState } from "react";

const QuestionTwo = () => {
  const [data, setData] = useState([]);
  const [isError, setError] = useState(null);
  const [retry, setRetry] = useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [retry]);

  return (
    <>
      <h4>
        2.Implement error handling for the fetch request. Display an error
        message if the request fails and provide a way for the user to retry the
        request.
      </h4>
      <h1>Data from API</h1>
      {!isError ? (
        data && (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      ) : (
        <p>
          Error Occured{" "}
          <button
            onClick={() => {
              setRetry(!retry);
            }}
          >
            Retry
          </button>
        </p>
      )}
    </>
  );
};

export default QuestionTwo;
