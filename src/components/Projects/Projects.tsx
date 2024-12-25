import formFit from '/src/assets/formfit.png';
import breadboard from '/src/assets/breadboardBakery.jpg';
import outline from '/src/assets/robotOutline.png';
import { Container, Image, Stack, Text, Title } from '@mantine/core';
import { Label } from './Label';
import {useElementSize} from "@mantine/hooks";

export const Projects = () => {
  const { ref, height, width } = useElementSize();

  return (
    <Container
      id="projects"
      fluid
      m={0}
      style={{ position: 'relative', background: 'linear-gradient(0deg, #005d8c 0%, #004c73 100%)' }}
    >
      <Title w="100%" ta="center" pb={10} pt={100}>
        Projects
      </Title>
      <Text ta="center" pb={80}>
        hover for more information!
      </Text>
      <Stack justify="center" align="center" pb={100}>
        <Container fluid p={0} style={{ position: 'absolute', height, width }}>
          <Label
            x={0}
            y={42}
            title="Breadboard Bakery 🍞"
            descriptionItems={[
              'A web application that enables users to upload images of their wired breadboards, generating' +
                ' corresponding logic circuit schematics using advanced image processing techniques',
              'Used image processing techniques to detect and isolate breadboards from backgrounds, utilizing' +
                ' grayscale conversion, edge detection, and contour detection to identify wires and chips for schematic generation',
              'Deployed a Flask API to facilitate communication between the frontend and backend, manage image uploads and' +
                ' displaying generate circuit schematic images',
            ]}
            skills={['React', 'Flask', 'OpenCV', 'Python', 'HTML', 'CSS', 'Javascript']}
            img={breadboard}
            direction="right"
            buttons={2}
            button1Text="Repository"
            button1Link="https://github.com/hhsiao24/breadboard-analyzer"
            button2Text="Learn More"
            button2Link="https://devpost.com/software/breadboard-bakery"
          />
          <Label
            x={15}
            y={25}
            title="Form Fit 🏋🏻‍♀️"
            descriptionItems={[
              '2nd place in Sports Track, 3rd place in Health Track',
              'Web application delivering personalized exercise form feedback',
              'Employed MediaPipe and OpenCV to analyze user’s exercise videos, creating a downloadable video visualizer' +
                ' that compares user’s exercise form to the “perfect” form',
              'Engineered an algorithm to interpret visualizer data, providing actionable feedback for user’s improvement',
            ]}
            skills={['MediaPipe', 'OpenCV', 'React', 'Python', 'HTML', 'CSS', 'Javascript']}
            img={formFit}
            direction="left"
            buttons={2}
            button1Text="Repository"
            button1Link="https://github.com/hhsiao24/FormFit"
            button2Text="Link"
            button2Link="https://formfit.tech/"
          />
        </Container>
        <Image src={outline} w="30%" ref={ref} />
      </Stack>
    </Container>
  );
};
