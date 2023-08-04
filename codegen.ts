import type { CodegenConfig } from "@graphql-codegen/cli";

const HASURA_GRAPHQL_ENDPOINT = process.env.HASURA_ENDPOINT;
if (!HASURA_GRAPHQL_ENDPOINT) {
  throw new Error(
    "The HASURA_GRAPHQL_ENDPOINT environment variable is not defined.",
  );
}

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [HASURA_GRAPHQL_ENDPOINT]: {
      headers: {
        Authorization: `Bearer ${process.env.HASURA_JWT_TOKEN}`,
      },
    },
  },
  documents: "queries/**/*.ts",
  generates: {
    "types/generated/": {
      preset: "client",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
