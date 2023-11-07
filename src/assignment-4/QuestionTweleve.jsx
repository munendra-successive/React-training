/*

12.Build a data table using Material-UI's Table component.
Populate the table with sample data and add features like sorting and pagination.

*/

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const data = [
  { id: 1, lastName: "Kushwaha", firstName: "Munendra", age: 23 },
  { id: 2, lastName: "Kumar", firstName: "Monu", age: 21 },
  { id: 3, lastName: "Maurya", firstName: "Monu", age: 25 },
  { id: 4, lastName: "Varshney", firstName: "Rohit", age: 16 },
  { id: 5, lastName: "Kushwaha", firstName: "Ayaansh", age: null },
  { id: 6, lastName: null, firstName: "Janavi", age: 24 },
  { id: 7, lastName: "Mishra", firstName: "Anushka", age: 14 },
  { id: 8, lastName: "Tyagi", firstName: "Lavi", age: 6 },
  { id: 9, lastName: "Agarwal", firstName: "Ronit", age: 65 },
];

const QuestionTweleve = () => {
  return (
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
  );
};

export default QuestionTweleve;
