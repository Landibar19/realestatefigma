import React from 'react';
import { AppBar, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useNavBar from '../../hooks/useNavBar';
import MobileDrawer from './components/MobileDrawer';
import DesktopDrawer from './components/DesktopDrawer';
import logo from '../../assets/Section1/logo-white.svg.png';
import ButtonDrawer from './components/ButtonDrawer';

export default function NavBar() {
  
  const {
    menu,
    mobileOpen,
    openItems,
    isMobileView,
    isMediumView,
    handleDrawerToggle,
    handleToggle,
    handleClose
  } = useNavBar();

  return (
    <AppBar 
      position="absolute" 
      color='transparent' 
      sx={{height:'80px',padding:4, }}
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
        <DesktopDrawer 
          menu={menu}
          handleToggle={handleToggle} 
          openItems={openItems}  
          isMobileView={isMobileView} 
        />
        <MobileDrawer 
          menu={menu} 
          handleClose={handleClose} 
          mobileOpen={mobileOpen} 
        >
          {isMobileView && <ButtonDrawer isMobileView={isMobileView} isMediumView={isMediumView}/>}
        </MobileDrawer>
        {isMobileView ? '' : <ButtonDrawer isMobileView={isMobileView} isMediumView={isMediumView}/>}
        {isMobileView && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ marginLeft: 'auto' }} 
          >
            <MenuIcon />
          </IconButton>
        )}
      </Box>
    </AppBar>
  );
};