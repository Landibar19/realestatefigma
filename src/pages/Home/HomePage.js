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
import { Section10 } from '../../components/Sections/Section10/Section10';
import NavBar from '../../components/NavBar/NavBar';
import { Stack } from '@mui/material';



export const HomePage = () => {
  return (
    <div style={{height: '100vh', padding:15}}>
      <NavBar/> 
      <Stack spacing={2} height='100vh'>
        <Section1/> 
      </Stack>
      <Section2 />
      <Section3 />
      <Section4/>
      <Section5 />
      <Section6 />
      <Section7/>
      <Section8 />
      <Section9/>
      <Section10 />
    </div>
  );
};