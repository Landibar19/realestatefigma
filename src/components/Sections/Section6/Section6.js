import { Box, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'

import { section6Content } from '../../SectionsContent/Section6Content';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CountUp from 'react-countup';


export const Section6 = () => {
    const { image,image1, title, description } = section6Content;
  return (
    <Box 
    sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height:'auto', 
        backgroundColor:'rgb(31, 75, 67)' ,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: '16px',
        margin: 'auto',
        marginTop: 5,
    }}>
    <Grid container spacing={2} sx={{display:'flex', justifyContent:'center',alignItems:'center'}}>
      <Grid item xs={12} sm={6}  >
      <Box sx={{position:'relative'}}>
    <img 
        src={image} 
        alt="Local expertise for luxury homes" 
        style={{
            width: '60%',
            height: '60%',
            objectFit: 'cover',
            borderRadius: '16px'
        }}
    />
    <img 
        src={image1} 
        alt='clients'
        style={{
            position: 'absolute',
            top: '5%',
            left: '25%',
            width: '20%',
            height: '10%'
        }}
    />
</Box>
      </Grid>
      <Grid item xs={12} sm={6} >
        <Box 
        sx={{width:'60%', 
        display:'flex', 
        flexDirection:'column',
        justifyContent:'center',
        textAlign:'left', 
        alignItems:'flex-start',
        paddingLeft: 5,
        }}>
        <Typography fontSize={40} gutterBottom>
          {title}  
        </Typography>
        <Typography fontSize={12} textAlign='justify' >
            {description}
        </Typography>
        <IconButton 
        sx={{
            width:'130px',
            height:'44px',
            backgroundColor:'rgb(231, 200, 115)',
            color: 'black', 
            borderRadius:'8px',
            marginTop: 5}}>
            <Typography color='black'>Learn More</Typography>
            <ArrowRightAltIcon />
        </IconButton>
        </Box>
      </Grid>
    </Grid>
    <Box 
    sx={{ width: '100%', 
    display: 'flex', 
    justifyContent:'space-evenly', 
    alignItems:'center', 
    flexDirection:'column', 
    paddingTop:5}}>
        <Typography fontSize={12} textAlign='justify'>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{color: 'rgb(231, 200, 115)', fontWeight:'bold', fontSize: 40}}>
            <CountUp end={18} duration={2.75} prefix='$' />
            M
            </span>
            Owned from properties transactions
        </Box>
        </Typography>
        <Typography fontSize={12} textAlign='justify' >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{color: 'rgb(231, 200, 115)', fontWeight:'bold', fontSize: 40}}>
            <CountUp end={15} duration={2.75} />
            K
            </span>
            Properties for Buy
        </Box>
        </Typography>
        <Typography fontSize={12} textAlign='justify' >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{color: 'rgb(231, 200, 115)', fontWeight:'bold', fontSize: 40}}>
            <CountUp end={10} duration={2.75} />
            K
            </span>
            Properties for Sell
            </Box>
        </Typography>
        <Typography fontSize={12} textAlign='justify' >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{color: 'rgb(231, 200, 115)', fontWeight:'bold', fontSize: 40}}>
            <CountUp end={800} duration={2.75} />
            </span>
            Daily completed transactions.
        </Box>
        </Typography>
</Box>
  </Box>
  )
}
