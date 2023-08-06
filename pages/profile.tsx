import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { Button, Group } from "@mantine/core";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <Group mt={50} position="center">
      {user && (
        <div>
          <h2>{user.name}</h2>
        </div>
      )}
      <Link href="/api/auth/logout" passHref>
        <Button size="xl">Logout with Auth0</Button>
      </Link>
    </Group>
  );
}
