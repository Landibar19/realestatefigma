import React from 'react';
import { Grid, Typography } from '@mui/material';
import { HeaderContent } from './FooterContent';


const ContentSection = () => (
  <Grid container spacing={2}>
    {HeaderContent.map((content, index) => (
      <Grid item  key={index}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{textAlign:"left"}}>
            <Typography variant="h6" paddingBottom={2} color='rgb(255, 255, 255,0.47)'>
            {content.title}
            </Typography>
            {content.subtitle.map((item, subIndex) => (
              <Typography key={subIndex} variant="body1">{item.name}</Typography>
            ))}
          </Grid>
        </Grid>
      </Grid>
    ))}
  </Grid>
);

export default ContentSection;