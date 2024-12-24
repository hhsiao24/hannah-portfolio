import { Container, Grid, Menu, Text, Title} from '@mantine/core';
import {SkillFrame} from "@/components/Skills/SkillFrame";
import java from '/public/javalogo.png'
import python from '/public/pythonlogo.png'
import c from '/public/clogo.png'
import cplus from '/public/cpluslogo.png'
import html from '/public/htmllogo.png'
import mediapipe from '/public/mediapipelogo.png'
import ros from '/public/roslogo.png'
import reactLogo from '/public/reactlogo.png'
import arduino from '/public/arduinologo.svg'
import css from '/public/csslogo.png'
import opencv from '/public/opencvlogo.png'
import assembly from '/public/assemblylogo.png'

export const Skills = () => {
  return (
      <Container w='100%' style={{background: 'linear-gradient(0deg, rgba(19,75,112,1) 0%, rgba(32,30,67,1) 100%)'}}>
      <Title ta='center' pb={20} pt={20}>Skills</Title>
          <Grid>
          <SkillFrame
              skill='Java'
              img={java}
          />
          <SkillFrame
              skill='Python'
              img={python}
          />
          <SkillFrame
              skill='C'
              img={c}
          />
          <SkillFrame
              skill='C++'
              img={cplus}
          />
          <SkillFrame
              skill='React'
              img={reactLogo}
          />
          <SkillFrame
              skill='HTML'
              img={html}
          />
          <SkillFrame
              skill='CSS'
              img={css}
          />
          <SkillFrame
          skill='OpenCV'
          img={opencv}
      />
          <SkillFrame
              skill='MediaPipe'
              img={mediapipe}
          />
          <SkillFrame
              skill='ROS'
              img={ros}
          />
          <SkillFrame
              skill='Assembly'
              img={assembly}
          />
          <SkillFrame
              skill='Arduino'
              img={arduino}
          />
    </Grid>
      </Container>
  );
};
