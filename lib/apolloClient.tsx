import React from "react";
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloLink
} from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { setContext } from "@apollo/client/link/context";
import "cross-fetch/polyfill";

const AuthorizedApolloProvider = ({
  children
}: React.PropsWithChildren<{}>) => {
  const { getAccessTokenSilently } = useAuth0();

  const authLink = setContext(async (_, { headers, ...rest }) => {
    const audience = process.env.NEXT_PUBLIC_AUTH0_AUDIENCE;
    let token;
    try {
      token = await getAccessTokenSilently({
        authorizationParams: {
          audience
        }
      });
    } catch (error) {
      console.error(error);
    }
    if (!token) return { headers, ...rest };
    return {
      ...rest,
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ""
      }
    };
  });

  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_HASURA_ENDPOINT
  });

  const client = new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: ApolloLink.from([authLink, httpLink]),
    cache: new InMemoryCache()
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default AuthorizedApolloProvider;
