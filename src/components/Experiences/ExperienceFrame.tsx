import { Card, Text, TimelineItem, Title } from '@mantine/core';

export const ExperienceFrame = ({
  title,
  position,
  dates,
  description,
}: {
  title: string;
  position: string;
  dates: string;
  description: string;
}) => {
  return (
    <TimelineItem>
      <Text size="md" fw="bold">
        {title}
      </Text>
      <Text>{position}</Text>
      <Text c="dimmed">{dates}</Text>
      <Text c="dimmed">{description}</Text>
    </TimelineItem>
  );
};
