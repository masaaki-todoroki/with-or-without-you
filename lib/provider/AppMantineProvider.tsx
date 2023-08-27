import { MantineProvider } from "@mantine/core";
import type { FC, ReactNode } from "react";

export const AppMantineProvider: FC<{ children: ReactNode }> = ({
  children
}) => (
  <MantineProvider withGlobalStyles withNormalizeCSS>
    {children}
  </MantineProvider>
);
