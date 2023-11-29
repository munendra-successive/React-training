/*

1.Create a React component that fetches data from a public API (e.g., JSONPlaceholder) 
and displays it on the page. Use the fetch function to make the request.


*/

import { useEffect, useState } from "react";

const QuestionOne = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <>
      <h4>
        1.Create a React component that fetches data from a public API (e.g.,
        JSONPlaceholder) and displays it on the page. Use the fetch function to
        make the request.
      </h4>
      <h1>Data from API</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data?.map((item, index) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default QuestionOne;
