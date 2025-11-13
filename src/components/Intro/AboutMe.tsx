import { useEffect, useState } from 'react';
import { Button, Stack, Text, Title } from '@mantine/core';
import { useViewportSize } from "@mantine/hooks";


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
  const { width } = useViewportSize();
  const handleOpenPdf = () => {
    window.open(
      'https://drive.google.com/file/d/1CRUggL6DZDrIIH8-rIr-o0mdAme0Juu8/view?usp=sharing',
      '_blank'
    );
  };
  return (
    <Stack id="about-me" align="center" style={{ zIndex: 4, position: 'relative' }}>
      <Stack h={width > 500 ? 900 : 700} pt={width > 500 ? 200 : 100} align="center" w="95%" maw={800}>
        <Title ta='center' order={1}>
          <Typewriter text="Hello, I'm Hannah! Welcome to My Portfolio!" speed={100} />
        </Title>
        <Text size="md" ta="center" pb={10}>
          I’m a second-year CS major at Georgia Tech 🐝 with a passion for using technology to make
          a difference 🌍. I love exploring projects that combine creativity ✨ and problem solving
          to create real world impact 💥. Whether it’s through coding 💻, design 🎨, or just
          brainstorming new ideas 💡, I’m all about building things that help people and make life
          better.
        </Text>
        <Button onClick={handleOpenPdf}>Resume</Button>
      </Stack>
    </Stack>
  );
};
