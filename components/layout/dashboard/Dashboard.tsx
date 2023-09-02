import { FC, ReactNode } from "react";
import { AppShell, Box, MediaQuery } from "@mantine/core";
import { LayoutErrorBoundary } from "components/layout/LayoutErrorBoundary";
import { SideNav } from "components/layout/dashboard/SideNav";
import { Header } from "components/layout/dashboard/Header";

type Props = {
  children: ReactNode;
};

export const Dashboard: FC<Props> = ({ children }) => (
  <AppShell
    padding="md"
    styles={(theme) => ({
      body: { minHeight: "100vh" },
      main: { padding: 0, backgroundColor: theme.colors.gray[0] }
    })}
    navbar={
      <>
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <SideNav />
        </MediaQuery>
      </>
    }
  >
    <Header />
    <Box py="xl" px="md">
      <LayoutErrorBoundary>{children}</LayoutErrorBoundary>
    </Box>
  </AppShell>
);
