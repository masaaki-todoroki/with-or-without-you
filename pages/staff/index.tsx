import type { CustomNextPage } from "next";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Card,
  Grid,
  Group,
  Image,
  Text,
  Stack
} from "@mantine/core";
import { PageContainer } from "components/PageContainer";
import { ContentCard } from "components/ContentCard";
import { getPath } from "utils/path";

const StaffList: CustomNextPage = () => {
  const router = useRouter();

  const staffs = [
    {
      id: 1,
      name: "姫宮あんず",
      age: 36,
      height: 157,
      bloodType: "A",
      image:
        "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
    },
    {
      id: 2,
      name: "汐見かりん",
      age: 34,
      height: 152,
      bloodType: "B",
      image:
        "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
    },
    {
      id: 3,
      name: "大塚ゆみ",
      age: 40,
      height: 167,
      bloodType: "A",
      image:
        "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
    },
    {
      id: 4,
      name: "早乙女えみ",
      age: 34,
      height: 168,
      bloodType: "B",
      image:
        "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
    },
    {
      id: 5,
      name: "神楽ゆりこ",
      age: 38,
      height: 155,
      bloodType: "O",
      image:
        "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
    },
    {
      id: 6,
      name: "君島えりか",
      age: 30,
      height: 157,
      bloodType: "A",
      image:
        "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
    },
    {
      id: 7,
      name: "小倉ゆかり",
      age: 30,
      height: 151,
      bloodType: "B",
      image:
        "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
    },
    {
      id: 8,
      name: "秋月いろは",
      age: 33,
      height: 152,
      bloodType: "A",
      image:
        "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
    },
    {
      id: 9,
      name: "石川りりか",
      age: 38,
      height: 163,
      bloodType: "A",
      image:
        "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
    },
    {
      id: 10,
      name: "川口りえ",
      age: 33,
      height: 161,
      bloodType: "A",
      image:
        "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
    }
  ];

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
            {staffs.map((staff) => (
              <Grid.Col xs={6} sm={6} md={4} lg={3} xl={3} key={staff.id}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section>
                    <Image src={staff.image} alt={staff.name} />
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
                      <Text>{staff.bloodType} 型</Text>
                    </Group>
                    <Button
                      variant="light"
                      color="blue"
                      fullWidth
                      mt="md"
                      radius="md"
                      style={{ marginTop: "0" }}
                      onClick={() => router.push(getPath("STAFF_DETAIL"))}
                    >
                      詳細
                    </Button>
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </ContentCard>
      </Stack>
    </PageContainer>
  );
};

export default StaffList;
