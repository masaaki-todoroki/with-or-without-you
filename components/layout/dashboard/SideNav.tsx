import Link from "next/link";
import { useRouter } from "next/router";
import { useDisclosure } from "@mantine/hooks";
import {
  Navbar,
  Group,
  UnstyledButton,
  Tooltip,
  MediaQuery
} from "@mantine/core";
import {
  Home,
  Heart,
  Settings,
  ArrowLeft,
  ArrowRight,
  DeviceAnalytics
} from "tabler-icons-react";
import { getPath } from "utils/path";
import { useStyles } from "components/layout/dashboard/SideNav.styles";

const MENUS = [
  { href: getPath("HOME"), label: "ホーム", Icon: Home },
  { href: getPath("STAFF"), label: "スタッフ", Icon: Heart },
  { href: getPath("SETTINGS"), label: "設定", Icon: Settings }
];

type Props = {
  className?: string;
};

export const SideNav = ({ className }: Props) => {
  const [collapsed, handlers] = useDisclosure(false);
  const { classes, cx } = useStyles({ collapsed });

  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <Navbar p="md" className={cx(classes.navbar, className)}>
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <Link href={getPath("HOME")} className={classes.logo}>
            <DeviceAnalytics />
            <span className={classes.linkLabel}>運営管理 Dashboard</span>
          </Link>
        </Group>
        {MENUS.map(({ label, href, Icon }) => (
          <Tooltip
            key={label}
            label={label}
            disabled={!collapsed}
            position="right"
            withArrow
            sx={{ width: "100%" }}
          >
            <Link
              href={href}
              className={
                currentRoute.startsWith(href)
                  ? cx(classes.link, classes.linkActive)
                  : classes.link
              }
            >
              <Icon className={classes.linkIcon} />
              <span className={classes.linkLabel}>{label}</span>
            </Link>
          </Tooltip>
        ))}
      </Navbar.Section>

      <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
        <Navbar.Section className={classes.footer}>
          <UnstyledButton className={classes.link} onClick={handlers.toggle}>
            {collapsed ? (
              <ArrowRight className={classes.linkIcon} />
            ) : (
              <>
                <ArrowLeft className={classes.linkIcon} />
                <span>折りたたむ</span>
              </>
            )}
          </UnstyledButton>
        </Navbar.Section>
      </MediaQuery>
    </Navbar>
  );
};
