import mountain1 from '/src/assets/mountain1.png';
import mountain2 from '/src/assets/mountain2.png';
import mountain3 from '/src/assets/mountain3.png';
import mountain4 from '/src/assets/mountain4.png';
import mountain5 from '/src/assets/mountain5.png';
import mountain6 from '/src/assets/mountain6.png';
import { Container, Image } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
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
        src={mountain6}
        w="100%"
        style={{ position: 'absolute', bottom: -(5 / 12) * scrollPosition }}
      />
      <Image
        src={mountain5}
        w="100%"
        style={{ position: 'absolute', bottom: -(4 / 12) * scrollPosition }}
      />
      <Image
        src={mountain4}
        w="100%"
        style={{ position: 'absolute', bottom: -(3 / 12) * scrollPosition }}
      />
      <Image
        src={mountain3}
        w="100%"
        style={{ position: 'absolute', bottom: -(2 / 12) * scrollPosition }}
      />
      <Image
        src={mountain2}
        w="100%"
        style={{ position: 'absolute', bottom: -(1 / 12) * scrollPosition }}
      />
      <Image src={mountain1} w="100%" style={{ position: 'absolute', bottom: 0 }} />
    </Container>
  );
};
