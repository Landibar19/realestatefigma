import React from 'react';
import { Box, Container, Typography } from '@mui/material'
import { Section2Content } from '../../SectionsContent/Section2Content';
import CardSlider from '../../SlideShow/CardSlider';



export const Section2 = () => {
    const data = Section2Content;
  return (
    <Container maxWidth="xxl"
    sx={{
        backgroundColor:'rgb(233, 233, 233)',
        backgroundSize: 'cover',
        width:'100%',
        height:'100vh', 
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        marginTop: 2,
        borderRadius:'16px',
        margin:'auto',
        gap:5}}>
        <Box width='100%'>
            <Typography sx={{color:'black', fontWeight: 'bold', fontSize:40}}>Homes For You</Typography>
            <Typography sx={{color: 'black',fontSize: 17, padding: 2}}>Based on your view history</Typography>
            <CardSlider data={data} />
        </Box>
    </Container>
  )
}
