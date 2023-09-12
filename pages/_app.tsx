import React from "react";
import Head from "next/head";
import { Auth0Provider } from "@auth0/auth0-react";
import AuthorizedApolloProvider from "lib/apolloClient";
import type { CustomAppPage } from "next/app";
import { RecoilRoot } from "recoil";
import { AppMantineProvider } from "lib/provider/AppMantineProvider";
import { Notifications } from "@mantine/notifications";
import { GlobalStyleProvider } from "lib/provider/GlobalStyleProvider";
import { Dashboard } from "components/layout/dashboard/Dashboard";

const App: CustomAppPage = ({ Component, pageProps }) => {
  const redirectUri = `${process.env.NEXT_PUBLIC_BASE_URL}/home`;
  const audience = process.env.NEXT_PUBLIC_AUTH0_AUDIENCE;

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
          audience: `${audience}` || ""
        }}
      >
        <AuthorizedApolloProvider>
          <RecoilRoot>
            <GlobalStyleProvider>
              <AppMantineProvider>
                <Notifications />
                <Dashboard>
                  <Component {...pageProps} />
                </Dashboard>
              </AppMantineProvider>
            </GlobalStyleProvider>
          </RecoilRoot>
        </AuthorizedApolloProvider>
      </Auth0Provider>
    </>
  );
};

export default App;
