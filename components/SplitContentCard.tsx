import { FC, ReactNode } from "react";
import { Box, Grid, Paper, Title, Sx } from "@mantine/core";

type Props = {
  children: ReactNode;
  title?: string;
  outerTitle?: boolean;
  sx?: Sx;
  splitRatio: number;
};

export const SplitContentCard: FC<Props> = ({
  children,
  title,
  outerTitle,
  sx,
  splitRatio
}) => (
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
