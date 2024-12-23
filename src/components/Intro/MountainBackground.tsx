import { Container, Image } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { Robot } from '@/components/Intro/Robot';
import { useScroll } from '@/hooks/useScroll';

export const MountainBackground = () => {
  const scrollPosition = useScroll();
  const { width } = useViewportSize();

  return (
    <Container
      h={900}
      p={0}
      m={0}
      style={{ position: 'absolute', width, maxWidth: width, zIndex: -1, top: 0 }}
    >
      <Image
        src="src/assets/mountain6.png"
        w="100%"
        style={{ position: 'absolute', bottom: -(5 / 12) * scrollPosition }}
      />
      <Image
        src="src/assets/mountain5.png"
        w="100%"
        style={{ position: 'absolute', bottom: -(4 / 12) * scrollPosition }}
      />
      <Image
        src="src/assets/mountain4.png"
        w="100%"
        style={{ position: 'absolute', bottom: -(3 / 12) * scrollPosition }}
      />
      <Image
        src="src/assets/mountain3.png"
        w="100%"
        style={{ position: 'absolute', bottom: -(2 / 12) * scrollPosition }}
      />
      <Image
        src="src/assets/mountain2.png"
        w="100%"
        style={{ position: 'absolute', bottom: -(1 / 12) * scrollPosition }}
      />
      <Image src="src/assets/mountain1.png" w="100%" style={{ position: 'absolute', bottom: 0 }} />
    </Container>
  );
};
