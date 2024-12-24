import arduino from '/src/assets/arduinologo.svg';
import assembly from '/src/assets/assemblylogo.png';
import c from '/src/assets/clogo.png';
import cplus from '/src/assets/cpluslogo.png';
import css from '/src/assets/csslogo.png';
import html from '/src/assets/htmllogo.png';
import java from '/src/assets/javalogo.png';
import mediapipe from '/src/assets/mediapipelogo.png';
import opencv from '/src/assets/opencvlogo.png';
import python from '/src/assets/pythonlogo.png';
import reactLogo from '/src/assets/reactlogo.png';
import ros from '/src/assets/roslogo.png';
import { Grid, Stack, Title } from '@mantine/core';
import { SkillFrame } from '@/components/Skills/SkillFrame';

export const Skills = () => {
  return (
    <Stack
      w="100%"
      id="skills"
      align="center"
      style={{ background: 'linear-gradient(0deg, #006ea6 0%, #005d8c 100%)' }}
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
    </Stack>
  );
};
