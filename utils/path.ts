const PATH = {
  Authentication: "/",
  HOME: "/home",
  STAFF: "/staff",
  STAFF_DETAIL: "/staff/detail",
  STAFF_NEW_CREATE: "/staff/new-create",
  SETTINGS: "/settings"
} as const;

export const getPath = (pathKey: keyof typeof PATH, ...args: string[]) => {
  const val = PATH[pathKey];

  if (!args) {
    return val;
  }

  const dirs = val.slice(1).split("/");

  const newPath = dirs.map((dir) => {
    if (dir.startsWith("[")) {
      const replaceDir = args[0];
      args.shift();
      return replaceDir;
    }
    return dir;
  });

  return "/" + newPath.join("/");
};
