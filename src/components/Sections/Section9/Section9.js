import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Section9Content } from '../../SectionsContent/Section9Content';
import { IconButton } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';



export const Section9 = () => {
  const [value, setValue] = React.useState(0);
  const data = Section9Content;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', paddingTop:'4%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {data.map((section, index) => (
            <Tab label={section.title} key={index} sx={{textTransform:"capitalize",color:'black', fontWeight:'bold'}} />
          ))}
        </Tabs>
      </Box>
      {data.map((section, index) => (
        <TabPanel value={value} index={index} key={index}>
            {typeof section.content === 'string'
            ? <Typography color='black'>{section.content}</Typography>
            : section.content.map((item, i) => (
                <Grid item xs={6} sm={4} md={3} key={i}>
                <Typography color='black' textAlign="justify">{item.name}</Typography>
              </Grid>
              ))
            }
        </TabPanel>
        ))}

        <Box sx={{
          width:'100%', 
          height:'200px',
          display:'flex', 
          justifyContent: 'center', 
          alignItems:'center',
          backgroundColor:'rgba(231, 200, 115, 0.2)',
          borderRadius:'8px',
          }}>
          <Box sx={{width:'85%', display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
          <Box sx={{textAlign:'left'}}>
          <Typography sx={{color:'black', fontSize:30, fontWeight:'bold'}}>
            Become a real estate agent
          </Typography>
          <Typography color='black'>
          We only work with the best companies around the globe
          </Typography>
          </Box>
          <IconButton 
          style={{
            width:'174px', 
            height:'54px',
            color:'black', 
            backgroundColor:' rgba(231, 200, 115, 1)', 
            borderRadius:'8px',
            justifyContent:'space-evenly',
            }}>
           Register now
           <ArrowRightAltIcon style={{color:'black'}}/>
          </IconButton>
          </Box>
        </Box>
    </Box>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 10 }}>
          <Grid container spacing={2}>
            {children}
          </Grid>
        </Box>
      )}
    </div>
  );
}