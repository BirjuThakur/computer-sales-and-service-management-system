import React from 'react';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const LeftDrawerOpen = () => {

  return (
    <div className='w-full h-screen flex flex-col pt-12 justify-start items-center'>
      <div className='w-full flex flex-col justify-center items-start gap-3 mt-2 capitalize'>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='hidden md:block'>
                <NavLink to="/" className="text-white p-2">home</NavLink>
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='hidden md:block'>
                <NavLink to="/customer" className="text-white p-2">customer</NavLink>
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='hidden md:block'>
                <NavLink to="/employee" className="text-white p-2">employee</NavLink>
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='hidden md:block'>
                <NavLink to="/product" className="text-white p-2">product</NavLink>
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='hidden md:block'>
                <NavLink to="/inventory" className="text-white p-2">inventory</NavLink>
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='hidden md:block'>
                <NavLink to="/transaction" className="text-white p-2">transaction</NavLink>
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='hidden md:block'>
                <NavLink to="/" className="text-white p-2">supplier</NavLink>
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='hidden md:block'>
                <NavLink to="/" className="text-white p-2">accounts</NavLink>
              </Typography>
            </div>
      </div>
  );
}

export default LeftDrawerOpen;