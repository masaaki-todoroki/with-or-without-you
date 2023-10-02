import { Paper, Text, Container } from "@mantine/core";
import { AlertTriangle } from "tabler-icons-react";

type Props = {
  message?: string;
};

const ErrorComponent = ({ message }: Props) => {
  return (
    <Container size="xs" mt="4px">
      <Paper p="md" sx={{ textAlign: "center" }}>
        <AlertTriangle size={32} color="red" style={{ marginBottom: "4px" }} />
        <Text align="center" size="md">
          {message}
        </Text>
      </Paper>
    </Container>
  );
};

export default ErrorComponent;
