import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import LeftDrawer from './LeftDrawer';
import Typography from '@mui/material/Typography';

const Navbar = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className='fixed top-0 h-[50px] w-full z-40'>
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className=''>
        <h5 className='text-sm'>computer service</h5>
          </Typography>
          <div className='md:hidden flex justify-end items-center w-full'>
            <LeftDrawer />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;