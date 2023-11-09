import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
/*

5.Create a React component that fetches data from a public
API (e.g., JSONPlaceholder) using Axios and displays it on the page.

*/

const QuestionFive = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <>
      <h4>
        5.Create a React component that fetches data from a public API (e.g.,
        JSONPlaceholder) using Axios and displays it on the page.
      </h4>
      {data ? (
        data && (
          <table>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
            {data?.map((item, index) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </table>
        )
      ) : (
        <div style={{ border: "2px solid green", width: "100px" }}>Loading</div>
      )}
    </>
  );
};
export default QuestionFive;
