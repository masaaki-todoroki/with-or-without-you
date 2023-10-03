import { ReactNode } from "react";
import { Box, Paper, Title, Sx } from "@mantine/core";

type Props = {
  children: ReactNode;
  title?: string;
  outerTitle?: boolean;
  sx?: Sx;
};

export const ContentCard = ({ children, title, outerTitle, sx }: Props) => (
  <Box sx={sx}>
    {title && outerTitle && (
      <Title order={2} mb="sm">
        {title}
      </Title>
    )}
    <Paper shadow="xs" p="md">
      {title && !outerTitle && (
        <Title order={2} mb="sm">
          {title}
        </Title>
      )}
      {children}
    </Paper>
  </Box>
);
