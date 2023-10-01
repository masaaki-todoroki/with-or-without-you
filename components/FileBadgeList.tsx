import { Center, FileInputProps, Group, Text } from "@mantine/core";
import { Photo } from "tabler-icons-react";

type Props = {
  file: File;
};

export const FileBadge = ({ file }: Props) => {
  return (
    <Center
      inline
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[7]
            : theme.colors.gray[1],
        fontSize: theme.fontSizes.xs,
        padding: "3px 7px",
        borderRadius: theme.radius.sm
      })}
    >
      <Photo size="14px" style={{ marginRight: "5px" }} />
      <Text
        component="span"
        sx={{
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          overflow: "hidden",
          maxWidth: "200px",
          display: "inline-block"
        }}
      >
        {file.name}
      </Text>
    </Center>
  );
};

export const FileBadgeList: FileInputProps["valueComponent"] = ({ value }) => {
  if (Array.isArray(value)) {
    return (
      <Group spacing="sm" py="xs">
        {value.map((file, index) => (
          <FileBadge file={file} key={index} />
        ))}
      </Group>
    );
  }
  if (value) {
    return <FileBadge file={value} />;
  }
  return null;
};
