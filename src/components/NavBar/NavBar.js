import React from 'react';
import { AppBar, Toolbar, IconButton, Box, Typography } from '@mui/material';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

import useNavBar from '../../hooks/useNavBar';
import MobileDrawer from './components/MobileDrawer';
import DesktopDrawer from './components/DesktopDrawer';
import logo from '../../assets/Section1/logo-white.svg.png'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';





export default function NavBar() {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const {
    menu,
    mobileOpen,
    openItems,
    anchorEl,
    activeItem,
    isMobileView,
    handleDrawerToggle,
    handleToggle,
    handleClose
  } = useNavBar();

  return (
    <AppBar 
      position="absolute" 
      color='transparent' 
      sx={{height:'60px',padding:4, justifyContent: 'center'}}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between', 
          width: '100%',
        }}
      >
        <img src={logo} alt="Logo" style={{height:'100%', maxHeight:'30px'}} />
        <Toolbar 
          sx={{ 
            height: 'auto',
            justifyContent: 'center',
            display: 'flex', 
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >    
          {isMobileView ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
           ''
          )}
        </Toolbar>
        <DesktopDrawer 
          menu={menu} 
          handleToggle={handleToggle} 
          openItems={openItems} 
          anchorEl={anchorEl} 
          handleClose={handleClose} 
          activeItem={activeItem} 
          isMobileView={isMobileView} 
        />
        <MobileDrawer 
          menu={menu} 
          handleToggle={handleToggle} 
          openItems={openItems} 
          anchorEl={anchorEl} 
          handleClose={handleClose} 
          activeItem={activeItem} 
          isMobileView={isMobileView}
          mobileOpen={mobileOpen} 
        />
        <Box sx={{ 
          display: 'flex',
          flexDirection:isMobileView ? 'column': 'row',
          justifyContent: 'space-between',
          position: isMediumScreen ? 'absolute' : 'relative',
          top: isMediumScreen ? '100%' : 'initial',
          gap:1,
          paddingBottom:5
        }}>
          <IconButton sx={{color:'white'}}>
            <PhoneOutlinedIcon />
            <Typography color='white'>
              +1 234 567 890
            </Typography>
          </IconButton>
          <IconButton sx={{width:'40px', color: 'white',  border: '1px solid white', borderRadius:'100%'}}>
            <PermIdentityOutlinedIcon />
          </IconButton>
          <IconButton sx={{color: 'white',  border: '1px solid white', borderRadius:'24px'}}>
            <Typography color='white'>
              Add property
            </Typography>
          </IconButton>
        </Box>
      </Box>
    </AppBar>
  );
};