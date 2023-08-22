import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDisclosure } from "@mantine/hooks";
import {
  createStyles,
  getStylesRef,
  Navbar,
  Group,
  UnstyledButton,
  Tooltip,
  MediaQuery,
} from "@mantine/core";
import {
  Home,
  Settings,
  ArrowLeft,
  ArrowRight,
  DeviceAnalytics,
} from "tabler-icons-react";
import { getPath } from "lib/const";

const useStyles = createStyles<string, { collapsed?: boolean }>(
  (theme, params) => {
    const icon: string = getStylesRef("icon");

    return {
      navbar: {
        position: "sticky",
        top: 0,
        width: params?.collapsed ? 81 : 264,
        transition: params?.collapsed ? "width 0.1s linear" : "none",
      },

      header: {
        paddingBottom: theme.spacing.xs,
        marginBottom: theme.spacing.md,
        borderBottom: `1px solid ${theme.colors.gray[2]}`,
      },

      footer: {
        paddingTop: theme.spacing.xs,
        marginTop: theme.spacing.md,
        borderTop: `1px solid ${theme.colors.gray[2]}`,
      },

      logo: {
        ...theme.fn.focusStyles(),
        width: "100%",
        display: "flex",
        alignItems: "center",
        columnGap: theme.spacing.sm,
        textDecoration: "none",
        fontSize: theme.fontSizes.sm,
        color: theme.colors.gray[7],
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        borderRadius: theme.radius.sm,
        fontWeight: 700,
      },

      link: {
        ...theme.fn.focusStyles(),
        width: "100%",
        display: "flex",
        alignItems: "center",
        columnGap: theme.spacing.sm,
        textDecoration: "none",
        fontSize: theme.fontSizes.sm,
        color: theme.colors.gray[7],
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        borderRadius: theme.radius.sm,
        fontWeight: 500,

        "&:hover": {
          backgroundColor: theme.colors.gray[0],
          color: theme.black,

          [`& .${icon}`]: {
            color: theme.black,
          },
        },
      },

      linkActive: {
        "&, &:hover": {
          backgroundColor: theme.colors[theme.primaryColor][0],
          color: theme.colors[theme.primaryColor][7],
          [`& .${icon}`]: {
            color: theme.colors[theme.primaryColor][7],
          },
        },
      },

      linkIcon: {
        ref: icon,
        color: theme.colors.gray[6],
      },

      linkLabel: params?.collapsed ? { display: "none" } : {},
    };
  },
);

const ITEMS = [
  { href: getPath("HOME"), label: "ホーム", Icon: Home },
  { href: getPath("SETTINGS"), label: "設定", Icon: Settings },
];

export const SideNav: FC<{ className?: string }> = ({ className }) => {
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
        {ITEMS.map(({ label, href, Icon }) => (
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
                currentRoute === href
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
