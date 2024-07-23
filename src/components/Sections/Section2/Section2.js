import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { Section2Content } from '../../SectionsContent/Section2Content';
import CardSlider from '../../SlideShow/CardSlider';

export const Section2 = () => {
    const theme = useTheme();
    const data = Section2Content;
    return (
        <div 
        style={{
            backgroundColor: 'rgb(233, 233, 233)',
            backgroundSize: 'cover',
            width: '100%',
            height: 'auto', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: 2,
            borderRadius: '16px',
            gap: 5,
            [theme.breakpoints.down('sm')]: {
                marginTop: 1,
                gap: 3,
            }
        }}>
            <Box width='100%'>
                <Typography sx={{
                    color: 'black', 
                    fontWeight: 'bold', 
                    fontSize: 40,
                    [theme.breakpoints.down('sm')]: {
                        fontSize: 30, 
                    }
                }}>Homes For You</Typography>
                <Typography sx={{
                    color: 'black',
                    fontSize: 17, 
                    padding: 2,
                    [theme.breakpoints.down('sm')]: {
                        fontSize: 15, 
                        padding: 1,
                    }
                }}>Based on your view history</Typography>
                <Box width='100%' display='flex' justifyContent='center'>
                 <CardSlider data={data} /> 
                </Box>
                
            </Box>
        </div>
    )
}