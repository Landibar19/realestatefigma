import { Box, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import SearchComponent from '../../Search/Search';
import useNavBar from '../../../hooks/useNavBar';
import useStyles from './Styles';

export const SearchSection = () => {
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