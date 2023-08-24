import { FC, ReactNode } from "react";
import Link from "next/link";
import {
  Anchor,
  Breadcrumbs,
  Container,
  ContainerProps,
  Space,
  Title
} from "@mantine/core";

type Props = {
  children: ReactNode;
  title: string;
  menus?: { label: string; href: string }[];
} & Pick<ContainerProps, "fluid">;

export const PageContainer: FC<Props> = ({ children, title, menus, fluid }) => (
  <Container px={0} fluid={fluid}>
    {menus && menus.length > 0 && (
      <Breadcrumbs>
        {menus.map((item) => (
          <Link key={item.label} href={item.href} passHref>
            <Anchor>{item.label}</Anchor>
          </Link>
        ))}
      </Breadcrumbs>
    )}

    <Title order={1}>{title}</Title>

    <Space h="xl" />

    {children}
  </Container>
);
