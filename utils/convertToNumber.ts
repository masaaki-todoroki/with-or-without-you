export const convertToNumber = (value: string) => {
  const parsed = parseInt(value, 10);
  return isNaN(parsed) ? -1 : parsed;
};
