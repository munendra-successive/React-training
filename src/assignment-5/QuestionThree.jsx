/*

3. Add a loading indicator (e.g., a spinner) to the component.
Display it while the data is being fetched and hide it once the data is loaded.

*/
import { useState, useEffect } from "react";
const QuestionThree = () => {
  const [data, setData] = useState(null);
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
        3.Add a loading indicator (e.g., a spinner) to the component. Display it
        while the data is being fetched and hide it once the data is loaded.
      </h4>
      <h1>Data from API</h1>
      {data ? (
        data && (
          <table>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
            {data?.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </table>
        )
      ) : (
        <div style={{ border: "2px solid green", width: "100px" }}>Loading...</div>
      )}
    </>
  );
};

export default QuestionThree;
