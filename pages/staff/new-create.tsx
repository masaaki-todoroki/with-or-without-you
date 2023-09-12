import { useCallback, useEffect } from "react";
import type { CustomNextPage } from "next";
import { useAuth0 } from "@auth0/auth0-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@apollo/client";
import { CREATE_STAFF } from "queries/queries";
import { CreateStaffMutation } from "types/generated/graphql";
import { Button, Center, Flex, Stack, TextInput } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { Check, ExclamationMark } from "tabler-icons-react";
import { PageContainer } from "components/PageContainer";
import { ContentCard } from "components/ContentCard";
import { CreatingStaffValidation } from "features/staff/helper/validation";

type CreatedStaffValue = z.infer<typeof CreatingStaffValidation>;

const CreateStaff: CustomNextPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors }
  } = useForm<CreatedStaffValue>({
    resolver: zodResolver(CreatingStaffValidation)
  });

  const { user } = useAuth0();
  useEffect(() => {
    user && user.sub && setValue("userId", user.sub);
  }, [user, setValue]);

  const [createStaff] = useMutation<CreateStaffMutation>(CREATE_STAFF);

  const onSubmit = useCallback(
    async (createdStaffValue: CreatedStaffValue) => {
      try {
        const result = await createStaff({
          variables: {
            ...createdStaffValue,
            line_id: createdStaffValue.lineId,
            x_username: createdStaffValue.xUsername,
            user_id: createdStaffValue.userId
          }
        });
        result.data &&
          result.data.insert_staff_one &&
          notifications.show({
            title: "スタッフ登録完了！",
            message: `${result.data.insert_staff_one.name}さん、登録しました 🤗`,
            icon: <Check />,
            color: "teal",
            autoClose: 5000
          });
        reset();
      } catch (err) {
        notifications.show({
          title: "スタッフ登録失敗",
          message: `登録に失敗しました。登録されていないメールアドレスで再度お試しください。`,
          icon: <ExclamationMark />,
          color: "red",
          autoClose: 5000
        });
      }
    },
    [createStaff, reset]
  );

  const convertToNumber = (value: string) => {
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? -1 : parsed;
  };

  return (
    <PageContainer title="スタッフ登録" fluid>
      <Stack spacing="xl">
        <ContentCard>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex direction="column" gap="xl" justify="center">
              <TextInput
                label="メールアドレス"
                {...register("email", { required: true })}
                placeholder="email@example.com"
                withAsterisk
                size="md"
                error={errors.email?.message}
              />
              <TextInput
                label="名前"
                {...register("name", { required: true })}
                placeholder="山村幸恵"
                withAsterisk
                error={errors.name?.message}
              />
              <TextInput
                label="ニックネーム"
                {...register("nickname", { required: true })}
                placeholder="柴咲コウ"
                withAsterisk
                error={errors.nickname?.message}
              />
              <TextInput
                label="年齢"
                {...register("age", {
                  required: true,
                  setValueAs: convertToNumber
                })}
                placeholder="32"
                withAsterisk
                error={errors.age?.message}
              />
              <TextInput
                label="携帯電話"
                {...register("mobile", {
                  required: true
                })}
                placeholder="09012345678"
                withAsterisk
                error={errors.mobile?.message}
              />
              <TextInput
                label="LINE ID"
                {...register("lineId")}
                error={errors.lineId?.message}
              />
              <TextInput
                label="X ユーザー名"
                {...register("xUsername")}
                error={errors.xUsername?.message}
              />
              <Center>
                <Button type="submit" sx={[{ width: "120px" }]}>
                  登録
                </Button>
              </Center>
            </Flex>
          </form>
        </ContentCard>
      </Stack>
    </PageContainer>
  );
};

export default CreateStaff;
