import { useQuery } from "@apollo/client";
import { GET_ALL_FILMS } from "./Query";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "eyecolor", headerName: "EyeColor", width: 130 },
  {
    field: "birthyear",
    headerName: "BirthYear",
    width: 90,
  },
];
const ShowData = () => {
  const [dataReceived, setReceivedData] = useState([]);
  const { data, loading, error } = useQuery(GET_ALL_FILMS, {
    variables: {
      after: "1",
      before: "10",
    },
  });
  useEffect(() => {
    setReceivedData(data?.allFilms?.films[0]?.characterConnection.characters);
  }, [data]);
  const tableData = dataReceived?.map((item, index) => ({
    id: index,
    birthyear: item.birthYear,
    eyecolor: item.eyeColor,
    name: item.name,
  }));
  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={tableData}
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
export default ShowData;
