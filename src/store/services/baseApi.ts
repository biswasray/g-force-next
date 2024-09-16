import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import { GraphQLClient } from "graphql-request";

const url = "http://localhost:7000/graphql";

export const _client = new GraphQLClient(url);
const client = Object.assign(_client, { url });

export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({ client }),
  endpoints: () => ({}),
});
