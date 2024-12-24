import { Container } from '@mantine/core';
import { Experience } from '@/components/Experiences/Experience';
import { Footer } from '@/components/Footer/Footer';
import { AboutMe } from '@/components/Intro/AboutMe';
import { MountainBackground } from '@/components/Intro/MountainBackground';
import { Robot } from '@/components/Intro/Robot';
import { StarBackground } from '@/components/Intro/StarBackground';
import { Projects } from '@/components/Projects/Projects';
import { Skills } from '@/components/Skills/Skills';

export function HomePage() {
  return (
    <Container fluid m={0} p={0}>
      <AboutMe />
      <StarBackground />
      <MountainBackground />
      <Robot />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </Container>
  );
}
