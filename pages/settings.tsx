import { Stack } from "@mantine/core";
import type { CustomNextPage } from "next";
import { Box, Text } from "@mantine/core";
import { DashboardLayout } from "layout";
import { PageContainer } from "component/PageContainer";
import { PageContent } from "component/PageContent";

const Home: CustomNextPage = () => {
  return (
    <PageContainer title="設定" fluid>
      <Stack spacing="xl">
        <PageContent title="設定">
          <Box>
            <Text>設定画面</Text>
          </Box>
        </PageContent>
      </Stack>
    </PageContainer>
  );
};

Home.getLayout = DashboardLayout;

export default Home;
