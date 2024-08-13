import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { CitiesSectionContent } from '../../../api/SectionsContent/CitiesContent';
import useStyles from './Styles'; // Import the styles



export const CitiesSection = () => {
  const classes = useStyles();

  return (
    <div style={classes.container}>
      <Box>
        <Typography style={classes.title}>
          Find Properties in this city
        </Typography>
        <Typography style={classes.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Typography>
        <Box style={classes.cardContainer}>
          {CitiesSectionContent.map((item, index) => (
            <Card 
              key={index} 
              style={{
                ...classes.card,
                width: index === 0 || index === 5 ? '520px' : '300px',
              }}
            >
              <img 
                src={item.image} 
                alt={item.city} 
                style={classes.cardImage}
              />
              <CardContent style={classes.cardContent}>
                <Typography style={classes.propertyNumber}>
                  {item.propertyNumber}
                </Typography>
                <Typography style={classes.city}>
                  {item.city}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </div>
  );
};