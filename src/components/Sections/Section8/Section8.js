import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';
import { Section8Content } from '../../SectionsContent/Section8Content';
import { useState } from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export const Section8 = () => {
    const [showMore, setShowMore] = useState(false);
    const data = Section8Content;
    return (
        <Box height="auto">
        <Box sx={{display:'flex', flexDirection:'column'}}>
          <Typography component="div" color='black' sx={{fontSize:40,fontWeight: 'bold', padding:3}}>
            Recent articles nad news
        </Typography>
        <Typography variant="subtitle1" color="black" sx={{padding:5}}>
            lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Typography>  
        </Box>
        <Grid container spacing={2} padding={2} >
            {data.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <Card sx={{ width: '100%', height: 'auto' }}>
                        <CardMedia
                            component="img"
                            width='326'
                            height="217"
                            image={item.image}
                            alt={item.title}
                        />
                        <CardContent>
                        <Box sx={{display:'flex',flexDirection:'row', justifyContent:"center", gap:2}}>
                        <Typography variant="subtitle1" color="text.secondary">
                                {item.propertyType} <FiberManualRecordIcon style={{fontSize:10}}/>
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary">
                                {new Date().toLocaleDateString('en-US', 
                                { year: 'numeric', month: 'long', day: 'numeric'
                                })}
                            </Typography>
                        </Box>
                            <Typography component="div" sx={{color:'black', fontSize:17, fontWeight:"bold"}}>
                                {item.title}
                            </Typography>
                            <Box>
                            <Typography variant="body2" color="text.secondary">
                                {showMore ? item.description : item.description.substring(0, 100)}
                            </Typography>
                            <Typography 
                            variant="body2" color="text.secondary" 
                            onClick={() => setShowMore(!showMore)} 
                            style={{
                                color: 'black', 
                                cursor: 'pointer',
                                display:'flex',
                                justifyContent:'center',
                                alignItems:"center",
                                gap:3
                            }}>
                                {showMore ? 'Read Less' : 'Read More'}
                                <ArrowRightAltIcon/>
                            </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            ))}         
        </Grid>
        </Box>
        
    );
};