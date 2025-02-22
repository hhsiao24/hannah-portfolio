import React from 'react';
import { Badge, Box, Button, Card, Grid, HoverCard, Image, List, Text, Title } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';

export const Label = ({
  x,
  y,
  title,
  emoji,
  descriptionItems,
  skills,
  img,
  direction = 'right',
  buttons = 1,
  button1Text = 'Button 1',
  button1Link = '#',
  button2Text = 'Button 2',
  button2Link = '#',
}: {
  x: number;
  y: number;
  title: string;
  emoji: string;
  descriptionItems: string[];
  skills: string[];
  img: string;
  direction: string;
  buttons?: number;
  button1Text?: string;
  button1Link?: string;
  button2Text?: string;
  button2Link?: string;
}) => {
  const isLeft = direction === 'left';
  const { width } = useViewportSize();

  return (
    <Box
      style={{
        display: 'flex',
        position: 'absolute',
        top: `calc(50% - ${y}%)`,
        left: `calc(50% - ${x}%)`,
        transform: `translateY(${width > 500 ? '-100px' : '-50px'}) ${isLeft ? 'translateX(-100%)' : ''}`,
        flexDirection: isLeft ? 'row-reverse' : 'row',
      }}
    >
      {width > 500 ? (
        <svg height={100} width={200} style={{ transform: isLeft ? 'scaleX(-1)' : undefined }}>
          <circle cx={5} cy={95} r={5} fill="white" />
          <line x1={5} y1={95} x2={100} y2={0} style={{ stroke: 'white', strokeWidth: 1 }} />
          <line x1={100} y1={0} x2={200} y2={0} style={{ stroke: 'white', strokeWidth: 1 }} />
        </svg>
      ) : (
        <svg height={50} width={80} style={{ transform: isLeft ? 'scaleX(-1)' : undefined }}>
          <circle cx={5} cy={45} r={5} fill="white" />
          <line x1={5} y1={45} x2={50} y2={0} style={{ stroke: 'white', strokeWidth: 1 }} />
          <line x1={50} y1={0} x2={80} y2={0} style={{ stroke: 'white', strokeWidth: 1 }} />
        </svg>
      )}

      <HoverCard shadow="md" width={400} openDelay={200} closeDelay={200}>
        <HoverCard.Target>
          <Card
            shadow="sm"
            padding={width > 500 ? 'lg' : 'xs'}
            radius="md"
            w={width > 500 ? 300 : 50}
            withBorder
            style={{
              backgroundColor: 'rgba(18, 17, 38, 0.5)',
              backdropFilter: 'blur(10px)',
              cursor: 'pointer',
              transition: 'box-shadow 0.5s',
              width: 300,
            }}
          >
            <Text
              size="lg"
              fw="bold"
              h="100%"
              style={{
                display: width > 500 ? '' : 'flex',
                justifyContent: width > 500 ? '' : 'center',
                alignItems: width > 500 ? '' : 'center',
              }}
            >
              {width > 500 ? (
                <>
                  {title} {emoji}
                </>
              ) : (
                emoji
              )}
            </Text>
            {width > 500 && (
              <>
                <div
                  style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.2)', margin: '0.5rem 0' }}
                />
                <Box
                  style={{
                    display: 'block',
                    marginTop: '0.5rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  <Title size="sm" fw="bold">
                    Technologies
                  </Title>
                </Box>
                <Box
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                  }}
                >
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="filled" style={{ backgroundColor: '#66a8d8' }}>
                      {skill}
                    </Badge>
                  ))}
                </Box>
              </>
            )}
          </Card>
        </HoverCard.Target>

        <HoverCard.Dropdown maw={width - 20} p={0} bg="transparent">
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            style={{
              backgroundColor: 'rgba(18, 17, 38, 0.5)',
              backdropFilter: 'blur(15px)',
            }}
          >
            <Card.Section>
              <Image src={img} height={160} />
            </Card.Section>
            <Text size="lg" fw="bold" style={{ marginTop: '1rem' }}>
              {title}
            </Text>

            <List size="sm" style={{ marginRight: '0.7rem', marginTop: '0.5rem', color: 'white' }}>
              {descriptionItems.map((item, index) => (
                <List.Item key={index}>{item}</List.Item>
              ))}
            </List>

            <div
              style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.2)', margin: '0.5rem 0' }}
            />

            <Box
              style={{
                display: 'block',
                marginTop: '0.5rem',
                marginBottom: '0.5rem',
              }}
            >
              <Title size="sm" fw="bold">
                Technologies
              </Title>
            </Box>

            <Box
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}
            >
              {skills.map((skill, index) => (
                <Badge key={index} variant="filled" style={{ backgroundColor: '#66a8d8' }}>
                  {skill}
                </Badge>
              ))}
            </Box>

            <Grid p={2} mt={10}>
              <Grid.Col span={6}>
                <Button
                  variant="outline"
                  component="a"
                  href={button1Link}
                  target="_blank"
                  fullWidth
                >
                  {button1Text}
                </Button>
              </Grid.Col>
              {buttons === 2 && (
                <Grid.Col span={6}>
                  <Button
                    variant="outline"
                    component="a"
                    href={button2Link}
                    target="_blank"
                    fullWidth
                  >
                    {button2Text}
                  </Button>
                </Grid.Col>
              )}
            </Grid>
          </Card>
        </HoverCard.Dropdown>
      </HoverCard>
    </Box>
  );
};
