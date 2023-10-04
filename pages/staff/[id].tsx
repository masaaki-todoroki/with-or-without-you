import { useCallback, useEffect, useRef, useState } from "react";
import type { CustomNextPage } from "next";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";
import { GET_STAFF_BY_ID } from "features/staff/helper/graphql";
import { PageContainer } from "components/PageContainer";
import { SplitContentCard } from "components/SplitContentCard";
import { GetStaffByIdQuery } from "types/generated/graphql";
import {
  Box,
  Button,
  Card,
  Dialog,
  Grid,
  Group,
  Image,
  LoadingOverlay,
  SimpleGrid,
  Stack,
  Text,
  TextInput
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import StaffDetailTextContainer from "features/staff/component/StaffDetailTextContainer";
import ErrorMessage from "components/ErrorMessage";

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
  const noStaffImage = "/staff/noStaffImage.png";
  const thumbnail =
    staff && staff.staff_thumbnails && staff.staff_thumbnails[0]
      ? staff.staff_thumbnails[0].thumbnail_url
      : noStaffImage;
  const [selectedImageUrl, setSelectedImageUrl] = useState(thumbnail);
  useEffect(() => {
    setSelectedImageUrl(thumbnail);
  }, [thumbnail]);

  const [selectedDate, setSelectedDate] = useState("");
  const [opened, handlers] = useDisclosure(false);
  const handleDateClick = useCallback(
    (arg: DateClickArg) => {
      const date = new Date(arg.dateStr);
      const formattedDate = format(date, "yyyy.MM.dd（E）", { locale: ja });
      setSelectedDate(formattedDate);
      handlers.toggle();
    },
    [handlers]
  );

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      schedule: ""
    }
  });

  const inputScheduleRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (opened && inputScheduleRef.current !== null) {
      inputScheduleRef.current.focus();
    } else {
      reset();
    }
  }, [opened, reset]);

  const onSubmit = (scheduleFormValue: { schedule: string }) => {
    console.log(scheduleFormValue.schedule);
    handlers.close();
    reset();
  };

  if (loading) {
    return <LoadingOverlay visible={loading} overlayBlur={2} />;
  }

  if (error) {
    console.error(error.message);
    return <ErrorMessage message="スタッフデータの取得に失敗しました" />;
  }

  if (!staffData) {
    return <ErrorMessage message="スタッフデータが見つかりませんでした" />;
  }

  return (
    <PageContainer title="スタッフ" fluid>
      <Grid>
        <SplitContentCard title="スケジュール" splitRatio={8}>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay"
            }}
            dateClick={handleDateClick}
          />
          <Dialog
            opened={opened}
            withCloseButton
            onClose={handlers.close}
            size="lg"
            radius="md"
            position={{ top: 20, left: 20 }}
          >
            <Text size="sm" mb="xs" fw={500}>
              {selectedDate}
            </Text>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Group align="flex-end">
                <Controller
                  name="schedule"
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      {...field}
                      placeholder="予定を入力"
                      style={{ flex: 1 }}
                      ref={inputScheduleRef}
                    />
                  )}
                />
                <Button type="submit">登録</Button>
              </Group>
            </form>
          </Dialog>
        </SplitContentCard>
        <SplitContentCard title="スタッフデータ" splitRatio={4}>
          <Card>
            <Card.Section mt="sm">
              <Image
                src={selectedImageUrl}
                alt={staff?.name || ""}
                opacity={selectedImageUrl === noStaffImage ? 0.7 : 1}
              />
              {selectedImageUrl === noStaffImage && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "75%",
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
              <StaffDetailTextContainer
                title="ニックネーム"
                staffDetail={staff.nickname}
              />
              <StaffDetailTextContainer title="年齢" staffDetail={staff.age} />
              <StaffDetailTextContainer title="身長" staffDetail={staff.age} />
              <StaffDetailTextContainer
                title="血液型"
                staffDetail={staff.blood_type}
              />
              <StaffDetailTextContainer
                title="コメント"
                staffDetail={staff.comment || undefined}
              />
              <StaffDetailTextContainer title="本名" staffDetail={staff.name} />
              <StaffDetailTextContainer
                title="メールアドレス"
                staffDetail={staff.email}
              />
              <StaffDetailTextContainer
                title="電話番号"
                staffDetail={staff.mobile}
              />
              <StaffDetailTextContainer
                title="LINE ID"
                staffDetail={staff.line_id || undefined}
              />
              <StaffDetailTextContainer
                title="X(Twitter) ユーザー名"
                staffDetail={staff.x_username || undefined}
              />
            </Stack>
          )}
        </SplitContentCard>
      </Grid>
    </PageContainer>
  );
};

export default StaffDetail;
