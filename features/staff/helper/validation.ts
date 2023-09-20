import { z } from "zod";

export const StaffBasicDataValidation = z.object({
  email: z
    .string()
    .email({ message: "メールアドレスの形式が正しくありません。" })
    .min(1, { message: "1文字以上入力する必要があります。" }),
  name: z.string().min(1, { message: "1文字以上入力する必要があります。" }),
  nickname: z.string().min(1, { message: "1文字以上入力する必要があります。" }),
  nicknameInEnglish: z.string().regex(/^[a-zA-Z]+$/, {
    message: "半角英字でスペースなしで入力してください。"
  }),
  age: z
    .number()
    .refine((value) => value >= 18 && value <= 48 && Number.isInteger(value), {
      message: "18以上48以下の整数を入力してください。"
    }),
  height: z
    .number()
    .refine(
      (value) => value >= 140 && value <= 180 && Number.isInteger(value),
      {
        message: "140以上180以下の整数を入力してください。"
      }
    ),
  bloodType: z.enum(["A", "B", "AB", "O"], {
    errorMap: () => ({
      message: "A, B, AB, Oのいずれかを半角大文字で入力してください。"
    })
  }),
  comment: z.string(),
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

export const StaffThumbnailsValidation = z.object({
  userId: z.string(),
  // staffId: z.number(),
  thumbnailUrl: z
    .array(
      z
        .custom<File>()
        .refine((file) => file.size < 500000, {
          message: "ファイルサイズは最大5MBです"
        })
        .refine((file) => ["image/jpeg", "image/png"].includes(file.type), {
          message: ".jpgもしくは.pngのみ可能です"
        })
    )
    .optional()
    .default([])
});

// 統合バリデーションスキーマ
export const StaffTotalValidation = z.object({
  ...StaffBasicDataValidation.shape,
  ...StaffThumbnailsValidation.shape
});
