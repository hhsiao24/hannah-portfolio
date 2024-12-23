import React from 'react';
import {Box, Card, Group, Image} from '@mantine/core';

export const Label = ({
  x,
  y,
  children,
  direction = 'right',
  img,
}: {
  x: number;
  y: number;
  children: React.ReactNode;
  direction: string;
  img: string;
}) => {
  const isLeft = direction === 'left';

  return (
      <Box
          p={0}
          w={375}
          style={{
              display: 'flex',
              position: 'absolute',
              top: `calc(50% - ${y}%)`,
              left: `calc(50% - ${x}%)`,
              flexDirection: isLeft ? 'row-reverse' : 'row',
          }}
      >
      <svg height={100} width={200} style={{ transform: isLeft ? 'scaleX(-1)' : undefined }}>
        <circle cx={5} cy={95} r={5} fill="white" />
        <line x1={5} y1={95} x2={100} y2={0} style={{ stroke: 'white', strokeWidth: 1 }} />
        <line x1={100} y1={0} x2={200} y2={0} style={{ stroke: 'white', strokeWidth: 1 }} />
      </svg>
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        style={{
          backgroundColor: 'rgba(18, 17, 38, 0.5)',
          backdropFilter: 'blur(10px)',
          transition: 'box-shadow 0.5s',
        }}
      >
        <Card.Section>
          <Image src={img} height={160} />
        </Card.Section>
        {children}
      </Card>
    </Box>
  );
};
