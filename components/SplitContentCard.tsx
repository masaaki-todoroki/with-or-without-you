import { ReactNode } from "react";
import { Box, Grid, Paper, Title, Sx } from "@mantine/core";

type Props = {
  children: ReactNode;
  title?: string;
  outerTitle?: boolean;
  sx?: Sx;
  splitRatio: number;
};

export const SplitContentCard = ({
  children,
  title,
  outerTitle,
  sx,
  splitRatio
}: Props) => (
  <Grid.Col xs={splitRatio}>
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
  </Grid.Col>
);
