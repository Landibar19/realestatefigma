import React, { useState} from 'react';
import { Box, Tabs, Tab, Typography, Grid, IconButton } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { ListCitiesContent } from '../../../api/SectionsContent/ListCitiesContent';
import useNavBar from '../../../hooks/useNavBar';
import {useStyles} from './Styles'



export const ListCitiesSection = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={classes.container}>
      <Tabs value={value} variant='scrollable' onChange={handleChange} aria-label="section tabs" sx={classes.tabs}>
        {ListCitiesContent.map((section, index) => (
          <Tab label={section.title} key={index} sx={classes.tab} />
        ))}
      </Tabs>
      {ListCitiesContent.map((section, index) => (
        <TabPanel value={value} index={index} key={index}>
          {typeof section.content === 'string' ? (
            <Typography color='black'>{section.content}</Typography>
          ) : (
            section.content.map((item, i) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                <Typography color='black' textAlign="justify">{item.name}</Typography>
              </Grid>
            ))
          )}
        </TabPanel>
      ))}
      <CallToActionSection />
    </Box>
  );
}

function TabPanel({ children, value, index }) {
  const classes = useStyles();
  return (
    <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`}>
      {value === index && (
        <Box sx={classes.tabPanel}>
          <Grid container sx={classes.gridContainer}>{children}</Grid>
        </Box>
      )}
    </div>
  );
}

function CallToActionSection() {
  const classes = useStyles();
  const { isMobileView } = useNavBar();
  return (
    <Box sx={classes.callToAction}>
      <Box sx={{ ...classes.callToActionContent, ...(isMobileView && classes.callToActionContentMobile) }}>
        <Box sx={classes.callToActionText}>
          <Typography sx={classes.callToActionTitle}>
            Become a real estate agent
          </Typography>
          <Typography sx={classes.callToActionSubtitle}>
            We only work with the best companies around the globe
          </Typography>
        </Box>
        <IconButton sx={classes.callToActionButton}>
          Register now
          <ArrowRightAltIcon />
        </IconButton>
      </Box>
    </Box>
  );
}