// SubscribeSection.js
import React from 'react';
import { Grid, Typography, TextField } from '@mui/material';

const SubscribeSection = () => (
  <Grid item textAlign='left'>
    <Typography variant="h6" color='rgb(255, 255, 255,0.47)' paddingBottom={2}>
    Subscribe
    </Typography>
    <TextField 
    label="Email" 
    variant="outlined" 
    fullWidth 
    sx={{
        color:'white', 
        border:'1px solid white', 
        borderRadius:'8px',
        '& .MuiInputLabel-root': {
            color: 'white',
        },
        '& .MuiInputBase-input': {
            color: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
    }} 
/>
  </Grid>
);

export default SubscribeSection;