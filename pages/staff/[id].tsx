import { useEffect, useState } from "react";
import type { CustomNextPage } from "next";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GET_STAFF_BY_ID } from "features/staff/helper/graphql";
import { PageContainer } from "components/PageContainer";
import { SplitContentCard } from "components/SplitContentCard";
import { GetStaffByIdQuery } from "types/generated/graphql";
import {
  Box,
  Card,
  Grid,
  Image,
  LoadingOverlay,
  SimpleGrid,
  Stack
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { ExclamationMark } from "tabler-icons-react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import StaffDataContainer from "features/staff/component/StaffDataContainer";

const StaffDetail: CustomNextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: staffData,
    loading,
    error
  } = useQuery<GetStaffByIdQuery>(GET_STAFF_BY_ID, {
    skip: !id,
    variables: { id: parseInt(id as string) }
  });

  const staff = staffData?.staff_by_pk;

  const thumbnail =
    staff && staff.staff_thumbnails && staff.staff_thumbnails[0]
      ? staff.staff_thumbnails[0].thumbnail_url
      : undefined;

  const [selectedImageUrl, setSelectedImageUrl] = useState(thumbnail);

  useEffect(() => {
    setSelectedImageUrl(thumbnail);
  }, [thumbnail]);

  if (!staffData) return null;

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
          <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
        </SplitContentCard>
        <SplitContentCard title="スタッフデータ" splitRatio={4}>
          <Card>
            <Card.Section mt="sm">
              <Image src={selectedImageUrl} alt={staff?.name || ""} />
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
                        setSelectedImageUrl(thumbnail.thumbnail_url)
                      }
                      sx={{
                        cursor: "pointer"
                      }}
                    />
                  ))}
              </SimpleGrid>
            </Card.Section>
          </Card>
          {staff && (
            <Stack>
              <Box>
                <StaffDataContainer
                  title="ニックネーム"
                  staffData={staff.nickname}
                />
              </Box>
              <Box>
                <StaffDataContainer title="年齢" staffData={staff.age} />
              </Box>
              <Box>
                <StaffDataContainer title="身長" staffData={staff.age} />
              </Box>
              <Box>
                <StaffDataContainer
                  title="血液型"
                  staffData={staff.blood_type}
                />
              </Box>
              <Box>
                <StaffDataContainer
                  title="コメント"
                  staffData={staff.comment}
                />
              </Box>
              <Box>
                <StaffDataContainer title="本名" staffData={staff.name} />
              </Box>
              <Box>
                <StaffDataContainer
                  title="メールアドレス"
                  staffData={staff.email}
                />
              </Box>
              <Box>
                <StaffDataContainer title="電話番号" staffData={staff.mobile} />
              </Box>
              <Box>
                <StaffDataContainer title="LINE ID" staffData={staff.line_id} />
              </Box>
              <Box>
                <StaffDataContainer
                  title="X(Twitter) ユーザー名"
                  staffData={staff.x_username}
                />
              </Box>
            </Stack>
          )}
          <LoadingOverlay visible={loading} overlayBlur={2} />
        </SplitContentCard>
      </Grid>
    </PageContainer>
  );
};

export default StaffDetail;
