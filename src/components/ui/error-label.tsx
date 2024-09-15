import { ApolloError, ServerError } from "@apollo/client";
import React from "react";

export function ErrorLabel({ error }: { error?: ApolloError | Error }) {
  if (!error) {
    return <></>;
  }

  let message = error.message;
  if (!("networkError" in error)) {
    return <div className="text-red-500 font-semibold text-sm">{message}</div>;
  }
  const { networkError } = error;
  if (networkError?.name === "ServerError") {
    const { result } = networkError as ServerError;
    if (typeof result === "string") {
      message = result;
    } else if (result) {
      message =
        result.errors instanceof Array
          ? result.errors.map((e) => e.message)
          : result.errors.message;
    }
  }
  return <div className="text-red-500 font-semibold text-sm">{message}</div>;
}
