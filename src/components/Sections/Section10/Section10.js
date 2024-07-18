import { Grid, Typography } from '@mui/material';
import React from 'react';
import SubscribeSection from './components/SubScribeSection';
import ContentSection from './components/ContentSection';
import QuickLinksSection from './components/QuickLinksSection';

const InfoSection = ({ title, children }) => (
  <Grid item xs={6} sm={4} md={3} lg={2}>
    <Grid container spacing={2} textAlign='left'>
      <Grid item xs={12}>
        <Typography color='rgb(255, 255, 255,0.47)'>{title}</Typography>
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  </Grid>
);

export const Section10 = () => {
  return (
    <div style={{backgroundColor:'black', borderRadius:'16px', padding:5}}>
      <Grid container spacing={2} paddingTop={5}>
        <Grid item xs={12} sm={4} md={3}>
          <SubscribeSection/>
        </Grid>
        <Grid item xs={6} sm={4} md={3} sx={{display:'flex', flexDirection:'row'}}>
          <ContentSection/>
          <QuickLinksSection/>
        </Grid>
        <InfoSection title="Contact Us">
          <Typography variant="body1">hi@justhome.com</Typography>
          <Typography variant="body1">+123 456 789</Typography>
        </InfoSection>
        <InfoSection title="Our Address">
          <Typography>99 Fifth Avenue, 3rd Floor San Francisco, CA 1980</Typography>
        </InfoSection>
        <InfoSection title="Our Address">
          <Typography>99 Fifth Avenue, 3rd Floor San Francisco, CA 1980</Typography>
        </InfoSection>
      </Grid>
    </div>
  );
};