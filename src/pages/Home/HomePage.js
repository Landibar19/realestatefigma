import React from 'react';
import { Section1 } from '../../components/Sections/Section1/Section1';
import { Section2 } from '../../components/Sections/Section2/Section2';
import { Section3 } from '../../components/Sections/Section3/Section3';
import { Section4 } from '../../components/Sections/Section4/Section4';
import { Section5 } from '../../components/Sections/Section5/Section5';
import { Section6 } from '../../components/Sections/Section6/Section6';
import { Section7 } from '../../components/Sections/Section7/Section7';
import { Section8 } from '../../components/Sections/Section8/Section8';
import { Section9 } from '../../components/Sections/Section9/Section9';
import { Box } from '@mui/material';
import { Footer } from '../../components/Footer/Footer';





export const HomePage = () => {
  return (
    <Box style={{height: '100vh', padding:13}}>
      <Section1/>
      <Section2 />
      <Section3 />
      <Section4/>
      <Section5 />
      <Section6 />
      <Section7/>
      <Section8 />
      <Section9/>
      <Footer/>
    </Box>
  );
};