import React from 'react';
import { Box, Typography } from '@mui/material';
import CountUp from 'react-countup';
import { useStyles } from './Styles';

const CountUpBox = ({ end, duration, prefix, suffix, description }) => {
    const styles = useStyles();

    return (
  <Typography component='div' fontSize={12} textAlign='justify'>
    <Box sx={styles.countUpBox}>
      <span style={styles.countUpText}>
        <CountUp end={end} duration={duration} prefix={prefix} />
        {suffix}
      </span>
      {description}
    </Box>
  </Typography>
);
}
export default CountUpBox;