import { Box, Divider, Grid, IconButton, Rating, Typography } from '@mui/material';
import CountUp from 'react-countup';
import { section7Content } from '../../SectionsContent/Section7Content';
import { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const Section7 = () => {
  const data = section7Content;
  const [currentSlide, setCurrentSlide] = useState(0);

return (
    <Box 
    sx={{
      
        display: 'flex', 
        flexDirection: 'column',
        justifyContent:'center', 
        alignItems: 'center', 
        padding:5       }}>
        <Box 
        sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent:'space-between',
            alignItems:'center',
            width: '100%'
            }}>
            <Box sx={{ display: 'flex', width:'100%', flexDirection: 'column', alignItems: 'center', padding:5 }}>
            <Typography sx={{fontSize:40, fontWeight:'bold', color:'black', textAlign:'left'}}>
                    {data.title}
            </Typography>
            <Typography sx={{paddingTop:5, color:'black', textAlign:'justify'}}>
                {data.description}
            </Typography>
            <Box 
            sx={{
                display: 'flex', 
                width:'100%', 
                flexDirection: 'row', 
                justifyContent:'flex-start', 
                alignItems: 'center',
                paddingTop:2,
                gap: '25%'
            }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{fontWeight:'bold', fontSize: 20}}>
            <CountUp end={10} duration={2.75} />
            m+
            </span>
            Happy People
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{fontWeight:'bold', fontSize: 20}}>4.88</span>
            <span>
            <Rating name="read-only" value={4} readOnly />
            
            </span>
            Overall Rating
            </Box>
            </Box>
            </Box>
            <Box sx={{width:'100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign:'left'}}>
                {section7Content.testimonial.map((item, index) => (
                    <div key={index} style={{display: index === currentSlide ? 'block' : 'none'}}>
                    <img src={item.testimonialImage} alt={item.name} />
                    <Typography  color='black' variant="h6">{item.name}</Typography>
                    <Typography variant="subtitle2">{item.position}</Typography>
                    <Typography variant="body1" color='black' width='50%'>{item.feedback}</Typography>
                    </div>
                ))}
                <Box sx={{ width:'100%', display:'flex', flexDirection:'row', gap:2}}>
                <IconButton 
                sx={{width:'50px', height:'30px', backgroundColor:'transparent', color:'black',border:'1px solid grey', borderRadius:'16px'}}
                onClick={() => setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : section7Content.testimonial.length - 1)}
                >
                <ArrowBackIosIcon sx={{fontSize: 10}} />
                </IconButton>
                <IconButton 
                sx={{width:'50px', height:'30px', backgroundColor:'transparent', color:'black',border:'1px solid grey', borderRadius:'16px'}}
                onClick={() => setCurrentSlide(currentSlide < section7Content.testimonial.length - 1 ? currentSlide + 1 : 0)}
                >
                <ArrowForwardIosIcon sx={{fontSize: 10}} />
                </IconButton>  
                </Box>
            </Box>
        </Box>
        <Divider sx={{width:'100%', height:'1px', backgroundColor:'grey', marginTop: 3}} />
        <Box sx={{paddingTop: 10}}>
            <Typography color='black'>Thousands of world’s leading companies trust Space</Typography>
            <Grid container spacing= {10} paddingTop={5}>
                    {data.companiesIcons.map((item, index) => (
                    <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
                            <img src={item.icon} alt={item.name} style={{width: '84px', height: '26px' ,objectFit:"contain" }} />
                    </Grid>
                    ))}
            </Grid>
        </Box>
    </Box>
)
}