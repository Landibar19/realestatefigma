import { Box, Divider, Grid, IconButton, Rating, Typography } from '@mui/material';
import CountUp from 'react-countup';
import { ReviewContent } from '../../../api/SectionsContent/ReviewContent';
import { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useStyles } from './Styles';

const StatBox = ({styles, children }) => (
  <Box sx={styles.statItem}>
    {children}
  </Box>
);

const Testimonial = ({ item, isVisible }) => (
  <div style={{ display: isVisible ? 'block' : 'none' }}>
    <img src={item.testimonialImage} alt={item.name} />
    <Typography color='black' variant="h6">{item.name}</Typography>
    <Typography variant="subtitle2">{item.position}</Typography>
    <Typography variant="body1" color='black' width='50%'>{item.feedback}</Typography>
  </div>
);

export const ReviewSection = () => {
  const data = ReviewContent;
  const [currentSlide, setCurrentSlide] = useState(0);
  const styles = useStyles();

  return (
    <Box sx={styles.container}>
      <Box sx={styles.innerContainer}>
        <Box sx={styles.headerBox}>
          <Typography sx={styles.title}>{data.title}</Typography>
          <Typography sx={styles.description}>{data.description}</Typography>
          <Box sx={styles.statsBox}>
            <StatBox styles={styles}>
              <span style={styles.statText}>
                <CountUp end={10} duration={2.75} />m+
              </span>
              Happy People
            </StatBox>
            <StatBox styles={styles}>
              <span style={styles.statText}>4.88</span>
              <Rating name="read-only" value={4} readOnly />
              Overall Rating
            </StatBox>
          </Box>
        </Box>
        <Box sx={styles.testimonialBox}>
          {data.testimonial.map((item, index) => (
            <Testimonial key={index} item={item} isVisible={index === currentSlide} />
          ))}
          <Box sx={styles.navigationBox}>
            <IconButton
              sx={styles.navButton}
              onClick={() => setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.testimonial.length - 1)}
            >
              <ArrowBackIosIcon sx={styles.navIcon} />
            </IconButton>
            <IconButton
              sx={styles.navButton}
              onClick={() => setCurrentSlide(currentSlide < data.testimonial.length - 1 ? currentSlide + 1 : 0)}
            >
              <ArrowForwardIosIcon sx={styles.navIcon} />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Divider sx={styles.divider} />
      <Box sx={styles.companiesBox}>
        <Typography color='black'>Thousands of world’s leading companies trust Space</Typography>
        <Grid container spacing={10} paddingTop={5}>
          {data.companiesIcons.map((item, index) => (
            <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
              <img src={item.icon} alt={item.name} style={styles.companyIcon} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};