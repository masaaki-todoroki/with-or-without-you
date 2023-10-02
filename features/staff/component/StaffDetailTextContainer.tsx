import { Box, Text, Title } from "@mantine/core";

type Props = {
  title: string;
  staffDetail?: string | number;
};

const StaffDetailTextContainer = ({ title, staffDetail }: Props) => {
  return (
    <Box>
      <Title order={6}>{title}</Title>
      <Box
        sx={{
          background: "#f7f8f9",
          padding: "4px 8px",
          borderRadius: "4px",
          border: "1px solid #f1f3f5"
        }}
      >
        {staffDetail && <Text>{staffDetail}</Text>}
      </Box>
    </Box>
  );
};

export default StaffDetailTextContainer;
