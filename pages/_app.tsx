import React from "react";
import Head from "next/head";
import { Auth0Provider } from "@auth0/auth0-react";
import AuthorizedApolloProvider from "lib/apolloClient";
import type { CustomAppPage } from "next/app";
import { AppMantineProvider, GlobalStyleProvider } from "lib/mantine";

const App: CustomAppPage = ({ Component, pageProps }) => {
  const redirectUri = `${process.env.NEXT_PUBLIC_BASE_URL}/home`;
  const audience = process.env.NEXT_PUBLIC_AUTH0_AUDIENCE;

  const getLayout =
    Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <>
      <Head>
        <title>With or Without You</title>
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
          <GlobalStyleProvider>
            <AppMantineProvider>
              {getLayout(<Component {...pageProps} />)}
            </AppMantineProvider>
          </GlobalStyleProvider>
        </AuthorizedApolloProvider>
      </Auth0Provider>
    </>
  );
};

export default App;
