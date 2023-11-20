/*

4. Fetch a large dataset from an API and implement pagination.
Display a limited number of items per page and provide navigation controls to load more pages of data.

*/
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "username", headerName: "UserName", width: 130 },
  { field: "email", headerName: "Email", width: 300 },
];

const QuestionFour = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [data]);

  return (
    <>
      <h4>
        4.Fetch a large dataset from an API and implement pagination. Display a
        limited number of items per page and provide navigation controls to load
        more pages of data.
      </h4>
      <h1>Data from API</h1>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default QuestionFour;
