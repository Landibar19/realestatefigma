import { useState } from 'react';
import { useMediaQuery, useTheme} from '@mui/material';
import {menu} from '../api/menu';

export default function useNavBar() {
  const theme = useTheme()

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openItems, setOpenItems] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleToggle = (event, data) => {
  
    if (activeItem !== data.id) {
      setAnchorEl(null);
    }
  
    setOpenItems(prevOpenItems => ({
      ...prevOpenItems,
      [data.id]: !prevOpenItems[data.id]
    }));
  
    setTimeout(() => {
      setAnchorEl(event.currentTarget);
      setActiveItem(data.id);
    }, 0);
  };

  const handleClose = () => {
    setOpenItems({});
    setAnchorEl(null);
    setMobileOpen(false)
  };

  return {
    menu,
    mobileOpen,
    openItems,
    anchorEl,
    activeItem,
    isMobileView,
    handleDrawerToggle,
    handleToggle,
    handleClose
  };
}