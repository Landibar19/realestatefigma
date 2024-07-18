import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { Section5Content } from '../../SectionsContent/Section5Content';
import ImageSlider from '../../SlideShow/ImageSlider';
import ReactPlayer from 'react-player';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import useNavBar from '../../../hooks/useNavBar';

export const Section5 = () => {
    const { title, description, image1, image2, image3 } = Section5Content;
    const videoUrl = 'https://youtu.be/Tn6-PIqc4UM?feature=shared';
    const { isMobileView } = useNavBar();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, padding: 5 }}>
            <Typography variant="h2" sx={{ fontWeight: 'bold', color:'black' }}>{title}</Typography>
            <Typography variant='h5' sx={{color:'black'}}>{description}</Typography>
            <ImageSlider images={[image1, image2, image3]} />
            <Box sx={{ display: 'flex', flexDirection: isMobileView ? 'column' : 'row', gap: 4, width: isMobileView ? '100%': '80%',}}>
                <Box sx={{ position: 'relative', width: '100%', height:isMobileView ? 150 : 250, backgroundColor: 'black', borderRadius: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h6">280+</Typography>
                    <Typography>Properties</Typography>
                    <Typography sx={{ fontSize: 12, textAlign: 'center' }}>
                        Explore our wide variety of properties to find your dream home today
                    </Typography>
                    <IconButton sx={{ position: 'absolute', right: 0, bottom: 0, backgroundColor: 'white', color: 'black', borderRadius: 2 }}>
                        <ArrowRightAltIcon />
                    </IconButton>
                </Box>
                <ReactPlayer url={videoUrl} width="100%" height={isMobileView ? 150: 250} controls />
            </Box>
            <Box sx={{ width: '100%', maxWidth: isMobileView ? '100%': '80%', height:'100%'}}>
                <img src={image3} alt="" style={{ width: '100%', height:'100%', maxHeight:'400px', borderRadius: 2 }} />
            </Box>
        </Box>
    );
};