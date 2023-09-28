import { useCallback, useState } from "react";
import type { CustomNextPage } from "next";
import { useAuth0 } from "@auth0/auth0-react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@apollo/client";
import {
  CREATE_STAFF,
  CREATE_STAFF_THUMBNAILS
} from "features/staff/helper/graphql";
import {
  CreateStaffMutation,
  CreateStaffThumbnailsMutation
} from "types/generated/graphql";
import { useUploadToS3 } from "utils/useUploadToS3";
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
import { StaffValidation } from "features/staff/helper/validation";
import { convertToNumber } from "utils/convertToNumber";

/* フォームの型定義 */
type StaffFormValue = z.infer<typeof StaffValidation>;

const CreateStaff: CustomNextPage = () => {
  /* react-hook-formの設定 */
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<StaffFormValue>({
    resolver: zodResolver(StaffValidation)
  });

  /* Auth0のユーザーIDを取得して、react-hook-formにセット */
  const { user } = useAuth0();
  const userId = user?.sub;
  console.log("userId", userId);
  /* S3への画像アップロード関数 */
  const { uploadToS3, s3Loading } = useUploadToS3();

  /* FileInputのリセットをトリガーするための状態 */
  const [fileInputKey, setFileInputKey] = useState<number>(0);

  /* GraphQLのミューテーションを定義 */
  const [createStaff, { loading: createStaffLoading }] =
    useMutation<CreateStaffMutation>(CREATE_STAFF);
  const [createStaffThumbnails, { loading: createStaffThumbnailsLoading }] =
    useMutation<CreateStaffThumbnailsMutation>(CREATE_STAFF_THUMBNAILS);

  /* ローディング状態の定義 */
  const isMutationLoading = createStaffLoading || createStaffThumbnailsLoading;
  const isLoading = isSubmitting || isMutationLoading || s3Loading;

  /* submit時の処理 */
  const onSubmit = useCallback(
    async (staffFormValue: StaffFormValue) => {
      try {
        /* staffIdをnullで初期化 */
        let staffId: number | null = null;

        // 1. テキストデータをHasuraに登録
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

        // 成功した場合
        if (result.data && result.data.insert_staff_one) {
          /* staffIdセット */
          staffId = result.data.insert_staff_one.id;
          /* 通知 */
          notifications.show({
            title: "スタッフ登録完了！",
            message: `${result.data.insert_staff_one.name}さんを登録しました 🤗`,
            icon: <Check />,
            color: "teal",
            autoClose: 5000
          });
        }

        /* 選択された画像をS3にアップロード */
        if (
          staffFormValue.thumbnailUrl &&
          staffFormValue.thumbnailUrl.length > 0
        ) {
          const uploadedUrls = await Promise.all(
            staffFormValue.thumbnailUrl.map((file) => uploadToS3(file as File))
          );

          /* アップロードされた画像のURLをHasuraに登録 */
          const thumbnailResult = await createStaffThumbnails({
            variables: {
              objects: uploadedUrls.map((url) => ({
                staff_id: staffId,
                thumbnail_url: url
              }))
            }
          });

          /* 成功した場合の通知 */
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

        /* フォームをリセット */
        reset();
        /* FileInputのkeyを更新して、コンポーネントを再マウント */
        setFileInputKey((prevKey) => prevKey + 1);
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
    [createStaff, createStaffThumbnails, uploadToS3, reset, userId]
  );

  return (
    <PageContainer title="スタッフ登録" fluid>
      <Stack spacing="xl">
        <ContentCard pos="relative">
          <form onSubmit={handleSubmit(onSubmit, (e) => console.log(e))}>
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
                label="X(twitter) ユーザー名"
                {...register("xUsername")}
                error={errors.xUsername?.message}
              />
              <Controller
                name="thumbnailUrl"
                control={control}
                render={({ field }) => (
                  <FileInput
                    key={fileInputKey}
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
                <Button type="submit" sx={[{ width: "120px" }]}>
                  登録
                </Button>
              </Center>
            </Flex>
          </form>
          <LoadingOverlay visible={isLoading} overlayBlur={2} />
        </ContentCard>
      </Stack>
    </PageContainer>
  );
};

export default CreateStaff;
