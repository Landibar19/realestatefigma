// useCustomTheme.js
import { createTheme } from '@mui/material/styles';

export const useCustomTheme = () => {
  const theme = createTheme({
    components: {
      MuiToolbar: {
        styleOverrides: {
          root: {
            display: 'flex', 
            flexDirection: 'row', 
          }
        }
      },
      MuiTypography:{
        styleOverrides: {
          root:{
            fontFamily: 'Roboto, sans-serif',
            color:'white',
            fontSize: '15px'
          }   
        }
      },
      MuiIconButton:{
        styleOverrides: {
          root:{
            fontFamily: 'Roboto, sans-serif',
            color:'white',
            fontSize: '16px'
          }   
        }
      }
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 640, 
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });

  return theme;
};