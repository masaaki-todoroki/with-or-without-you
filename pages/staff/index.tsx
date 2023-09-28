import type { CustomNextPage } from "next";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_STAFF } from "features/staff/helper/graphql";
import { GetStaffQuery } from "types/generated/graphql";
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
import { notifications } from "@mantine/notifications";
import { ExclamationMark } from "tabler-icons-react";
import { PageContainer } from "components/PageContainer";
import { ContentCard } from "components/ContentCard";
import { getPath } from "utils/path";

const StaffList: CustomNextPage = () => {
  const router = useRouter();

  const { data, loading, error } = useQuery<GetStaffQuery>(GET_STAFF);

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
  const noStaffImage =
    "https://images.unsplash.com/photo-1515138692129-197a2c608cfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=400&q=80";

  return (
    <PageContainer title="スタッフ" fluid>
      <Stack spacing="xl">
        <Button
          style={{ width: "160px" }}
          onClick={() => router.push(getPath("STAFF_NEW_CREATE"))}
        >
          スタッフ登録
        </Button>

        <ContentCard title="スタッフ一覧">
          <Grid gutter="md">
            {data &&
              data.staff.map((staff) => {
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
                          style={
                            imageSrc === noStaffImage ? { opacity: "0.5" } : {}
                          }
                        />
                        {imageSrc === noStaffImage && (
                          <Box
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              color: "white",
                              fontWeight: "bold",
                              fontSize: "1.5rem",
                              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
                            }}
                          >
                            Coming Soon...
                          </Box>
                        )}
                      </Card.Section>
                      <Stack sx={{ marginTop: "16px" }} spacing={"xs"}>
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
                          mt="md"
                          radius="md"
                          style={{ marginTop: "0" }}
                          onClick={() =>
                            router.push(
                              getPath("STAFF_DETAIL", staff.nickname_in_english)
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
      <LoadingOverlay visible={loading} overlayBlur={2} />
    </PageContainer>
  );
};

export default StaffList;
