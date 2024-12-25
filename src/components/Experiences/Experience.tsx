import { IconPower } from '@tabler/icons-react';
import ford from '/src/assets/fordlogo.png';
import gt from '/src/assets/gtlogo.png';
import rail from '/src/assets/raillogo.png';
import mate from '/src/assets/roboticslogo.png';
import solar from '/src/assets/solar.png';
import { Center, Container, Timeline, Title } from '@mantine/core';
import { ExperienceFrame } from '@/components/Experiences/ExperienceFrame';

export const Experience = () => {
  return (
    <Container
      id="experiences"
      fluid
      style={{ background: 'linear-gradient(0deg, #004c73 0%, #002d44 100%)' }}
    >
      <Title ta="center" pb={20} pt={20}>
        Experiences
      </Title>
      <Center>
        <Timeline bulletSize={24} active={3} reverseActive>
          <Timeline.Item bullet={<IconPower />} lineVariant="dashed">
            <ExperienceFrame
              title="Ford Motor Company"
              img={ford}
              position="Enterprise Technology Software Engineering Intern"
              dates="May 2025 — August 2025"
            />
          </Timeline.Item>
          <Timeline.Item bullet={<IconPower />}>
            <ExperienceFrame
              title="Georgia Tech"
              img={gt}
              position="Intro to Object-Oriented Programming Teaching Assistant"
              dates="January 2024 — present"
              descriptionItems={[
                'Lead weekly recitations with 30 students to review and expand on the course curriculum',
                'Host weekly office hours to provide students with individualized support and instruction from lecture material',
                'Develop autograders to efficiently and confidentially grade student assignments',
                'Thoroughly and frequently respond to student’s concerns and questions on class discussion forum',
              ]}
            />
          </Timeline.Item>
          <Timeline.Item bullet={<IconPower />}>
            <ExperienceFrame
              title="Robot Autonomy and Interactive Lab"
              img={rail}
              position="Undergraduate Researcher"
              dates="August 2024 — present"
              descriptionItems={[
                'Enhanced the manipulation capabilities of the Stretch robot by identifying limitations in object grasping, drawer\n' +
                  'opening, and cabinet operation, leading to targeted improvements in performance',
                'Utilized ROS to develop custom control algorithms enabling Stretch to autonomously grasp objects from varying\n' +
                  'heights, open drawers, and operate cabinets, improving interaction with household environments',
                'Implemented and tested new manipulation tasks through hands-on experimentation and analysis, systematically\n' +
                  'improving Stretch’s reliability in real-world tasks like retrieving objects from confined spaces',
              ]}
            />
          </Timeline.Item>
          <Timeline.Item bullet={<IconPower />}>
            <ExperienceFrame
              title="Georgia Tech Solar Racing"
              img={solar}
              position="Auxilliary Software Engineer"
              dates="January 2024 — May 2024"
              descriptionItems={[
                'Engineered and developed an intuitive driver display interface for a solar car that continuously updates the driver\n' +
                  'on the status of various car systems, such as headlights, brakes, and current speed',
                'Connected a telemetry board and STLINK to a display board to allow board to receive messages',
                'Programmed display in C++ to encode CAN messages from car into easily understandable information',
              ]}
            />
          </Timeline.Item>
          <Timeline.Item bullet={<IconPower />}>
            <ExperienceFrame
              title="Aragon Underwater Robotics"
              img={mate}
              position="Co-Founder & Software Engineer"
              dates="August 2021 — May 2023"
              descriptionItems={[
                'Designed electrical control system from scratch with 2 Arduinos and Raspberry Pi to operate an underwater\n' +
                  'remotely operated vehicle',
                'Programmed ROV in Python and C++ by converting joystick data to thruster and claw movement through serial\n' +
                  'communication',
                'Employed OpenCV to obtain and display live video feed from 4 cameras on ROV on an on-land computer system\n' +
                  'to assist in ROV navigation and competition task completion',
              ]}
            />
          </Timeline.Item>
        </Timeline>
      </Center>
    </Container>
  );
};
