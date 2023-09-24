import { FC, ReactNode } from "react";
import { Box, Paper, Title, Sx } from "@mantine/core";

type Props = {
  children: ReactNode;
  title?: string;
  outerTitle?: boolean;
  sx?: Sx;
  pos?: "relative";
};

export const ContentCard: FC<Props> = ({
  children,
  title,
  outerTitle,
  sx,
  pos
}) => (
  <Box sx={sx} pos={pos}>
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
