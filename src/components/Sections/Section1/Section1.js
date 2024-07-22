import { Box, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import SearchComponent from '../../Search/Search';
import useNavBar from '../../../hooks/useNavBar';
import bgImage from '../../../assets/Section1/bgImage.png';

const useStyles = (isMobileView) => ({
  sectionContainer: {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%', 
    gap: 3,
  },
  titleBox: {
    border: '1px solid white', 
    borderRadius: '24px',
  },
  mainText: {
    width: isMobileView ? '90%' : '30%',
    fontSize: '36px',
  },
  navBox: {
    display: 'flex', 
    flexDirection: 'row', 
    gap: 5,
  },
  searchBox: {
    width: isMobileView ? '90%' : '30%',
  },
});

export const Section1 = () => {
  const [active, setActive] = useState('Sale');
  const { isMobileView } = useNavBar();
  const styles = useStyles(isMobileView);

  return (
    <Box sx={styles.sectionContainer}>
      <Box sx={styles.titleBox}>
        <IconButton>
          <Typography sx={{ textTransform: 'uppercase' }}>
            Let's guide your Home
          </Typography>
        </IconButton>
      </Box>
      <Box sx={styles.mainText}>
        <Typography>
          Discover a place you'll love to live
        </Typography>
      </Box>
      <Box sx={styles.navBox}>
        {['Sale', 'Rent'].map((option) => (
          <Typography
            key={option}
            onClick={() => setActive(option)}
            sx={{ cursor: 'pointer', textDecoration: active === option ? 'underline' : 'none' }}
          >
            {option}
          </Typography>
        ))}
      </Box>
      <Box sx={styles.searchBox}>
        <SearchComponent />
      </Box>
    </Box>
  );
};