import React from 'react';
import { Box, Grid, Typography } from '@mui/material'
import { Section4Content } from '../../SectionsContent/Section4Content';

export const Section4 = () => {
    const data = Section4Content;
    return (
        <div 
        style={{
            height:'auto',
            width:'auto',
            display:'flex', 
            justifyContent:'center',
            flexDirection:'column',
            alignItems:'center', 
            backgroundColor: 'rgb(231, 200, 115)', 
            borderRadius: '16px',
            margin: 'auto',
            padding:'5%'
            }}
            >
            <Box padding="5%">
                <Typography sx={{color:'black', fontSize: 40, fontWeight:'bold', textAlign:'center'}}>
                    Why Choose Us
                </Typography>
                <Typography variant="h5" sx={{color:'black', textAlign:'center'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Typography>
            </Box>
            <Grid container 
            sx={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
                {data.map( (item, index) => (
                    <Grid item key={index} xs={12} sm={6} lg={3}>
                        <img src={item.icon} alt="icon" style={{width:'50px', height:'50px'}}/>
                        <Typography sx={{fontWeight:'bold', color:'black'}}>{item.title}</Typography>
                        <Typography color='black'>{item.description}</Typography>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
