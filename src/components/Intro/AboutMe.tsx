import React, { useEffect, useState } from 'react';
import { Container, Title } from '@mantine/core';

export const Typewriter = ({ text, speed }: { text: string; speed: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText((prevText) => prevText + text.charAt(index));
      if (index + 1 === text.length) {
        clearInterval(interval);
      }
      setIndex((prevIndex) => prevIndex + 1);
    }, speed);

    return () => clearInterval(interval);
  }, [index, speed, text]);

  return <>{displayText}</>;
};

export const AboutMe = () => {
  return (
    <Container w="100%" h={900} p={0} m={0}>
      <Title order={1}>
        <Typewriter text="Hello, I'm Hannah! Welcome to My Portfolio!" speed={100} />
      </Title>
    </Container>
  );
};
