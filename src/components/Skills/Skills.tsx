import arduino from '/public/arduinologo.svg';
import assembly from '/public/assemblylogo.png';
import c from '/public/clogo.png';
import cplus from '/public/cpluslogo.png';
import css from '/public/csslogo.png';
import html from '/public/htmllogo.png';
import java from '/public/javalogo.png';
import mediapipe from '/public/mediapipelogo.png';
import opencv from '/public/opencvlogo.png';
import python from '/public/pythonlogo.png';
import reactLogo from '/public/reactlogo.png';
import ros from '/public/roslogo.png';
import { Container, Grid, Title } from '@mantine/core';
import { SkillFrame } from '@/components/Skills/SkillFrame';

export const Skills = () => {
  return (
    <Container
      fluid
      align='center'
      id='skills'
      style={{ background: 'linear-gradient(0deg, rgba(19,75,112,1) 0%, #002d44 100%)', }}
      pb={80}
    >
        <Title ta="center" pb={20} pt={20}>
          Skills
        </Title>
        <Grid w="90%" maw={900}>
          <SkillFrame skill="Java" img={java} />
          <SkillFrame skill="Python" img={python} />
          <SkillFrame skill="C" img={c} />
          <SkillFrame skill="C++" img={cplus} />
          <SkillFrame skill="React" img={reactLogo} />
          <SkillFrame skill="HTML" img={html} />
          <SkillFrame skill="CSS" img={css} />
          <SkillFrame skill="OpenCV" img={opencv} />
          <SkillFrame skill="MediaPipe" img={mediapipe} />
          <SkillFrame skill="ROS" img={ros} />
          <SkillFrame skill="Assembly" img={assembly} />
          <SkillFrame skill="Arduino" img={arduino} />
        </Grid>
    </Container>
  );
};
