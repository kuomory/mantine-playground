import { AppShell, Burger, Group, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function Page() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      footer={{ height: 60 }}
    >
      <AppShell.Header>
        <Group align="center" justify="space-between" h="100%" px="md">
          <Text
            variant="gradient"
            gradient={{ from: "grape", to: "blue" }}
            size="xl"
            fw="bolder"
          >
            Logo
          </Text>
          <Burger opened={opened} onClick={toggle} />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>Navbar</AppShell.Navbar>
      <AppShell.Main>Main</AppShell.Main>
      <AppShell.Footer>Footer</AppShell.Footer>
    </AppShell>
  );
}
