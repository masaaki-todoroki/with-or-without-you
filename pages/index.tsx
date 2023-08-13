import { useAuth0 } from "@auth0/auth0-react";
import { Button, Group } from "@mantine/core";

export default function IndexPage() {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <Group mt={50} position="center">
      {isAuthenticated && (
        <div>
          <p>{user?.name}</p>
          <Button onClick={() => logout()}>ログアウト</Button>
        </div>
      )}
      {!isAuthenticated && (
        <div>
          <p>ログインしていません。ログインしますか？</p>
          <Button onClick={() => loginWithRedirect()}>ログイン</Button>
        </div>
      )}
    </Group>
  );
}
