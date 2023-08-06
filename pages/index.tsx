import { Button, Group } from "@mantine/core";
import Link from "next/link";

export default function IndexPage() {
  return (
    <Group mt={50} position="center">
      <Link href="/api/auth/login" passHref>
        <Button size="xl">Login with Auth0</Button>
      </Link>
      <Link href="/profile">
        <Button size="xl">プロフィールページへ</Button>
      </Link>
    </Group>
  );
}
