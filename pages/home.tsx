import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Stack, Text } from "@mantine/core";
import type { CustomNextPage } from "next";
import { DashboardLayout } from "layout";
import { PageContainer } from "component/PageContainer";
import { PageContent } from "component/PageContent";

const Home: CustomNextPage = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <PageContainer title="ホーム" fluid>
      <Stack spacing="xl">
        <PageContent title="ログイン">
          {isAuthenticated && (
            <Box>
              <Text>{user?.name}でログイン中</Text>
              <Button onClick={() => logout()}>ログアウト</Button>
            </Box>
          )}
          {!isAuthenticated && (
            <Box>
              <Text>ログインしていません。ログインしますか？</Text>
              <Button onClick={() => loginWithRedirect()}>ログイン</Button>
            </Box>
          )}
        </PageContent>
      </Stack>
    </PageContainer>
  );
};

Home.getLayout = DashboardLayout;

export default Home;
