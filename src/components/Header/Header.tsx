import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';
import { ActionIcon, Button, Grid, Group, Title } from '@mantine/core';

export const Header = () => {
  return (
    <Grid px={15} py={8}>
      <Grid.Col span={4}>
        <Title order={2}>Hannah Hsiao</Title>
      </Grid.Col>
      <Grid.Col span={4}>
        <Group justify="center">
          <Button variant="subtle">About me</Button>
          <Button variant="subtle">Projects</Button>
          <Button variant="subtle">Skills</Button>
        </Group>
      </Grid.Col>
      <Grid.Col span={4}>
        <Group justify="flex-end" align="center" h="100%">
          <ActionIcon variant="subtle" aria-label="Settings">
            <IconBrandGithub style={{ width: '70%', height: '70%' }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant="subtle" aria-label="Settings">
            <IconBrandLinkedin style={{ width: '70%', height: '70%' }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant="subtle" aria-label="Settings">
            <IconMail style={{ width: '70%', height: '70%' }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Grid.Col>
    </Grid>
  );
};
