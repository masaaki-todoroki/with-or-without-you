import { Box, Group, Autocomplete } from "@mantine/core";
import { Search } from "tabler-icons-react";

export const Header = () => (
  <Box
    component="header"
    sx={(theme) => ({
      padding: `${theme.spacing.xs} ${theme.spacing.md}`,
      borderBottom: `1px solid ${theme.colors.gray[2]}`,
      backgroundColor: theme.white
    })}
  >
    <Group spacing="lg" noWrap>
      <SearchForm />
    </Group>
  </Box>
);

const SearchForm = () => (
  <Autocomplete
    data={[]}
    size="lg"
    placeholder="Search"
    icon={<Search size={18} />}
    styles={{
      root: { flexGrow: 1 },
      input: { border: 0, backgroundColor: "transparent" }
    }}
    onChange={(value) => {
      console.log(value);
    }}
  />
);
