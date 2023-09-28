import { S3 } from "aws-sdk";
import { useMemo, useCallback, useState } from "react";
import { notifications } from "@mantine/notifications";
import { ExclamationMark } from "tabler-icons-react";

/* 画像を3:4のアスペクト比に変更する関数 */
const resizeImageTo3by4 = async (file: File): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      const width = img.width;
      const height = (width * 4) / 3;
      canvas.width = width;
      canvas.height = height;

      /* 余白の色を白に設定 */
      ctx!.fillStyle = "white";
      ctx!.fillRect(0, 0, width, height);

      /* 画像を中央に描画 */
      const offsetY = (height - img.height) / 2;
      ctx!.drawImage(img, 0, offsetY);

      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error("画像の変換に失敗しました。"));
        }
      }, file.type);
    };

    img.onerror = () => {
      reject(new Error("画像の読み込みに失敗しました。"));
    };

    img.src = URL.createObjectURL(file);
  });
};

export const useUploadToS3 = () => {
  /* ローディング状態の定義 */
  const [s3Loading, setS3Loading] = useState<boolean>(false);

  const s3 = useMemo(() => {
    return new S3({
      accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY!,
      region: process.env.NEXT_PUBLIC_AWS_REGION
    });
  }, []);

  const uploadToS3 = useCallback(
    async (file: File) => {
      setS3Loading(true);

      /* 画像を3:4のアスペクト比に変更 */
      const resizedBlob = await resizeImageTo3by4(file);

      const fileName = `${Date.now()}-${file.name}`;
      const params = {
        Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME!,
        Key: fileName,
        ContentType: file.type,
        Body: resizedBlob
      };
      try {
        const data = await s3.upload(params).promise();
        setS3Loading(false);
        return data.Location;
      } catch (err) {
        setS3Loading(false);
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
  return { uploadToS3, s3Loading };
};
