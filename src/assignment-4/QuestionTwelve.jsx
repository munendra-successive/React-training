/*

12.Build a data table using Material-UI's Table component.
Populate the table with sample data and add features like sorting and pagination.

*/

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import data from "./mockData";

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



const QuestionTwelve = () => {
  return (
    <>
      <h4>
        12.Build a data table using Material-UI's Table component. Populate the
        table with sample data and add features like sorting and pagination.
      </h4>
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

export default QuestionTwelve;
