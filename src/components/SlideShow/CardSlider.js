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


const NextArrow = ({ className, style, onClick }) => (
    <div
      className={className}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    >
      <ArrowForwardIosIcon />
    </div>
  );
  
  const PrevArrow = ({ className, style, onClick }) => (
    <div
      className={className}
      style={{ ...style, display: "block", color: "black", }}
      onClick={onClick}
    >
      <ArrowBackIosIcon />
    </div>
  );

  
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

const CardSlider = ({ data }) => {
    const {isMobileView} = useNavBar();
return (
    <Slider {...settings} slidesToShow={isMobileView ? 1 : 3}  >
      {data.map((item, index) => (
        <div key={index}>
        <Card 
  sx={{
    margin:'auto',
    padding: '10px 10px 0px 10px', 
    position: 'relative', 
    width: { xs: '90%', sm: '300px' }, 
    height:"auto", 
    display: 'flex', 
    flexDirection: 'column',
    borderRadius:'24px',
  }}
>
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1 }}>
    <img
      src={item.image}
      alt={item.title}
      style={{ width: '95%', height:'auto', objectFit: 'cover', borderRadius:'16px' }}
    />
    <Box 
      sx={{ 
        position: 'absolute', 
        top: '35px', left: '35px', 
        color: 'white', 
        padding: '5px', 
        backgroundColor: 'rgb(31, 75, 67)', 
        borderRadius:'16px'
      }}
    >
      <Typography variant="body2" >
        {item.status}
      </Typography>
    </Box>
  </Box>
  <CardContent>
    <Box width='100%' display="flex" flexDirection="row" justifyContent="space-between" margin={2}>
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <Typography component="div" sx={{color:'black', fontSize:20, fontWeight:'bold' }}>
          {item.title}
        </Typography>
        <Box 
          sx={{
            display:'flex', 
            flexDirection:'row',
            alignItems:'center', 
            justifyContent:'center', 
            color: 'black'
          }}
        >
          <LocationOnOutlinedIcon />
          <Typography variant="body2" color='black'>
            {item.address}
          </Typography>
        </Box>
      </Box>
      <Typography  component="div" color='red' fontWeight='bold'>
        {item.price}
      </Typography>
    </Box>
    <Box sx={{width:'100%', display:'flex', flexDirection:'row',justifyContent:'left', paddingLeft:2}}>
      <Typography color='black' sx={{display:'flex', flexDirection:'row', paddingRight:2}}>
        <img src={icon1} alt="icon1" style={{width:'20px', height:'20px'}}/>
        {item.beds}
      </Typography>
      <Typography color='black' sx={{display:'flex', flexDirection:'row', paddingRight:2}}>
        <img src={icon2} alt="icon2" style={{width:'20px', height:'20px'}}/>
        {item.baths}
      </Typography>
      <Typography color='black' sx={{display:'flex', flexDirection:'row', paddingRight:2}}>
        <img src={icon3} alt="icon3" style={{width:'20px', height:'20px'}} /> 
        {item.sqft}
      </Typography>
    </Box>
  </CardContent>
</Card>
        </div>
      ))}
    </Slider>
  );
}

export default CardSlider;