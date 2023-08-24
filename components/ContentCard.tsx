import { FC, ReactNode } from "react";
import { Box, Paper, Title } from "@mantine/core";

type Props = {
  children: ReactNode;
  title: string;
  className?: string;
  outerTitle?: boolean;
};

export const ContentCard: FC<Props> = ({
  children,
  title,
  className,
  outerTitle
}) => (
  <Box className={className}>
    {outerTitle && (
      <Title order={2} mb="sm">
        {title}
      </Title>
    )}
    <Paper shadow="xs" p="md">
      {!outerTitle && (
        <Title order={2} mb="sm">
          {title}
        </Title>
      )}
      {children}
    </Paper>
  </Box>
);
