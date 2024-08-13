import { Box, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import { LocalExpertiseContent } from '../../../api/SectionsContent/LocalExpertiseContent';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useStyles } from './Styles';
import CountUpBox from './CountUpBox';
import { countUpData } from './CountUpData';

export const LocalExpertiseSection = () => {

  const styles = useStyles();
  const { image, image1, title, description } = LocalExpertiseContent;


  return (
    <Box sx={styles.container}>
      <Grid container spacing={2} sx={styles.gridContainer}>
        <Grid item xs={12} sm={6}>
          <Box sx={styles.imageBox}>
            <img src={image} alt="Local expertise for luxury homes" style={styles.mainImage} />
            <img src={image1} alt='clients' style={styles.overlayImage} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={styles.contentBox}>
            <Typography fontSize={40} gutterBottom>{title}</Typography>
            <Typography fontSize={12} textAlign='justify'>{description}</Typography>
            <IconButton sx={styles.learnMoreButton}>
              <Typography color='black'>Learn More</Typography>
              <ArrowRightAltIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Box sx={styles.countUpContainer}>
        {countUpData.map((data, index) => (
          <CountUpBox key={index} {...data} />
        ))}
      </Box>
    </Box>
  );
};