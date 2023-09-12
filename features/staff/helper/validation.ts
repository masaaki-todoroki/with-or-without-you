import { z } from "zod";

export const CreatingStaffValidation = z.object({
  email: z
    .string()
    .email({ message: "メールアドレスの形式が正しくありません。" })
    .min(1, { message: "1文字以上入力する必要があります。" }),
  name: z.string().min(1, { message: "1文字以上入力する必要があります。" }),
  nickname: z.string().min(1, { message: "1文字以上入力する必要があります。" }),
  age: z
    .number()
    .refine((value) => value >= 18 && value <= 48 && Number.isInteger(value), {
      message: "18以上48以下の整数を入力してください。"
    }),
  mobile: z.string().refine((value) => /^0\d{9,10}$/.test(value), {
    message: "ハイフンなしで正しい携帯電話番号を入力してください。"
  }),
  lineId: z
    .string()
    .regex(/^[\u0021-\u007e]+$/u, {
      message: "半角英数記号で入力してください。"
    })
    .or(z.literal("")),
  xUsername: z
    .string()
    .regex(/^[\u0021-\u007e]+$/u, {
      message: "半角英数記号で入力してください。"
    })
    .or(z.literal("")),
  userId: z.string()
});
