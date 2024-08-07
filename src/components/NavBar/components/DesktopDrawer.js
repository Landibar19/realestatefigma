import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export default function DesktopDrawer({ menu, isMobileView, openItems, handleToggle }) {
  const [isHovered, setIsHovered] = useState(null);
  
  if (isMobileView || !Array.isArray(menu) || menu.length === 0) {
    return null;
  }

  return (
    <div>
      {menu.map((data) => (
        <Link key={data.id} to={data.link}>
          <IconButton
            size="large"
            onClick={(event) => handleToggle(event, data)}
            sx={{ cursor: 'pointer', textDecoration: openItems[data.id] || isHovered === data.id  ? "none" : "underline"
      }}
            onMouseEnter={() => setIsHovered(data.id)}
            onMouseLeave={() => setIsHovered(null)}
    >
            {data.name}
          </IconButton>
        </Link>
      ))}
    </div>
  );
}