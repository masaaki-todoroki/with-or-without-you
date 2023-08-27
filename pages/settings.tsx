import { Stack } from "@mantine/core";
import type { CustomNextPage } from "next";
import { Box, Text } from "@mantine/core";
import { Dashboard } from "components/layout/dashboard/Dashboard";
import { PageContainer } from "components/PageContainer";
import { ContentCard } from "components/ContentCard";

const Home: CustomNextPage = () => (
  <PageContainer title="設定" fluid>
    <Stack spacing="xl">
      <ContentCard title="設定">
        <Box>
          <Text>設定画面</Text>
        </Box>
      </ContentCard>
    </Stack>
  </PageContainer>
);

Home.getLayout = Dashboard;

export default Home;
