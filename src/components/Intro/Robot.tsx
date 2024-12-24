import robot from '/src/assets/robot.png';
import { Container, Image, Stack } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { useScroll } from '@/hooks/useScroll';

export const Robot = () => {
  const scrollPosition = useScroll();
  const { width } = useViewportSize();

  return (
    <Container
      h={width > 500 ? 900 : 700}
      p={0}
      m={0}
      style={{ position: 'absolute', width, maxWidth: width, top: 0, zIndex: 3 }}
    >
      <Stack h={width > 500 ? 900 : 700} justify="end" pb={(50 * width) / 873} align="center">
        <Image src={robot} w="10%" style={{ bottom: -(1 / 12) * scrollPosition }} />
      </Stack>
    </Container>
  );
};
