import React from 'react';
import { Box, Card, Grid, Group, Image, Text } from '@mantine/core';

export const SkillFrame = ({ skill, img }: { skill: string; img: string }) => {
  return (
    <Grid.Col span={{ base: 12, xs: 6, sm: 4, md: 3 }}>
      <Card shadow="xs" p="xs" withBorder style={{ backgroundColor: 'rgba(18, 17, 38, 0.5)' }}>
        <Group>
          <Box>
            <Image src={img} h={35} />
          </Box>
          <Text ta="center">{skill}</Text>
        </Group>
      </Card>
    </Grid.Col>
  );
};
