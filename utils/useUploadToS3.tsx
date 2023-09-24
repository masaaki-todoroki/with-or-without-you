import { S3 } from "aws-sdk";
import { useMemo, useCallback } from "react";
import { notifications } from "@mantine/notifications";
import { ExclamationMark } from "tabler-icons-react";

export const useUploadToS3 = () => {
  const s3 = useMemo(() => {
    return new S3({
      accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY!,
      region: process.env.NEXT_PUBLIC_AWS_REGION
    });
  }, []);

  const uploadToS3 = useCallback(
    async (file: File) => {
      const fileName = `${Date.now()}-${file.name}`;
      const params = {
        Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME!,
        Key: fileName,
        ContentType: file.type,
        Body: file
      };
      try {
        const data = await s3.upload(params).promise();
        return data.Location;
      } catch (err) {
        notifications.show({
          title: "画像アップロード失敗",
          message: `画像のアップロードに失敗しました。再度お試しください。`,
          icon: <ExclamationMark />,
          color: "red",
          autoClose: 5000
        });
        console.error(err);
        return null;
      }
    },
    [s3]
  );
  return { uploadToS3 };
};
