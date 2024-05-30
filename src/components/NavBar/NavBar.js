import React from 'react';
import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useNavBar from '../../hooks/useNavBar';
import MobileDrawer from './components/MobileDrawer';
import DesktopDrawer from './components/DesktopDrawer';
import logo from '../../assets/Section1/logo-white.svg.png'
import ButtonDrawer from './components/ButtonDrawer';

export default function NavBar() {
  
  const {
    menu,
    mobileOpen,
    openItems,
    anchorEl,
    activeItem,
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
        >
          {isMobileView && <ButtonDrawer isMobileView={isMobileView} isMediumView={isMediumView}/>}
        </MobileDrawer>
       {isMobileView ? '' : <ButtonDrawer isMobileView={isMobileView} isMediumView={isMediumView}/>}
        
      </Box>
    </AppBar>
  );
};