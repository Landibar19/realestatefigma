import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Header = ({ logo }) => (
  <Box 
    sx={{ 
        width: '90%', 
        display:'flex', 
        justifyContent:'space-between', 
        alignItems:"center",padding:4, 
        borderBottom: 1, 
        borderColor: 'GrayText'
        }}>
    <img src={logo} alt='' style={{ marginLeft:'2%'}} />
    <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
        <Typography>
            Follow Us
        </Typography>
        <IconButton>
            <FacebookOutlinedIcon/>
        </IconButton>
        <IconButton>
            <TwitterIcon/>
        </IconButton>
        <IconButton>
            <InstagramIcon/>
        </IconButton>
        <IconButton>
            <LinkedInIcon/>
        </IconButton>
    </Box>
  </Box>
);

export default Header;