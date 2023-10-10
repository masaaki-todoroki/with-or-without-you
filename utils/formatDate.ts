import { format } from "date-fns";
import { ja } from "date-fns/locale";

export const formatDate = (dateStr: Date, pattern = "yyyy.MM.dd（E）") => {
  const date = new Date(dateStr);
  return format(date, pattern, { locale: ja });
};
