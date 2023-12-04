import axios from "axios";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </>
  );
};
export default QuestionFive;
