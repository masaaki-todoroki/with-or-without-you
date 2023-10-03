import { ReactNode } from "react";
import { Text } from "@mantine/core";

type Props = {
  children: ReactNode;
};

const StaffValueText = ({ children, ...props }: Props) => {
  return (
    <Text
      sx={{
        background: "#f7f8f9",
        padding: "4px 8px",
        borderRadius: "4px",
        border: "1px solid #f1f3f5"
      }}
      {...props}
    >
      {children}
    </Text>
  );
};

export default StaffValueText;
