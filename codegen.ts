import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/lib/graphql/schema.graphql",
  documents: "./src/lib/graphql/documents/**/*.graphql",
  generates: {
    "./src/services/generated.tsx": {
      plugins: [
        "typescript",
        "typescript-resolvers",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withComponent: true,
      },
      hooks: { afterAllFileWrite: ["eslint --fix"] },
    },
  },
};

export default config;
