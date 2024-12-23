import { useEffect, useState } from 'react';
import { Box, Container } from '@mantine/core';
import { useWindowSize } from '@/hooks/useWindowSize';

class Star {
  x: number = 0;
  y: number = 0;
  r: number = 0;
}

export const StarBackground = () => {
  const [stars, setStars] = useState<Star[]>([]); // Allow an array of Star objects
  const [width] = useWindowSize();

  useEffect(() => {
    setStars(
      Array.from({ length: 100 }, () => {
        return { x: Math.random(), y: Math.random(), r: Math.random() } as Star;
      })
    );
  }, []);

  return (
    <Container
      w="100%"
      h={900}
      p={0}
      m={0}
      style={{
        position: 'fixed',
        width,
        maxWidth: width,
        zIndex: -2,
        top: 0,
        background: 'linear-gradient(0deg, rgba(19,75,112,1) 0%, rgba(32,30,67,1) 100%)',
      }}
    >
      {stars.map((star, index) => (
        <Box
          bg="white"
          style={{
            position: 'fixed',
            left: star.x * width,
            top: star.y * 900, //+ scrollPosition * (1 - star.r)
            width: star.r * 2,
            height: star.r * 2,
            borderRadius: 999,
          }}
          key={index}
        />
      ))}
    </Container>
  );
};
