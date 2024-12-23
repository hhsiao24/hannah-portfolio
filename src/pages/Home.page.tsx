import { Container, Space } from '@mantine/core';
import { AboutMe } from '@/components/Intro/AboutMe';
import { MountainBackground } from '@/components/Intro/MountainBackground';
import { Robot } from '@/components/Intro/Robot';
import { StarBackground } from '@/components/Intro/StarBackground';
import { Projects } from '@/components/Projects/Projects';

export function HomePage() {
  return (
    <Container fluid m={0} p={0}>
      <AboutMe />
      <StarBackground />
      <MountainBackground />
      <Robot />
      <Projects />
    </Container>
  );
}
