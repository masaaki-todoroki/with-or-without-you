import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { Auth0Provider } from "@auth0/auth0-react";
import AuthorizedApolloProvider from "lib/apolloClient";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const redirectUri = `${process.env.NEXT_PUBLIC_BASE_URL}/success`;
  const audience = process.env.NEXT_PUBLIC_AUTH0_AUDIENCE;

  return (
    <>
      <Head>
        <title>Page title</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Auth0Provider
        domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN || ""}
        clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || ""}
        authorizationParams={{
          redirect_uri: `${redirectUri}`,
          audience: `${audience}` || "",
        }}
      >
        <AuthorizedApolloProvider>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              /** Put your mantine theme override here */
              colorScheme: "dark",
            }}
          >
            <Component {...pageProps} />
          </MantineProvider>
        </AuthorizedApolloProvider>
      </Auth0Provider>
    </>
  );
}
