import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, Grid, IconButton } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Section9Content } from '../../SectionsContent/Section9Content';
import useNavBar from '../../../hooks/useNavBar';

export const Section9 = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', pt: 4 }}>
      <Tabs value={value} variant='scrollable' onChange={handleChange} aria-label="section tabs" sx={{ borderBottom: 1, borderColor: 'divider' }}>
        {Section9Content.map((section, index) => (
          <Tab label={section.title} key={index} sx={{ textTransform: "capitalize", color: 'black', fontWeight: 'bold' }} />
        ))}
      </Tabs>
      {Section9Content.map((section, index) => (
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
  return (
    <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Grid container spacing={2}>{children}</Grid>
        </Box>
      )}
    </div>
  );
}

function CallToActionSection() {
  const {isMobileView} = useNavBar();
  return (
    <Box sx={{
      width: '100%', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center',
      backgroundColor: 'rgba(231, 200, 115, 0.2)', borderRadius: '8px'
    }}>
      <Box sx={{ width: '85%', display: 'flex', flexDirection: isMobileView ? 'column' :'row', justifyContent: 'space-between' }}>
        <Box sx={{ textAlign: 'left' }}>
          <Typography sx={{ color: 'black', fontSize: 30, fontWeight: 'bold' }}>
            Become a real estate agent
          </Typography>
          <Typography color='black'>
            We only work with the best companies around the globe
          </Typography>
        </Box>
        <IconButton sx={{
          width: '174px', height: '54px', color: 'black', backgroundColor: 'rgba(231, 200, 115, 1)',
          borderRadius: '8px', display: 'flex', justifyContent: 'space-evenly'
        }}>
          Register now
          <ArrowRightAltIcon />
        </IconButton>
      </Box>
    </Box>
  );
}