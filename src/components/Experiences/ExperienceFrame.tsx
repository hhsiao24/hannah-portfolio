import { Accordion, Card, Grid, Image, List, Text } from '@mantine/core';

export const ExperienceFrame = ({
  title,
  img,
  position,
  dates,
  descriptionItems,
}: {
  title: string;
  img: string;
  position: string;
  dates: string;
  descriptionItems?: string[];
}) => {
  return (
    <Card
      w={350}
      p={descriptionItems !== undefined ? 5 : 15}
      shadow="xs"
      withBorder
      style={{ backgroundColor: 'rgba(18, 17, 38, 0.5)' }}
    >
      {descriptionItems !== undefined ? (
        <Accordion
          variant="contained"
          styles={{
            control: {
              backgroundColor: 'transparent',
            },
            item: { border: 'none', backgroundColor: 'transparent' },
          }}
        >
          <Accordion.Item value={title}>
            <Accordion.Control>
              <Grid pr={4}>
                <Grid.Col span={2}>
                  <Image src={img} />
                </Grid.Col>
                <Grid.Col span={10}>
                  <Text size="md" fw="bold">
                    {title}
                  </Text>
                  <Text>{position}</Text>
                  <Text c="dimmed">{dates}</Text>
                </Grid.Col>
              </Grid>
            </Accordion.Control>
            <Accordion.Panel>
              <List
                size="sm"
                style={{ marginRight: '0.7rem', marginTop: '0.5rem', color: 'white' }}
              >
                {descriptionItems.map((item, index) => (
                  <List.Item key={index}>{item}</List.Item>
                ))}
              </List>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      ) : (
        <Grid pr={4}>
          <Grid.Col span={2}>
            <Image src={img} />
          </Grid.Col>
          <Grid.Col span={10}>
            <Text size="md" fw="bold">
              {title}
            </Text>
            <Text>{position}</Text>
            <Text c="dimmed">{dates}</Text>
          </Grid.Col>
        </Grid>
      )}
    </Card>
  );
};
