import { S3 } from "aws-sdk";
import { useMemo, useCallback } from "react";

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
      const fileName = `${Date.now()}-${file.name}`; // アップロード時のファイル名を作成
      const params = {
        // S3へのアップロードに必要な情報をまとめるオブジェクト
        Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME!,
        Key: fileName, // Key: アップロードするファイルのキーを指定
        ContentType: file.type, // ContentType: アップロードするファイルのMIMEタイプを指定
        Body: file // Body: アップロードするファイルデータを指定
      };
      try {
        const data = await s3.upload(params).promise(); // S3に画像をアップロードする
        console.log("画像アップロード成功:", data.Location); // アップロード成功時の処理
        return data.Location; // アップロードされた画像のURLを取得
      } catch (error) {
        console.error("画像アップロードエラー:", error); // アップロードエラー発生時の処理
        return null; // null値を返す
      }
    },
    [s3]
  );

  return { uploadToS3 };
};
