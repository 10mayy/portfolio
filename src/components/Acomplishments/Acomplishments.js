import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { text1: '10th std', text: 'Top 3 at CGHS chennai' },
  { text1: 'AUK', text: 'Organised Amiphoria Hackathon invited GDG Kolkata' },
  { text1: 'JEE', text: 'Cleared JEE on 1st Attempt' },
  { text1: 'Football', text: 'Top Scorer of BTech at AUK Sangathan' }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.text1}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
