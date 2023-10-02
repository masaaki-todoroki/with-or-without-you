import type { CustomNextPage } from "next";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_STAFF_LIST } from "features/staff/helper/graphql";
import { GetStaffListQuery } from "types/generated/graphql";
import {
  Box,
  Button,
  Card,
  Grid,
  Group,
  Image,
  LoadingOverlay,
  Text,
  Stack
} from "@mantine/core";
import { PageContainer } from "components/PageContainer";
import { ContentCard } from "components/ContentCard";
import { getPath } from "utils/path";
import ErrorComponent from "components/ErrorComponent";

const StaffList: CustomNextPage = () => {
  const router = useRouter();

  const {
    data: staffListData,
    loading,
    error
  } = useQuery<GetStaffListQuery>(GET_STAFF_LIST);

  const staffList = staffListData?.staff;
  const noStaffImage = "/staff/noStaffImage.png";

  if (loading) {
    return <LoadingOverlay visible={loading} overlayBlur={2} />;
  }

  if (error) {
    console.error(error.message);
    return <ErrorComponent message="スタッフデータの取得に失敗しました" />;
  }

  if (!staffListData) {
    return <ErrorComponent message="スタッフデータが見つかりませんでした" />;
  }

  return (
    <PageContainer title="スタッフ" fluid>
      <Stack spacing="xl">
        <Button
          w={160}
          onClick={() => router.push(getPath("STAFF_NEW_CREATE"))}
        >
          スタッフ登録
        </Button>

        <ContentCard title="スタッフ一覧">
          <Grid gutter="md">
            {staffList &&
              staffList.map((staff) => {
                const imageSrc =
                  staff && staff.staff_thumbnails[0]
                    ? staff.staff_thumbnails[0].thumbnail_url
                    : noStaffImage;

                return (
                  <Grid.Col xs={6} sm={6} md={4} lg={3} xl={3} key={staff.id}>
                    <Card shadow="sm" padding="lg" radius="md" withBorder>
                      <Card.Section>
                        <Image
                          src={imageSrc}
                          alt={staff.name}
                          opacity={imageSrc === noStaffImage ? 0.7 : 1}
                        />
                        {imageSrc === noStaffImage && (
                          <Box
                            sx={{
                              position: "absolute",
                              top: "55%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              color: "white",
                              fontWeight: "bold",
                              fontSize: "1.5rem",
                              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
                            }}
                          >
                            Coming
                            <br />
                            Soon ...
                          </Box>
                        )}
                      </Card.Section>
                      <Stack mt={16} spacing="xs">
                        <Box>
                          <Text weight="bold" size="xl">
                            {staff.name}
                          </Text>
                        </Box>
                        <Group>
                          <Text>{staff.age} 歳</Text>
                          <Text>{staff.height} cm</Text>
                          <Text>{staff.blood_type} 型</Text>
                        </Group>
                        <Button
                          variant="light"
                          color="blue"
                          fullWidth
                          radius="md"
                          onClick={() =>
                            router.push(
                              getPath("STAFF_DETAIL", staff.id.toString())
                            )
                          }
                        >
                          詳細
                        </Button>
                      </Stack>
                    </Card>
                  </Grid.Col>
                );
              })}
          </Grid>
        </ContentCard>
      </Stack>
    </PageContainer>
  );
};

export default StaffList;
