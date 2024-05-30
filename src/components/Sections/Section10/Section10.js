import { Grid, Typography } from '@mui/material';
import React from 'react';
import SubscribeSection from './components/SubScribeSection';
import Header from './components/Header';
import ContentSection from './components/ContentSection';
import QuickLinksSection from './components/QuickLinksSection';
import logo from '../../../assets/Section1/logo-white.svg.png'

export const Section10 = () => {
   
  return (
    
    <div style={{backgroundColor:'black', borderRadius:'16px', padding:5}}>
   
    <Grid container spacing={2} paddingTop={5}>
    <Grid item xs={12} sm={4} md={3} >
        <SubscribeSection/>
    </Grid>
        <Grid item xs={6} sm={4} md={3} sx={{display:'flex', flexDirection:'row'}}>
            <ContentSection/>
            <QuickLinksSection/>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
        <Grid container spacing={2} textAlign='left'>
            <Grid item xs={12}>
            <Typography  color='rgb(255, 255, 255,0.47)'>Contact Us</Typography>
            </Grid>
            <Grid item xs={12}>
            <Typography variant="body1">hi@justhome.com</Typography>
            <Typography variant="body1">+123 456 789</Typography>
            </Grid>
        </Grid>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
        <Grid container spacing={2} textAlign='left'>
            <Grid item xs={12}>
            <Typography  color='rgb(255, 255, 255,0.47)'>Our Address</Typography>
            </Grid>
            <Grid item xs={12}>
            <Typography >99 Fifth Avenue, 3rd Floor San Francisco, CA 1980</Typography>
            </Grid>
        </Grid>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
        <Grid container spacing={2} textAlign='left'>
            <Grid item xs={12}>
            <Typography  color='rgb(255, 255, 255,0.47)'>Our Address</Typography>
            </Grid>
            <Grid item xs={12}>
            <Typography >99 Fifth Avenue, 3rd Floor San Francisco, CA 1980</Typography>
            </Grid>
        </Grid>
        </Grid>

    </Grid>
    </div>
  );
};