import { useRef, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Dialog, Text, Group, TextInput, Button } from "@mantine/core";
import { formatDate } from "utils/formatDate";

type Props = {
  isOpenedDateDialog: boolean;
  close: () => void;
  selectedDate: Date;
};

const DateDialog = ({ isOpenedDateDialog, close, selectedDate }: Props) => {
  const inputScheduleRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (isOpenedDateDialog && inputScheduleRef.current !== null) {
      inputScheduleRef.current.focus();
    }
  }, [isOpenedDateDialog]);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      schedule: ""
    }
  });

  const onSubmit = (scheduleFormValue: { schedule: string }) => {
    console.log(scheduleFormValue.schedule);
    reset();
    close();
  };

  return (
    <Dialog
      opened={isOpenedDateDialog}
      withCloseButton
      onClose={close}
      size="lg"
      radius="md"
      position={{ top: 20, left: 20 }}
    >
      <Text size="sm" mb="xs" fw={500}>
        {formatDate(selectedDate)}
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
                sx={{ flex: 1 }}
                ref={inputScheduleRef}
              />
            )}
          />
          <Button type="submit">登録</Button>
        </Group>
      </form>
    </Dialog>
  );
};

export default DateDialog;
