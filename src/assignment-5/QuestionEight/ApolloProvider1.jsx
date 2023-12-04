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
    "x-rapidapi-key": "7b0553b7b0mshc584db9a76227a1p17ec44jsn43a0d948276a",
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

export default ApolloProvider1