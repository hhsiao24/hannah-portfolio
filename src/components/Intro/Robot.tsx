import { Container, Image, Stack } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { useScroll } from '@/hooks/useScroll';

export const Robot = () => {
  const scrollPosition = useScroll();
  const { width } = useViewportSize();

  return (
    <Container
      h={900}
      p={0}
      m={0}
      style={{ position: 'absolute', width, maxWidth: width, top: 0, zIndex: 3 }}
    >
      <Stack h={900} pt={640} align="center">
        <Image src="public/assets/robot.png" w="10%" style={{ bottom: -(1 / 12) * scrollPosition }} />
      </Stack>
    </Container>
  );
};
