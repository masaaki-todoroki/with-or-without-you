import React from "react";
import { Center, Group, rem } from "@mantine/core";
import { Photo } from "tabler-icons-react";
import { FileInputProps } from "@mantine/core";

export const Value: React.FC<{ file: File }> = ({ file }) => {
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

export const ValueComponent: FileInputProps["valueComponent"] = ({ value }) => {
  if (Array.isArray(value)) {
    return (
      <Group spacing="sm" py="xs">
        {value.map((file, index) => (
          <Value file={file} key={index} />
        ))}
      </Group>
    );
  }
  if (value) {
    return <Value file={value} />;
  }
  return null;
};
