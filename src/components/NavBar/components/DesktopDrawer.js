import React from 'react';
import { IconButton} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';



export default function DesktopDrawer( {menu, isMobileView , openItems, handleToggle}) {

  return (
    <div>
      {isMobileView ? null : Array.isArray(menu) && menu.map((data) => (
        <IconButton
          key={data.id}
          size="large"
          onClick={(event) => handleToggle(event, data)}
        >
          {data.name}
          {openItems[data.id] ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </IconButton>
      ))}
    </div>
  );
}