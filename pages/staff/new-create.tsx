import { useCallback, useEffect } from "react";
import type { CustomNextPage } from "next";
import { useAuth0 } from "@auth0/auth0-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@apollo/client";
import { CREATE_STAFF, REGISTER_STAFF_THUMBNAILS } from "queries/queries";
import {
  CreateStaffMutation,
  RegisterStaffThumbnailsMutation
} from "types/generated/graphql";
import { useUploadToS3 } from "utils/useUploadToS3";
import { ValueComponent } from "components/FileValueComponent";
import {
  Button,
  Center,
  FileInput,
  Flex,
  Stack,
  Textarea,
  TextInput
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { Check, ExclamationMark } from "tabler-icons-react";
import { PageContainer } from "components/PageContainer";
import { ContentCard } from "components/ContentCard";
import {
  StaffBasicDataValidation,
  // StaffThumbnailsValidation,
  StaffTotalValidation
} from "features/staff/helper/validation";

/* フォームの型定義 */
type CreatedStaffBasicData = z.infer<typeof StaffBasicDataValidation>;
// type RegisteredStaffThumbnails = z.infer<typeof StaffThumbnailsValidation>;
type TotalStaffData = z.infer<typeof StaffTotalValidation>;

const CreateStaff: CustomNextPage = () => {
  /* react-hook-formの設定 以前のVer. */
  // const {
  //   register,
  //   handleSubmit,
  //   setValue,
  //   reset,
  //   formState: { errors }
  // } = useForm<CreatedStaffBasicData>({
  //   resolver: zodResolver(StaffBasicDataValidation)
  // });
  /* react-hook-formの設定 画像登録もできるようにしたもの */
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors }
  } = useForm<TotalStaffData>({
    resolver: zodResolver(StaffTotalValidation)
  });

  /* Auth0のユーザーIDを取得して、react-hook-formにセット */
  const { user } = useAuth0();
  useEffect(() => {
    user && user.sub && setValue("userId", user.sub);
  }, [user, setValue]);

  /* mutation定義 */
  const [createStaffBasicData] = useMutation<CreateStaffMutation>(CREATE_STAFF);
  const [registerStaffThumbnails] =
    useMutation<RegisterStaffThumbnailsMutation>(REGISTER_STAFF_THUMBNAILS);

  /* 文字列を数値に変換する関数 */
  const convertToNumber = (value: string) => {
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? -1 : parsed;
  };

  /* S3への画像アップロード関数 */
  const { uploadToS3 } = useUploadToS3();

  /* submit時の処理 */
  const onSubmit = useCallback(
    //   async (createdStaffBasicData: CreatedStaffBasicData) => {
    //     try {
    //       const result = await createStaffBasicData({
    //         variables: {
    //           ...createdStaffBasicData,
    //           nickname_in_english: createdStaffBasicData.nicknameInEnglish,
    //           line_id: createdStaffBasicData.lineId,
    //           x_username: createdStaffBasicData.xUsername,
    //           user_id: createdStaffBasicData.userId,
    //           blood_type: createdStaffBasicData.bloodType
    //         }
    //       });
    //       result.data &&
    //         result.data.insert_staff_one &&
    //         notifications.show({
    //           title: "スタッフ登録完了！",
    //           message: `${result.data.insert_staff_one.name}さん、登録しました 🤗`,
    //           icon: <Check />,
    //           color: "teal",
    //           autoClose: 5000
    //         });
    //       reset();
    //     } catch (err) {
    //       notifications.show({
    //         title: "スタッフ登録失敗",
    //         message: `登録に失敗しました。登録されていないメールアドレスで再度お試しください。`,
    //         icon: <ExclamationMark />,
    //         color: "red",
    //         autoClose: 5000
    //       });
    //       console.error(err);
    //     }
    //   },
    //   [createStaffBasicData, reset]
    // );

    async (totalStaffData: TotalStaffData) => {
      try {
        // 1. テキストデータをHasuraに登録
        const result = await createStaffBasicData({
          variables: {
            ...totalStaffData,
            nickname_in_english: totalStaffData.nicknameInEnglish,
            line_id: totalStaffData.lineId,
            x_username: totalStaffData.xUsername,
            user_id: totalStaffData.userId,
            blood_type: totalStaffData.bloodType
          }
        });

        // 成功した場合の通知
        if (result.data && result.data.insert_staff_one) {
          // notifications.show({
          //   title: "スタッフ登録完了！",
          //   message: `${result.data.insert_staff_one.name}さん、登録しました 🤗`,
          //   icon: <Check />,
          //   color: "teal",
          //   autoClose: 5000
          // });
        }

        // 2. 選択された画像をS3にアップロード
        if (
          totalStaffData.thumbnailUrl &&
          totalStaffData.thumbnailUrl.length > 0
        ) {
          const uploadedUrls = await Promise.all(
            totalStaffData.thumbnailUrl.map((file) => uploadToS3(file as File))
          );

          // 3. アップロードされた画像のURLをHasuraに登録
          const thumbnailResult = await registerStaffThumbnails({
            variables: {
              objects: uploadedUrls.map((url) => ({
                staff_id: result.data!.insert_staff_one!.id,
                thumbnail_url: url
              }))
            }
          });

          // 成功した場合の通知
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

        // フォームをリセット
        reset();
      } catch (err) {
        // エラーが発生した場合の通知
        notifications.show({
          title: "スタッフ登録失敗",
          message: `登録に失敗しました。登録されていないメールアドレスで再度お試しください。`,
          icon: <ExclamationMark />,
          color: "red",
          autoClose: 5000
        });
        console.error(err);
      }
    },
    [createStaffBasicData, registerStaffThumbnails, uploadToS3, reset]
  );

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
                label="X ユーザー名"
                {...register("xUsername")}
                error={errors.xUsername?.message}
              />
              <FileInput
                label="画像を選択 (複数可)"
                placeholder="ここをクリックして画像を選択してください。"
                multiple
                valueComponent={ValueComponent}
                {...register("thumbnailUrl")}
                onChange={(files) => {
                  setValue("thumbnailUrl", files);
                }}
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
