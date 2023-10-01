import { Box, Text, Title } from "@mantine/core";

type Props = {
  title: string;
  staffData?: string | number | undefined | null;
};

const StaffDataContainer = ({ title, staffData }: Props) => {
  return (
    <>
      <Title order={6}>{title}</Title>
      <Box
        sx={{
          background: "#f7f8f9",
          padding: "4px 8px",
          borderRadius: "4px",
          border: "1px solid #f1f3f5"
        }}
      >
        {staffData && <Text>{staffData}</Text>}
      </Box>
    </>
  );
};

export default StaffDataContainer;
