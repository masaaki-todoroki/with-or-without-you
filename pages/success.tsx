import { useAuth0 } from "@auth0/auth0-react";
import { Button, Group } from "@mantine/core";

export default function SuccessPage() {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <Group mt={50} position="center">
      {isAuthenticated && (
        <div>
          <p>{user?.name}でログイン中</p>
          <Button onClick={() => logout()}>ログアウト</Button>
        </div>
      )}
      {!isAuthenticated && (
        <div>
          <Button onClick={() => loginWithRedirect()}>ログイン</Button>
        </div>
      )}
    </Group>
  );
}
