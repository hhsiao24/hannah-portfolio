import { Container, Space } from '@mantine/core';
import { AboutMe } from '@/components/Intro/AboutMe';
import { MountainBackground } from '@/components/Intro/MountainBackground';
import { Robot } from '@/components/Intro/Robot';
import { StarBackground } from '@/components/Intro/StarBackground';

export function HomePage() {
  return (
    <Container fluid m={0} p={0}>
      <AboutMe />
      <StarBackground />
      <MountainBackground />
      <Robot />
      <Space h={1000} w="100%" />
    </Container>
  );
}
