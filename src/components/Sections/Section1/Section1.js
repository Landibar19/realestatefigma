import { Box, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import SearchComponent from '../../Search/Search'
import useNavBar from '../../../hooks/useNavBar'

export const Section1 = () => {
    const [active, setActive] = useState('Sale')
    const{isMobileView} = useNavBar();
  return (
    <Box 
    sx={{display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center', 
    height:'100vh', 
    width:'100%',
    gap: 3,
    }}
    >
        <Box sx={{border:'1px solid white', borderRadius: '24px'}}>
            <IconButton>
            <Typography sx={{textTransform:'uppercase'}}>
                Let's guide your Home
            </Typography>
            </IconButton>
        </Box>
        <Box sx={{width: isMobileView ?'90%': '30%'}}>
            <Typography sx={{fontSize:'36px'}} >
               Discover a place you'll love to live
            </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
      <Typography
        onClick={() => setActive('Sale')}
        sx={{ cursor: 'pointer', textDecoration: active === 'Sale' ? 'underline' : 'none' }}
      >
        Sale
      </Typography>
      <Typography
        onClick={() => setActive('Rent')}
        sx={{ cursor: 'pointer', textDecoration: active === 'Rent' ? 'underline' : 'none' }}
      >
        Rent
      </Typography>
    </Box>
        <Box width={isMobileView? '90%': '30%'}>
          <SearchComponent />
        </Box>
    </Box>
  )
}