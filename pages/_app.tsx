import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ApolloProvider } from "@apollo/client";
import { MantineProvider } from "@mantine/core";
import { initializeApollo } from "lib/apolloClient";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const client = initializeApollo();

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

      <UserProvider>
        <ApolloProvider client={client}>
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
        </ApolloProvider>
      </UserProvider>
    </>
  );
}
