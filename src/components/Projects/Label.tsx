import React from 'react';
import { Card, Group } from '@mantine/core';

export const Label = ({
  x,
  y,
  children,
  direction = 'right',
}: {
  x: number;
  y: number;
  children: React.ReactNode;
  direction: string;
}) => {
  const isLeft = direction === 'left';

  return (
    <Group
      p={0}
      wrap="nowrap"
      align="start"
      style={{
        position: 'absolute',
        top: `calc(50% - ${y}%)`,
        left: `calc(50% - ${x}%)`,
        flexDirection: isLeft ? 'row-reverse' : 'row',
      }}
      gap={0}
    >
      <svg height={100} width={200} style={{ transform: isLeft ? 'scaleX(-1)' : undefined }}>
        <circle cx={5} cy={95} r={5} fill="white" />
        <line x1={5} y1={95} x2={100} y2={0} style={{ stroke: 'white', strokeWidth: 1 }} />
        <line x1={100} y1={0} x2={200} y2={0} style={{ stroke: 'white', strokeWidth: 1 }} />
      </svg>
      <Card>{children}</Card>
    </Group>
  );
};
