// ImageSlider.js
import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useSlideShow from '../../hooks/useSlideShow';
import { Box, IconButton } from '@mui/material';

const ImageSlider = ({ images }) => {
  const { currentSlide, prevSlide, nextSlide } = useSlideShow(images);

  return (
    <Box sx={{ position: 'relative', width:'100%', height: 'auto'}}>
      <IconButton 
      onClick={prevSlide}
      sx={{ 
        position: 'absolute', 
        left: 0, top: '50%', 
        transform: 'translateY(-50%)',
        border:'1px solid grey',
        borderRadius: '16px',
        backgroundColor: 'grey',
        width: { xs: '30px', sm: '60px', md: '70px' },
        height: { xs: '30px', sm: '35px', md: '40px' }, 
         }}>
        <ArrowBackIosIcon />
      </IconButton>
      <img 
      src={images[currentSlide]} 
      alt={`Slide ${currentSlide + 1}`} 
      style={{ width: '100%', height: '100%', maxHeight: '400px', }} 
      />
      <IconButton
  onClick={nextSlide}
  sx={{
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    border: '1px solid grey',
    borderRadius: '24px',
    backgroundColor: 'grey',
    width: { xs: '30px', sm: '60px', md: '70px' },
    height: { xs: '30px', sm: '35px', md: '40px' }, 
  }}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default ImageSlider;