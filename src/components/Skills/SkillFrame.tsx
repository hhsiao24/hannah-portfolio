import {Box, Card, Grid, Group, Image, Text} from '@mantine/core';
import React from "react";

export const SkillFrame = ({ skill, img }: { skill: string; img: string }) => {
  return (
    <Grid.Col span={3}>
      <Card shadow="xs" p="xs">
          <Group>
              <Box>
              <Image src={img} h={35}/>
              </Box>
              <Text ta='center' >{skill}</Text>
          </Group>
      </Card>
    </Grid.Col>
  );
};
