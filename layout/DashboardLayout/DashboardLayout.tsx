import type { CustomLayout } from "next";
import { LayoutErrorBoundary } from "layout/LayoutErrorBoundary";

export const DashboardLayout: CustomLayout = (page) => {
  return (
    <>
      <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
    </>
  );
};
