import React from 'react';

import { Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import useNavBar from '../../../hooks/useNavBar';

function MobileDrawer({ mobileOpen, handleClose }) {
  const { menu } = useNavBar();
  return (
    <Drawer variant="temporary" open={mobileOpen} onClose={handleClose}>
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
        </List>
      </div>
    </Drawer>
  );
}

export default MobileDrawer;