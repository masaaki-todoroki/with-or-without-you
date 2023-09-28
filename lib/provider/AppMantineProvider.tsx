import type { ReactNode } from "react";
import { MantineProvider } from "@mantine/core";

type Props = {
  children: ReactNode;
};

export const AppMantineProvider = ({ children }: Props) => (
  <MantineProvider withGlobalStyles withNormalizeCSS>
    {children}
  </MantineProvider>
);
