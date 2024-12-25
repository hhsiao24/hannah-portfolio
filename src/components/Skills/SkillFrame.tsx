import React from 'react';
import { Box, Card, Grid, Group, Image, Text } from '@mantine/core';

export const SkillFrame = ({ skill, img }: { skill: string; img: string }) => {
  return (
      <Grid.Col span={{ base: 12, xs: 6, sm: 4, md: 3 }}>
        <Card shadow="xs" p="xs" withBorder style={{ backgroundColor: 'rgba(18, 17, 38, 0.5)' }}>
          <Group wrap="nowrap">
            <Box style={{ height: 35, width: 35, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Image src={img} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
            </Box>
            <Text ta="left" style={{ flex: 1 }}>
              {skill}
            </Text>
          </Group>
        </Card>
      </Grid.Col>
  );
};
