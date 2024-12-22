import {Container, Space} from '@mantine/core';
import { AboutMe } from '@/components/Intro/AboutMe';
import { MountainBackground } from '@/components/Intro/MountainBackground';
import { StarBackground } from '@/components/Intro/StarBackground';
import {useViewportSize} from "@mantine/hooks";

export function HomePage() {
    const { width } = useViewportSize();
    console.log(width)
  return (
    <Container w={width} m={0} p={0}>
      <AboutMe />
      <StarBackground />
      <MountainBackground />
      <Space h={1000} w="100%" />
    </Container>
  );
}
