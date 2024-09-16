import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/lib/graphql/schema.graphql",
  documents: "./src/lib/graphql/documents/**/*.graphql",
  generates: {
    "./src/store/services/generated.ts": {
      plugins: [
        "typescript",
        "typescript-resolvers",
        {
          "typescript-rtk-query": {
            importBaseApiFrom: "./baseApi",
            exportHooks: true,
          },
        },
      ],
    },
  },
};

export default config;
