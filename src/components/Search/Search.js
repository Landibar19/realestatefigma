import React from 'react';
import { TextField, Box } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchComponent = () => {
  return (
    <Box 
      sx={{ 
        position: 'relative', 
        display: 'flex', 
        alignItems: 'center',
        width: '100%', 
        borderRadius: '36px', 
        backgroundColor: 'white',
      }}
    >
      <TextField 
  variant="outlined" 
  placeholder="Enter Name, Keywords..."
  fullWidth
  sx={{
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'transparent',
      },
      '&:hover fieldset': {
        borderColor: 'transparent',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'transparent', 
      },
    },
  }}
/>
      <Box 
        sx={{
          position: 'absolute', 
          right: '10px', 
          backgroundColor: 'rgb(231, 200, 115)', 
          height: '80%',
          width: '12%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          border: '1px solid black',
        }}
      >
        <SearchOutlinedIcon 
          sx={{
            cursor: 'pointer',
          }}
        />
      </Box>
    </Box>
  );
}

export default SearchComponent;