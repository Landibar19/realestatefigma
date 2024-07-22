import React from 'react';
import Slider from 'react-slick';
import { Card, CardContent, Typography, Box } from '@mui/material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import icon1 from '../../assets/Section2/Icon (1).png';
import icon2 from '../../assets/Section2/Icon (2).png';
import icon3 from '../../assets/Section2/Icon (3).png';
import useNavBar from '../../hooks/useNavBar';

const Arrow = ({ Icon, className, style, onClick }) => (
  <div className={className} style={{ ...style, display: "block", color: "black" }} onClick={onClick}>
    <Icon />
  </div>
);

const PropertyDetail = ({ icon, detail }) => (
  <Box sx={{ display: 'flex', flexDirection: 'row', pr: 2 }}>
    <img src={icon} alt="" style={{ width: '20px', height: '20px' }} />
    <Typography color="black">{detail}</Typography>
  </Box>
);

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  nextArrow: <Arrow Icon={ArrowForwardIosIcon} />,
  prevArrow: <Arrow Icon={ArrowBackIosIcon} />,
  display: 'flex', flexDirection: 'row', paddingRight: 2,
};

const CardSlider = ({ data }) => {
  const { isMobileView, isMediumView } = useNavBar();

  return (
    <Slider {...settings} slidesToShow={isMobileView ? 1 : isMediumView ? 2 : 3}>
      {data.map((item, index) => (
        <Box key={index} 
        sx={{ 
          m: 'auto', 
          p: '10px', 
          width: { xs: '90%', sm: '300px' }, 
          height: "auto", 
          display: 'flex', 
          flexDirection: 'column', 
          borderRadius: '24px' 
          }}>
          <Card sx={{position:'relative', margin:3}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1 }}>
              <img 
              src={item.image} 
              alt={item.title} 
              style={{ 
                width: '95%',
                height: 'auto', 
                objectFit: 'cover', 
                borderRadius: '16px',
                padding:'5px',
                }} />
              <Box sx={{ position: 'absolute',top:"5%", left:"5%", color: 'white', p: '5px', backgroundColor: 'rgb(31, 75, 67)', borderRadius: '16px' }}>
                <Typography variant="body2">{item.status}</Typography>
              </Box>
            </Box>
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', m: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Typography sx={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>{item.title}</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', color: 'black' }}>
                    <LocationOnOutlinedIcon />
                    <Typography variant="body2" color="black">{item.address}</Typography>
                  </Box>
                </Box>
                <Typography sx={{ color: 'red', fontWeight: 'bold' }}>{item.price}</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', pl: 2 }}>
                <PropertyDetail icon={icon1} detail={item.beds} />
                <PropertyDetail icon={icon2} detail={item.baths} />
                <PropertyDetail icon={icon3} detail={item.sqft} />
              </Box>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Slider>
  );
}

export default CardSlider;