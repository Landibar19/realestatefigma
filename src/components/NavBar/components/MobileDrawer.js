import React from 'react';
import { Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';

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
            <ListItem button key={item.id} onClick={handleClose}>
              <ListItemText>
                <Typography sx={{ color: 'black' }}>
                  {item.name}
                </Typography>
              </ListItemText>
            </ListItem>
          ))}
          {children}
        </List>
      </div>
    </Drawer>
  );
}

export default MobileDrawer;