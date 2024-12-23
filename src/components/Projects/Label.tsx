import React from 'react';
import {Card, Group} from '@mantine/core';

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
  return (
    <Group
      p={0}
      style={{ position: 'absolute', top: `calc(50% - ${y}%)`, left: `calc(50% - ${x}%)` }}
    >
      <svg height={100} width={200}>
        <circle cx={5} cy={95} r={5} fill="white" />
        <line x1={5} y1={95} x2={100} y2={0} style={{ stroke: 'white', strokeWidth: 1 }} />
        <line x1={100} y1={0} x2={200} y2={0} style={{ stroke: 'white', strokeWidth: 1 }} />
      </svg>
      <Card>{children}</Card>
    </Group>
  );
};
