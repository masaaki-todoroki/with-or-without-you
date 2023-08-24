import type { CustomLayout } from "next";
import dynamic from "next/dynamic";
import { AppShell, Box, MediaQuery } from "@mantine/core";
import { LayoutErrorBoundary } from "components/layout/LayoutErrorBoundary";

const SideNav = dynamic(async () => {
  const { SideNav } = await import("components/layout/dashboard/SideNav");
  return SideNav;
});

const Header = dynamic(async () => {
  const { Header } = await import("components/layout/dashboard/Header");
  return Header;
});

export const Dashboard: CustomLayout = (page) => (
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
      <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
    </Box>
  </AppShell>
);
