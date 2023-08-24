import { createStyles, getStylesRef } from "@mantine/core";

export const useStyles = createStyles<string, { collapsed?: boolean }>(
  (theme, params) => {
    const icon: string = getStylesRef("icon");

    return {
      navbar: {
        position: "sticky",
        top: 0,
        width: params?.collapsed ? 81 : 264,
        transition: params?.collapsed ? "width 0.1s linear" : "none"
      },

      header: {
        paddingBottom: theme.spacing.xs,
        marginBottom: theme.spacing.md,
        borderBottom: `1px solid ${theme.colors.gray[2]}`
      },

      footer: {
        paddingTop: theme.spacing.xs,
        marginTop: theme.spacing.md,
        borderTop: `1px solid ${theme.colors.gray[2]}`
      },

      logo: {
        ...theme.fn.focusStyles(),
        width: "100%",
        display: "flex",
        alignMENUS: "center",
        columnGap: theme.spacing.sm,
        textDecoration: "none",
        fontSize: theme.fontSizes.sm,
        color: theme.colors.gray[7],
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        borderRadius: theme.radius.sm,
        fontWeight: 700
      },

      link: {
        ...theme.fn.focusStyles(),
        width: "100%",
        display: "flex",
        alignMENUS: "center",
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
            color: theme.black
          }
        }
      },

      linkActive: {
        "&, &:hover": {
          backgroundColor: theme.colors[theme.primaryColor][0],
          color: theme.colors[theme.primaryColor][7],
          [`& .${icon}`]: {
            color: theme.colors[theme.primaryColor][7]
          }
        }
      },

      linkIcon: {
        ref: icon,
        color: theme.colors.gray[6]
      },

      linkLabel: params?.collapsed ? { display: "none" } : {}
    };
  }
);
