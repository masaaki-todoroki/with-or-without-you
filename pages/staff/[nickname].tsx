import { useEffect, useState } from "react";
import type { CustomNextPage } from "next";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GET_STAFF_BY_NICKNAME_IN_ENGLISH } from "features/staff/helper/graphql";
import { PageContainer } from "components/PageContainer";
import { SplitContentCard } from "components/SplitContentCard";
import { GetStaffByNicknameInEnglishQuery } from "types/generated/graphql";
import {
  Box,
  Card,
  Grid,
  Image,
  LoadingOverlay,
  SimpleGrid,
  Space,
  Title
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { ExclamationMark } from "tabler-icons-react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import StaffValueText from "components/StaffValueText";

const StaffDetail: CustomNextPage = () => {
  /* パスパラメータからnicknameを取得 */
  const router = useRouter();
  const { nickname } = router.query;

  /* GraphQLのクエリを定義 */
  const { data, loading, error } = useQuery<GetStaffByNicknameInEnglishQuery>(
    GET_STAFF_BY_NICKNAME_IN_ENGLISH,
    {
      skip: !nickname,
      variables: { nickname_in_english: nickname }
    }
  );

  /* 取得したデータをstaffに格納 */
  const staff = data?.staff[0];

  /* 選択された画像のURLを保持する状態 */
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  useEffect(() => {
    if (staff && staff.staff_thumbnails && staff.staff_thumbnails[0]) {
      setSelectedImage(staff.staff_thumbnails[0].thumbnail_url);
    }
  }, [staff]);

  /* エラー処理 */
  if (error) {
    notifications.show({
      title: "情報取得失敗",
      message: `情報の取得に失敗しました。再度お試しください。`,
      icon: <ExclamationMark />,
      color: "red",
      autoClose: 5000
    });
    console.error(error.message);
  }

  return (
    <PageContainer title="スタッフ" fluid>
      <Grid>
        <SplitContentCard title="スケジュール" splitRatio={8}>
          <Box>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
            />
          </Box>
        </SplitContentCard>
        <SplitContentCard title="スタッフデータ" splitRatio={4}>
          <Box sx={{ marginBottom: "16px" }}>
            <Card>
              <Card.Section mt="sm">
                <Image src={selectedImage} alt={staff && staff.name} />
              </Card.Section>
              <Card.Section inheritPadding mt="sm" pb="md">
                <SimpleGrid cols={3}>
                  {staff &&
                    staff.staff_thumbnails.map((thumbnail, index) => (
                      <Image
                        src={thumbnail.thumbnail_url}
                        key={index}
                        alt={staff.name}
                        radius="sm"
                        onClick={() =>
                          setSelectedImage(thumbnail.thumbnail_url)
                        }
                        style={{
                          cursor: "pointer"
                        }}
                      />
                    ))}
                </SimpleGrid>
              </Card.Section>
            </Card>
            <Title order={6}>ニックネーム</Title>
            <StaffValueText>{staff && staff.nickname}</StaffValueText>
            <Space h="md" />
            <Title order={6}>本名</Title>
            <StaffValueText>{staff && staff.name}</StaffValueText>
            <Space h="md" />
            <Title order={6}>メールアドレス</Title>
            <StaffValueText>{staff && staff.email}</StaffValueText>
            <Space h="md" />
            <Title order={6}>電話番号</Title>
            <StaffValueText>{staff && staff.mobile}</StaffValueText>
            <Space h="md" />
            <Title order={6}>LINE ID</Title>
            <StaffValueText>{staff && staff.line_id}</StaffValueText>
            <Space h="md" />
            <Title order={6}>X(twitter) ユーザー名</Title>
            <StaffValueText>{staff && staff.x_username}</StaffValueText>
            <Space h="md" />
            <Title order={6}>年齢</Title>
            <StaffValueText>{staff && staff.age} 歳</StaffValueText>
            <Space h="md" />
            <Title order={6}>身長</Title>
            <StaffValueText>{staff && staff.height} cm</StaffValueText>
            <Space h="md" />
            <Title order={6}>血液型</Title>
            <StaffValueText>{staff && staff.blood_type} 型</StaffValueText>
            <Space h="md" />
            <Title order={6}>コメント</Title>
            <StaffValueText>{staff && staff.comment}</StaffValueText>
          </Box>
          <LoadingOverlay visible={loading} overlayBlur={2} />
        </SplitContentCard>
      </Grid>
    </PageContainer>
  );
};

export default StaffDetail;
