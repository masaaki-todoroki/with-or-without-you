import React from "react";
import type { CustomNextPage } from "next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Box, Button, Stack, Text, TextInput } from "@mantine/core";
import { Dashboard } from "components/layout/dashboard/Dashboard";
import { PageContainer } from "components/PageContainer";
import { ContentCard } from "components/ContentCard";

const RegisterStaffSchema = z.object({
  email: z
    .string()
    .email({ message: "メールアドレスの形式が正しくありません。" })
    .min(1, { message: "1文字以上入力する必要があります。" }),
  name: z.string().min(1, { message: "1文字以上入力する必要があります。" }),
  nickname: z.string().min(1, { message: "1文字以上入力する必要があります。" }),
  age: z
    .number()
    .transform((value) => (isNaN(value) ? -1 : value))
    .refine((value) => value !== -1, {
      message: "数字を入力してください。"
    }),
  mobile: z
    .string()
    .refine(
      (value) =>
        /^(0[5-9]0-[0-9]{4}-[0-9]{4}|0[1-9]-[0-9]{1,4}-[0-9]{4})$/.test(
          value.replace(/-/g, "")
        ),
      {
        message: "電話番号の形式が正しくありません。"
      }
    ),
  lineId: z.string().regex(/^[\u0021-\u007e]+$/u, {
    message: "半角英数記号で入力してください。"
  }),
  xUsername: z.string().regex(/^[\u0021-\u007e]+$/u, {
    message: "半角英数記号で入力してください。"
  })
});
type RegisterStaffInputType = z.infer<typeof RegisterStaffSchema>;

const STAFF_NEW_CREATE: CustomNextPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<RegisterStaffInputType>({
    resolver: zodResolver(RegisterStaffSchema)
  });

  const handleMobileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let { value } = event.target;
    const cleaned = ("" + value).replace(/\D/g, ""); // 非数字を除去
    const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);
    if (match) {
      value = `${match[1]}-${match[2]}-${match[3]}`;
    }
    setValue("mobile", value); // react-hook-formのsetValueを使用
  };

  const onSubmit = (data: RegisterStaffInputType) => console.log(data);

  return (
    <PageContainer title="スタッフ登録" fluid>
      <Stack spacing="xl">
        <ContentCard title="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <TextInput
                label="メールアドレス"
                {...register("email", { required: true })}
                placeholder="email@example.com"
              />
              <Text sx={[{ fontSize: "14px", color: "#ff0000" }]}>
                {typeof errors.email?.message === "string" &&
                  errors.email?.message}
              </Text>
            </Box>
            <Box sx={[{ marginTop: "20px" }]}>
              <TextInput
                label="名前"
                {...register("name", { required: true })}
                placeholder="山村幸恵"
              />
              <Text sx={[{ fontSize: "14px", color: "#ff0000" }]}>
                {typeof errors.name?.message === "string" &&
                  errors.name?.message}
              </Text>
            </Box>
            <Box sx={[{ marginTop: "20px" }]}>
              <TextInput
                label="ニックネーム"
                {...register("nickname", { required: true })}
                placeholder="柴咲コウ"
              />
              <Text sx={[{ fontSize: "14px", color: "#ff0000" }]}>
                {typeof errors.nickname?.message === "string" &&
                  errors.nickname?.message}
              </Text>
            </Box>
            <Box sx={[{ marginTop: "20px" }]}>
              <TextInput
                label="年齢"
                {...register("age", {
                  required: true,
                  setValueAs: (value) => {
                    const parsed = parseInt(value, 10);
                    return isNaN(parsed) ? -1 : parsed;
                  }
                })}
                placeholder="32"
              />
              <Text sx={[{ fontSize: "14px", color: "#ff0000" }]}>
                {typeof errors.age?.message === "string" && errors.age?.message}
              </Text>
            </Box>
            <Box sx={[{ marginTop: "20px" }]}>
              <TextInput
                label="携帯電話"
                {...register("mobile", {
                  required: true
                })}
                onChange={handleMobileInputChange}
                placeholder="090-1234-5678"
              />
              <Text sx={[{ fontSize: "14px", color: "#ff0000" }]}>
                {typeof errors.mobile?.message === "string" &&
                  errors.mobile?.message}
              </Text>
            </Box>
            <Box sx={[{ marginTop: "20px" }]}>
              <TextInput
                label="LINE ID"
                {...register("lineId")}
                placeholder=""
              />
              <Text sx={[{ fontSize: "14px", color: "#ff0000" }]}>
                {typeof errors.lineId?.message === "string" &&
                  errors.lineId?.message}
              </Text>
            </Box>
            <Box sx={[{ marginTop: "20px" }]}>
              <TextInput
                label="X ユーザー名"
                {...register("xUsername")}
                placeholder=""
              />
              <Text sx={[{ fontSize: "14px", color: "#ff0000" }]}>
                {typeof errors.xUsername?.message === "string" &&
                  errors.xUsername?.message}
              </Text>
            </Box>
            <Box
              sx={[
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "20px"
                }
              ]}
            >
              <Button type="submit">登録</Button>
            </Box>
          </form>
        </ContentCard>
      </Stack>
    </PageContainer>
  );
};

STAFF_NEW_CREATE.getLayout = Dashboard;

export default STAFF_NEW_CREATE;
