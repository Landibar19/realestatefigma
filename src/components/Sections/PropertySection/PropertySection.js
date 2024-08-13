import React from 'react';
import { Box, Container, Typography } from '@mui/material'
import { PropertySectionContent } from '../../../api/SectionsContent/PropertySectionContent';
import CardSlider from '../../SlideShow/CardSlider';



export const PropertySection = () => {
    const data = PropertySectionContent;
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
