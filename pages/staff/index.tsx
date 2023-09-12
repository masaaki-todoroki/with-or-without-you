import { Box, Button, Stack } from "@mantine/core";
import type { CustomNextPage } from "next";
import Link from "next/link";
import { Dashboard } from "components/layout/dashboard/Dashboard";
import { PageContainer } from "components/PageContainer";
import { ContentCard } from "components/ContentCard";
import { getPath } from "utils/path";

const Home: CustomNextPage = () => (
  <PageContainer title="スタッフ" fluid>
    <Stack spacing="xl">
      <Link href={getPath("STAFF_NEW_CREATE")}>
        <Button>スタッフ登録</Button>
      </Link>

      <ContentCard title="スタッフ一覧">
        <Box>test</Box>
      </ContentCard>
    </Stack>
  </PageContainer>
);

Home.getLayout = Dashboard;

export default Home;
