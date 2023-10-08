import { useCallback } from "react";
import type { CustomNextPage } from "next";
import { useRouter } from "next/router";
import { useAuth0 } from "@auth0/auth0-react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@apollo/client";
import {
  CREATE_STAFF,
  CREATE_STAFF_THUMBNAILS
} from "features/staff/helpers/graphql";
import {
  CreateStaffMutation,
  CreateStaffThumbnailsMutation
} from "types/generated/graphql";
import { useUploadToS3 } from "hooks/useUploadToS3";
import { FileBadgeList } from "components/FileBadgeList";
import {
  Button,
  Center,
  FileInput,
  Flex,
  LoadingOverlay,
  Stack,
  Textarea,
  TextInput
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { Check, ExclamationMark } from "tabler-icons-react";
import { PageContainer } from "components/PageContainer";
import { ContentCard } from "components/ContentCard";
import { StaffValidation } from "features/staff/helpers/validation";
import { convertToNumber } from "utils/convertToNumber";
import { getPath } from "utils/path";

type StaffFormValue = z.infer<typeof StaffValidation>;

const CreateStaff: CustomNextPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting }
  } = useForm<StaffFormValue>({
    resolver: zodResolver(StaffValidation)
  });

  const { user } = useAuth0();
  const userId = user?.sub;

  const { uploadToS3, loading: s3Loading } = useUploadToS3();

  const router = useRouter();

  const [createStaff, { loading: createStaffLoading }] =
    useMutation<CreateStaffMutation>(CREATE_STAFF);
  const [createStaffThumbnails, { loading: createStaffThumbnailsLoading }] =
    useMutation<CreateStaffThumbnailsMutation>(CREATE_STAFF_THUMBNAILS);

  const onSubmit = useCallback(
    async (staffFormValue: StaffFormValue) => {
      try {
        const result = await createStaff({
          variables: {
            ...staffFormValue,
            nickname_in_english: staffFormValue.nicknameInEnglish,
            blood_type: staffFormValue.bloodType,
            line_id: staffFormValue.lineId,
            x_username: staffFormValue.xUsername,
            user_id: userId
          }
        });

        const newStaff = result.data?.insert_staff_one;

        if (newStaff) {
          notifications.show({
            title: "スタッフ登録完了！",
            message: `${newStaff.name}さんを登録しました 🤗`,
            icon: <Check />,
            color: "teal",
            autoClose: 5000
          });
        }

        if (
          staffFormValue.thumbnailUrl &&
          staffFormValue.thumbnailUrl.length > 0
        ) {
          const uploadedUrls = await Promise.all(
            staffFormValue.thumbnailUrl.map((file) => uploadToS3(file as File))
          );

          const thumbnailResult = await createStaffThumbnails({
            variables: {
              objects: uploadedUrls.map((url) => ({
                staff_id: newStaff?.id,
                thumbnail_url: url
              }))
            }
          });

          if (thumbnailResult.data) {
            notifications.show({
              title: "画像アップロード完了！",
              message: "画像が正常にアップロードされました 🤗",
              icon: <Check />,
              color: "teal",
              autoClose: 5000
            });
          }
        }
        const staffId = newStaff?.id;
        if (staffId) {
          router.push(getPath("STAFF_DETAIL", staffId.toString()));
        }
      } catch (err) {
        notifications.show({
          title: "スタッフ登録失敗",
          message: `登録に失敗しました。再度お試しください。`,
          icon: <ExclamationMark />,
          color: "red",
          autoClose: 5000
        });
        console.error(err);
      }
    },
    [createStaff, createStaffThumbnails, uploadToS3, userId, router]
  );

  const isMutationLoading = createStaffLoading || createStaffThumbnailsLoading;
  const isLoading = isSubmitting || isMutationLoading || s3Loading;
  if (isLoading) {
    return <LoadingOverlay visible={isLoading} overlayBlur={2} />;
  }

  return (
    <PageContainer title="スタッフ登録" fluid>
      <Stack spacing="xl">
        <ContentCard sx={{ position: "relative" }}>
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
                label="ローマ字ニックネーム"
                {...register("nicknameInEnglish", { required: true })}
                placeholder="shibasakikou"
                withAsterisk
                error={errors.nicknameInEnglish?.message}
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
                label="身長"
                {...register("height", {
                  required: true,
                  setValueAs: convertToNumber
                })}
                placeholder="160"
                withAsterisk
                error={errors.height?.message}
              />
              <TextInput
                label="血液型"
                {...register("bloodType", {
                  required: true
                })}
                withAsterisk
                placeholder="A"
                error={errors.bloodType?.message}
              />
              <Textarea
                label="紹介文"
                {...register("comment")}
                error={errors.comment?.message}
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
                label="X(Twitter) ユーザー名"
                {...register("xUsername")}
                error={errors.xUsername?.message}
              />
              <Controller
                name="thumbnailUrl"
                control={control}
                render={({ field }) => (
                  <FileInput
                    label="画像を選択 (複数可)"
                    placeholder="ここをクリックして画像を選択してください。"
                    multiple
                    clearable={true}
                    valueComponent={FileBadgeList}
                    {...field}
                  />
                )}
              />
              <Center>
                <Button type="submit" w={160}>
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
