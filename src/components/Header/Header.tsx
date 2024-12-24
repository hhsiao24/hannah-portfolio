import { IconBrandGithub, IconBrandLinkedin, IconMail, IconMenu2 } from '@tabler/icons-react';
import { HashLink } from 'react-router-hash-link';
import { ActionIcon, Button, Grid, Group, Menu, Title } from '@mantine/core';
import { useWindowSize } from '@/hooks/useWindowSize';

export const Header = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:hhsiao24@gmail.com?';
  };
  const [width, _] = useWindowSize();
  return (
    <Grid px={15} py={8}>
      <Grid.Col span={3}>
        <Title order={2}>Hannah Hsiao</Title>
      </Grid.Col>
      {width > 500 ? (
        <>
          <Grid.Col span={6}>
            <Group justify="center">
              <Button component={HashLink} variant="subtle" to="/#about-me" smooth>
                About me
              </Button>
                <Button component={HashLink} variant="subtle" to="/#experiences" smooth>Experiences</Button>
              <Button component={HashLink} variant="subtle" to="/#projects" smooth>
                Projects
              </Button>
              <Button component={HashLink} variant="subtle" to="/#skills" smooth>Skills</Button>
            </Group>
          </Grid.Col>
          <Grid.Col span={3}>
            <Group justify="flex-end" align="center" h="100%">
              <a href="https://github.com/hhsiao24" target="_blank" rel="noopener noreferrer">
                <ActionIcon variant="subtle" aria-label="Settings">
                  <IconBrandGithub style={{ width: '70%', height: '70%' }} stroke={1.5} />
                </ActionIcon>
              </a>
              <a
                href="https://www.linkedin.com/in/hannah-hsiao-784845132/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ActionIcon variant="subtle" aria-label="Settings">
                  <IconBrandLinkedin style={{ width: '70%', height: '70%' }} stroke={1.5} />
                </ActionIcon>
              </a>
              <ActionIcon variant="subtle" aria-label="Settings" onClick={handleEmailClick}>
                <IconMail style={{ width: '70%', height: '70%' }} stroke={1.5} />
              </ActionIcon>
            </Group>
          </Grid.Col>
        </>
      ) : (
        <>
          <Grid.Col span={9}>
              <Group justify="end" align="center" h="100%">
                  <a href="https://github.com/hhsiao24" target="_blank" rel="noopener noreferrer">
                      <ActionIcon variant="subtle" aria-label="Settings">
                          <IconBrandGithub style={{width: '70%', height: '70%'}} stroke={1.5}/>
                      </ActionIcon>
                  </a>
                  <a
                      href="https://www.linkedin.com/in/hannah-hsiao-784845132/"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      <ActionIcon variant="subtle" aria-label="Settings">
                          <IconBrandLinkedin style={{width: '70%', height: '70%'}} stroke={1.5}/>
                      </ActionIcon>
                  </a>
                  <ActionIcon variant="subtle" aria-label="Settings" onClick={handleEmailClick}>
                      <IconMail style={{width: '70%', height: '70%'}} stroke={1.5}/>
                  </ActionIcon>
                  <Menu>
                      <Menu.Target>
                          <ActionIcon variant="subtle">
                              <IconMenu2/>
                          </ActionIcon>
                      </Menu.Target>
                      <Menu.Dropdown>
                          <Menu.Item component={HashLink} to="/#about-me">About Me</Menu.Item>
                          <Menu.Divider/>
                          <Menu.Item component={HashLink} to="/#experiences">Experiences</Menu.Item>
                          <Menu.Divider/>
                          <Menu.Item component={HashLink} to="/#projects">Projects</Menu.Item>
                          <Menu.Divider/>
                          <Menu.Item component={HashLink} to="/#skills">Skills</Menu.Item>
                      </Menu.Dropdown>
                  </Menu>
              </Group>
          </Grid.Col>
        </>
      )}
    </Grid>
  );
};
