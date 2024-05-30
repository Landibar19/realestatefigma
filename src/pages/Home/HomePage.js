import { Box, Container } from '@mui/material';
import React from 'react';
import bgImage from '../../assets/Section1/bgImage.png'
import { Section1 } from '../../components/Sections/Section1/Section1';
import { Section2 } from '../../components/Sections/Section2/Section2';
import { Section3 } from '../../components/Sections/Section3/Section3';
import { Section4 } from '../../components/Sections/Section4/Section4';
import { Section5 } from '../../components/Sections/Section5/Section5';
import { Section6 } from '../../components/Sections/Section6/Section6';
import { Section7 } from '../../components/Sections/Section7/Section7';
import { Section8 } from '../../components/Sections/Section8/Section8';
import { Section9 } from '../../components/Sections/Section9/Section9';
import { Section10 } from '../../components/Sections/Section10/Section10';
import NavBar from '../../components/NavBar/NavBar';



export const HomePage = () => {
  return (
    <Container maxWidth="xxl" sx={{height: '100vh'}}>
    <NavBar/>
      <Box
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
          height:'100vh',
          marginTop: 2,
          borderRadius: '16px',
        }}
      >
        <Section1/>
        <Section2 />
        <Section3 />
        <Section4/>
        <Section5 />
        <Section6 />
        <Section7/>
        <Section8 />
        <Section9/>
        <Section10 />
      </Box>
    </Container>
  );
};