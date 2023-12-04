import { useQuery } from "@apollo/client";
import { GET_ALL_FILMS } from "./Query";

const ShowData = () => {
  const { data, loading, error } = useQuery(GET_ALL_FILMS, {
    variables: {
      after: "1",
      before: "10",
    },
  });
  console.log(data?.allFilms, loading, error);
  return (
    <>
      <h4>
        8.set up a GraphQL client library like Apollo Client. Create a simple
        component that uses the client to fetch and display data from a GraphQL
        API.
      </h4>
      "Hello, Data is on Console"
    </>
  );
};

export default ShowData;
