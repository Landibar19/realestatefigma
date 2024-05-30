import React from 'react';
import { Grid, Typography } from '@mui/material';
import { QuickLinksContent } from '../../../SectionsContent/Section10Content';

const QuickLinksSection = () => (
  <Grid container spacing={2} paddingLeft={2}>
    {QuickLinksContent.map((content, index) => (
      <Grid item  key={index}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ textAlign:'left'}}>
            <Typography variant="h6" paddingBottom={2} color='rgb(255, 255, 255,0.47)' >
            {content.linkTitle}
            </Typography>
            {content.linkName.map((item, subIndex) => (
              <Typography key={subIndex} variant="body1">
              {item.name}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Grid>
    ))}
  </Grid>
);

export default QuickLinksSection;