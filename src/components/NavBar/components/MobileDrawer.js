import React from 'react';
import { Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
function MobileDrawer({children,menu, mobileOpen, handleClose }) {

  return (
    <Drawer 
      variant="temporary" 
      open={mobileOpen} 
      onClose={handleClose}
      anchor='left'
      PaperProps={{ 
        sx: { width: '50%', backgroundColor:'rgb(255, 255, 255,0.8)' } 
      }}
    >
      <div>
        <List>
          {menu.map((item) => (
            <Link to={item.link}  key={item.id} style={{ textDecoration: 'none' }}>
            <ListItem  onClick={handleClose}>
              <ListItemText>
                <Typography sx={{ color: 'black' }}>
                  {item.name}
                </Typography>
              </ListItemText>
            </ListItem>
            </Link>
          ))}
          {children}
        </List>
      </div>
    </Drawer>
  );
}

export default MobileDrawer;