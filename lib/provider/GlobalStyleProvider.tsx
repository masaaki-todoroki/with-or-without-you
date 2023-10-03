import type { ReactNode } from "react";
import { Global } from "@mantine/core";

type Props = {
  children: ReactNode;
};

export const GlobalStyleProvider = ({ children }: Props) => (
  <>
    <Global
      styles={{
        "*": { wordBreak: "break-all" },
        'button, *[type="button"]': { transform: "none !important" }
      }}
    />
    {children}
  </>
);
