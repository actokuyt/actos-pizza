"use client"

import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function BottomNav() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{}} className='card' value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeOutlinedIcon />}
      />
      <BottomNavigationAction
        label="Orders"
        value="orders"
        icon={<ReceiptOutlinedIcon />}
      />
      <BottomNavigationAction
        label="Profile"
        value="profile"
        icon={<AccountCircleOutlinedIcon />}
      />
    </BottomNavigation>
  );
}