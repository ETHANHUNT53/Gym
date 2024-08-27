import React, { useState } from 'react';
import { Menu, MenuItem, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

function UserProfile() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
        <AccountCircle />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
        <MenuItem onClick={handleMenuClose}>Log Out</MenuItem>
      </Menu>
    </div>
  );
}

export default UserProfile;
