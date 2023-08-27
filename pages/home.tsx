import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Stack, Text } from "@mantine/core";
import type { CustomNextPage } from "next";
import { Dashboard } from "components/layout/dashboard/Dashboard";
import { PageContainer } from "components/PageContainer";
import { ContentCard } from "components/ContentCard";

const Home: CustomNextPage = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <PageContainer title="ホーム" fluid>
      <Stack spacing="xl">
        <ContentCard title="ログイン">
          {isAuthenticated ? (
            <Box>
              <Text>{user?.name}でログイン中</Text>
              <Button onClick={() => logout()}>ログアウト</Button>
            </Box>
          ) : (
            <Box>
              <Text>ログインしていません。ログインしますか？</Text>
              <Button onClick={() => loginWithRedirect()}>ログイン</Button>
            </Box>
          )}
        </ContentCard>
      </Stack>
    </PageContainer>
  );
};

Home.getLayout = Dashboard;

export default Home;
