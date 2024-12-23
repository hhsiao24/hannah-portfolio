import outline from '/src/assets/robotOutline.png';
import { Container, Image, Stack, Title } from '@mantine/core';
import { useDims } from '@/hooks/useDims';
import { Label } from './Label';

export const Projects = () => {
  const { ref, width, height } = useDims();
  return (
    <Container id="projects" fluid m={0} style={{ position: 'relative', backgroundColor: '#002d44' }}>
      <Title w="100%" ta="center" pb={60} pt={100}>
        Projects
      </Title>
      <Stack justify="center" align="center" pb={100}>
        <Container
          fluid
          ref={ref}
          p={0}
          style={{ position: 'absolute', height: '100%', width: '30%' }}
        >
          <Label x={1.5} y={37} direction="right">
            <>
              <div>
                <p style={{ fontWeight: 'bold' }}>BreadBoard Bakery</p>
              </div>
            </>
          </Label>
          <Label x={120} y={25} direction="left">
            <>babababaBABABAB</>
          </Label>
        </Container>
        <Image src={outline} w="30%" />
      </Stack>
    </Container>
  );
};
