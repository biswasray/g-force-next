import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/lib/graphql/schema.graphql",
  documents: "./src/lib/graphql/documents/**/*.graphql",
  generates: {
    "./src/store/services/generated.ts": {
      plugins: [
        "typescript",
        "typescript-resolvers",
        "typescript-operations",
        "typescript-rtk-query",
      ],
      config: {
        importBaseApiFrom: "./baseApi",
        exportHooks: true,
      },
    },
  },
};

export default config;
