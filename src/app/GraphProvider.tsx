"use client";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "@/lib/graphql";

export default function GraphProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
