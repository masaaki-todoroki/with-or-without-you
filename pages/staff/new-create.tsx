import { useEffect, useState } from "react";
import type { CustomNextPage } from "next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USERS, CREATE_STAFF } from "queries/queries";
import { GetUsersQuery, CreateStaffMutation } from "types/generated/graphql";
import {
  Box,
  Button,
  Center,
  Flex,
  Modal,
  Stack,
  Text,
  TextInput
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
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

  // Queryフックのセットアップ
  const { data: userData } = useQuery<GetUsersQuery>(GET_USERS);
  const id = userData?.users[0].id;
  useEffect(() => {
    if (id) {
      setValue("id", id);
    }
  }, [id, setValue]);

  // Mutationフックのセットアップ
  const [createStaff] = useMutation<CreateStaffMutation>(CREATE_STAFF);

  const [opened, { open, close }] = useDisclosure(false);
  const [submittedData, setSubmittedData] = useState({
    id: "",
    email: "",
    name: "",
    nickname: "",
    age: 18,
    mobile: "",
    lineId: "",
    xUsername: ""
  });

  const onSubmit = async (createdStaffValue: CreatedStaffValue) => {
    try {
      const response = await createStaff({
        variables: {
          ...createdStaffValue
        }
      });
      console.log("Response:", response);

      setSubmittedData(createdStaffValue);
      open();

      reset();
    } catch (err) {
      console.error("Error creating staff:", err);
    }
  };

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
                type="hidden"
                {...register("id", { required: true })}
              />
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

          <Modal opened={opened} onClose={close} title="スタッフ登録完了">
            {submittedData && (
              <Box>
                <Text align="center">
                  {submittedData.name}さんがスタッフ登録されました。
                </Text>
              </Box>
            )}
            <Center h={60}>
              <Button onClick={close}>閉じる</Button>
            </Center>
          </Modal>
        </ContentCard>
      </Stack>
    </PageContainer>
  );
};

export default CreateStaff;
