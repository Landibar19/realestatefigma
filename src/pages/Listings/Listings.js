import React from 'react';
import { Box, Typography } from '@mui/material'

import photo from '../../assets/listing/image.jpeg';
import { PropertyCard } from '../../components/Card/PropertyCard';
import { Footer } from '../../components/Footer/Footer';




export const Listings = () => {
  return (
    <Box >
      <Box>
        <Box sx={{width:'100%', height:'100%', position:"relative"}} >
        <Typography variant="h4" 
        sx={{
          position: 'absolute', 
          textAlign: 'center', 
          fontWeight: 'bold', 
          fontSize: {xs: '1.2rem', sm: '2rem', md: '2.5rem', lg: '3rem'},
          left: '50%',
          top: '40%',
          transform: 'translateX(-50%)',
          backgroundColor: 'rgba(0,0,0,0.5)',
          borderRadius: 8,
          p: 2,
          mt: 5,
          color: 'white',
          zIndex: 100
          }}
          >
          Best Properties in the cities
        </Typography>
          <img src= {photo} alt="" style={{height:'100%', maxHeight: '500px', width: '100%'}}/>
        </Box>
        <Box sx={{backgroundColor:'rgb(233, 233, 233)', p: 2}}>
          <Typography variant="h4" sx={{textAlign: 'center', fontWeight: 'bold', fontSize: '2rem', mt: 5, color:'black'}}>
            Find the bes places for you
          </Typography>
          <Box sx={{mt: 5, gap:2}}>
            <PropertyCard/>
          </Box>
        </Box>
      </Box>
      <Footer/>
    </Box>
  )
}

