import React from "react";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import ShowData from "./ShowData";
const link = new HttpLink({
  uri: "https://star-wars-graphql-dont-change.p.rapidapi.com/",
  headers: {
    "x-rapidapi-key": "1cb3b46ad4mshbccb94a2ebb46ddp1d8cecjsne64545d3ee3a",
    "x-rapidapi-host": "star-wars-graphql-dont-change.p.rapidapi.com",
    "Content-Type": "application/json",
  },
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

const ApolloProvider1 = () => {
  return (
    <ApolloProvider client={client}>
      <ShowData />
    </ApolloProvider>
  );
};

export default ApolloProvider1;
