import React from 'react'
import { Box, IconButton, Typography } from '@mui/material';
import { Section5Content } from '../../SectionsContent/Section5Content';
import ImageSlider from '../../SlideShow/ImageSlider';
import ReactPlayer from 'react-player';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import useNavBar from '../../../hooks/useNavBar';

export const Section5 = () => {
    const {title, description, image1, image2, image3} = Section5Content;
    const videoUrl = 'https://youtu.be/Tn6-PIqc4UM?feature=shared';
    const {isMobileView} = useNavBar();
    return (
        <div>
            <Box 
            sx={{
                display:'flex',
                flexDirection:'column', 
                justifyContent:'center', 
                alignItems:'center',
                padding:5,
                }}>
                <Typography sx={{color:'black', fontWeight:'bold', fontSize:40}}>{title}</Typography>
                <Typography color='black'>{description}</Typography>
            </Box>
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',}}>
                <Box sx={{display:'flex', flexDirection:'column', width:{xs:'100%', sm:'70%'} , gap:3}}>
                   <ImageSlider images={[image1, image2, image3]} />
                    <Box sx={{display:'flex', flexDirection: isMobileView ? 'column' : 'row', gap: 4}}>
                        <Box 
                        sx={{
                            position:'relative',
                            width:{xs:'100%', sm:'70%'	}, 
                            height:'250px', 
                            backgroundColor:'black',
                            display:'flex', 
                            justifyContent:'center', 
                            alignItems:'center',
                            flexDirection:'column',
                            borderRadius: '16px',
                            }}>
                            <Typography sx={{fontSize: 24}}>280+</Typography>
                            <Typography sx={{fontSize: 17}}>Properties</Typography>
                            <Typography fontSize={12} width='200px'>
                            Explore our wide variety of properties
                            to fid your dream home today
                            </Typography>
                            <IconButton sx={{backgroundColor:'white', color:' black', borderRadius:'16px',position:'absolute', right:0, bottom:0}}>
                                <ArrowRightAltIcon />
                            </IconButton>
                        </Box>
                        <Box sx={{ width:{xs:'100%', sm:'70%'}, height:'auto'}}>
                            <ReactPlayer 
                                url={videoUrl} 
                                width='100%'
                                height='100%'
                                controls={true}
                            
                            />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: {xs:"100%", sm:'70%'}, height:'auto'}}>
                    <img 
                    src={image3} 
                    alt="" 
                    style={{
                        width:'100%', 
                        height: 'auto', 
                        objectFit:'cover',
                        borderRadius:'16px'}}/>
                    <Typography></Typography>
                    <Typography></Typography>
                    <Typography></Typography>
                </Box>
            </Box>
        </div>
    )
}