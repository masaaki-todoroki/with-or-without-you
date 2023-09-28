const PATH = {
  Authentication: "/",
  HOME: "/home",
  STAFF: "/staff",
  STAFF_DETAIL: (nicknameInEnglish?: string) =>
    `/staff/${nicknameInEnglish ? nicknameInEnglish : null}`,
  STAFF_NEW_CREATE: "/staff/new-create",
  SETTINGS: "/settings"
} as const;

export const getPath = (pathKey: keyof typeof PATH, ...args: string[]) => {
  const val =
    typeof PATH[pathKey] === "function"
      ? (PATH[pathKey] as Function)(...args)
      : PATH[pathKey];

  const dirs = val.slice(1).split("/");

  const newPath = dirs.map((dir: string) => {
    if (dir.startsWith("[")) {
      const replaceDir = args[0];
      args.shift();
      return replaceDir;
    }
    return dir;
  });

  return "/" + newPath.join("/");
};
