import outline from '/src/assets/robotOutline.png';
import { Container, Image, Stack, Title, Text } from '@mantine/core';
import { Label } from './Label';
import breadboard from '/src/assets/breadboardBakery.jpg';

export const Projects = () => {
  return (
    <Container id="projects" fluid m={0} style={{ position: 'relative', backgroundColor: '#002d44' }}>
      <Title w="100%" ta="center" pb={60} pt={100}>
        Projects
      </Title>
      <Stack justify="center" align="center" pb={100}>
        <Container
          fluid
          p={0}
          style={{ position: 'absolute', height: '100%', width: '30%' }}
        >
          <Label x={1.5} y={37} direction="right" img={breadboard}>
            <>
              <Text fw={700} mt="md" mb="xs">Breadboard Bakery</Text>
              <Text size="sm" c="dimmed">
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway
              </Text>
            </>
          </Label>
          {/*<Label x={120} y={25} direction="left">*/}
          {/*  <>babababaBABABAB</>*/}
          {/*</Label>*/}
        </Container>
        <Image src={outline} w="30%" />
      </Stack>
    </Container>
  );
};
