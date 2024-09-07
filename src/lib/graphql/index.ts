import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "http://localhost:7000/graphql",
  cache: new InMemoryCache(),
});
