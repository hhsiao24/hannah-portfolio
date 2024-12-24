import { Avatar, Center, Container, Text, ThemeIcon, Timeline, Title } from '@mantine/core';
import { ExperienceFrame } from '@/components/Experiences/ExperienceFrame';

export const Experience = () => {
  return (
    <Container id="experiences" fluid style={{ backgroundColor: '#002d44' }}>
      <Title ta="center" pb={20} pt={20}>
        Experiences
      </Title>
      <Center>
        <Timeline bulletSize={24} active={2}>
          <ExperienceFrame
            title="Georgia Tech"
            position="CS 1331 Undergraduate TA"
            dates="January 2024 — present"
            description="fe"
          />
          <ExperienceFrame
            title="Georgia Tech"
            position="CS 1331 Undergraduate TA"
            dates="January 2024 — present"
            description="fe"
          />
        </Timeline>
      </Center>
    </Container>
  );
};
