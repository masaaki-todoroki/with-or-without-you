import React from "react";
import { Center, FileInputProps, Group, rem } from "@mantine/core";
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
        padding: `${rem(3)} ${rem(7)}`,
        borderRadius: theme.radius.sm
      })}
    >
      <Photo size={rem(14)} style={{ marginRight: rem(5) }} />
      <span
        style={{
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          overflow: "hidden",
          maxWidth: rem(200),
          display: "inline-block"
        }}
      >
        {file.name}
      </span>
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
