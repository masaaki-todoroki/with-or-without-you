/* eslint-disable no-unused-vars */
declare namespace NodeJS {
  interface ProcessEnv {
    readonly HASURA_ENDPOINT_FOR_CODEGEN: string;
    readonly HASURA_ADMIN_SECRET_FOR_CODEGEN: string;
    readonly NEXT_PUBLIC_HASURA_ENDPOINT: string;
    readonly NEXT_PUBLIC_AUTH0_DOMAIN: string;
    readonly NEXT_PUBLIC_AUTH0_CLIENT_ID: string;
    readonly NEXT_PUBLIC_BASE_URL: string;
    readonly NEXT_PUBLIC_AUTH0_AUDIENCE: string;
  }
}
