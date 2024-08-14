import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { PhotoPropertyContent } from '../../../api/SectionsContent/PhotoPropertyContent';
import ImageSlider from '../../SlideShow/ImageSlider';
import ReactPlayer from 'react-player';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import useNavBar from '../../../hooks/useNavBar';
import { useStyles } from './Styles';

export const PhotoPropertySection = () => {
    const { title, description, image1, image2, image3 } = PhotoPropertyContent;
    const videoUrl = 'https://youtu.be/Tn6-PIqc4UM?feature=shared';
    const { isMobileView } = useNavBar();
    const styles=useStyles(isMobileView);

    return (
        <Box sx={styles.container}>
            <Typography variant="h2" sx={styles.title}>{title}</Typography>
            <Typography variant='h5' sx={styles.description}>{description}</Typography>
            <Box sx={styles.slideImage} >
            <ImageSlider images={[image1, image2, image3]} />
                <img src={image3} alt="" style={styles.mainImage} />
            </Box>
            <Box sx={{ ...styles.flexBox, flexDirection: isMobileView ? 'column' : 'row', width: isMobileView ? '100%' : '70%' }}>
                <Box sx={{ ...styles.infoBox, height: isMobileView ? 150 : 250 }}>
                    <Typography variant="h6">280+</Typography>
                    <Typography>Properties</Typography>
                    <Typography sx={styles.infoText}>
                        Explore our wide variety of properties to find your dream home today
                    </Typography>
                    <IconButton sx={styles.iconButton}>
                        <ArrowRightAltIcon />
                    </IconButton>
                </Box>
                <ReactPlayer url={videoUrl} width="100%" height={isMobileView ? 150 : 250} controls />
            </Box>
           
        </Box>
    );
};