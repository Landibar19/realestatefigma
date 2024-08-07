import React from 'react';
import { Box, Container, Typography } from '@mui/material'
import { Section2Content } from '../../SectionsContent/Section2Content';
import CardSlider from '../../SlideShow/CardSlider';



export const Section2 = () => {
    const data = Section2Content;
  return (
    <Container maxWidth="xxl"
    >
        <Box width='100%'>
            <Typography sx={{color:'black', fontWeight: 'bold', fontSize:40}}>Homes For You</Typography>
            <Typography sx={{color: 'black',fontSize: 17, padding: 2}}>Based on your view history</Typography>
            <CardSlider data={data} />
        </Box>
    </Container>
  )
}
