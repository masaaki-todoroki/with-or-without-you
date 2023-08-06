import type { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";
dotenv.config();

const HASURA_GRAPHQL_ENDPOINT = process.env.HASURA_ENDPOINT_FOR_CODEGEN;
if (!HASURA_GRAPHQL_ENDPOINT) {
  throw new Error(
    "HASURA_GRAPHQL_ENDPOINT environment variable is not defined.",
  );
}

const HASURA_JWT_TOKEN = process.env.HASURA_JWT_TOKEN_FOR_CODEGEN;
if (!HASURA_JWT_TOKEN) {
  throw new Error("HASURA_JWT_TOKEN environment variable is not defined.");
}

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [HASURA_GRAPHQL_ENDPOINT]: {
      headers: {
        Authorization: `Bearer ${HASURA_JWT_TOKEN}`,
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
