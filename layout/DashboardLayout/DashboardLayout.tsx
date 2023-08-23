import type { CustomLayout } from "next";
import dynamic from "next/dynamic";
import { AppShell, Box, MediaQuery } from "@mantine/core";
import { LayoutErrorBoundary } from "layout/LayoutErrorBoundary";

const SideNav = dynamic(async () => {
  const { SideNav } = await import("layout/DashboardLayout/SideNav");
  return SideNav;
});

const Header = dynamic(async () => {
  const { Header } = await import("layout/DashboardLayout/Header");
  return Header;
});

export const DashboardLayout: CustomLayout = (page) => {
  return (
    <AppShell
      padding="md"
      styles={(theme) => ({
        body: { minHeight: "100vh" },
        main: { padding: 0, backgroundColor: theme.colors.gray[0] },
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
};
