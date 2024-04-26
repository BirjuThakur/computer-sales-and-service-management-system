import React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import MenuIcon from "@mui/icons-material/Menu";
import Typography from '@mui/material/Typography';

export default function LeftDrawer() {

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, left: open });
  };

  const handleDashboardClick = () => {
    // Close the drawer when dashboard is clicked
    setState({ ...state, left: false });
  };

  return (
    <div>
      <Button onClick={toggleDrawer(true)} style={{ color: "inherit" }} className='mt-[-8px]'>
      <MenuIcon />
      </Button>
      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer(false)}
        PaperProps={{
            style: {
              width: 200, 
            },
          }}
      >
        <div className='p-3 capitalize'>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         <h1 className='text-sm w-full p-1'>sales and service system</h1>
          </Typography>
          <div className='flex flex-col justify-center items-start gap-3 mt-4 capitalize'>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className=' md:block' onClick={handleDashboardClick}>
                <NavLink to="/" >home</NavLink>
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className=' md:block' onClick={handleDashboardClick}>
                <NavLink to="/customer" >customer</NavLink>
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className=' md:block' onClick={handleDashboardClick}>
                <NavLink to="/employee" >employee</NavLink>
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className=' md:block' onClick={handleDashboardClick}>
                <NavLink to="/product" >product</NavLink>
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className=' md:block' onClick={handleDashboardClick}>
                <NavLink to="/inventory" >inventory</NavLink>
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className=' md:block' onClick={handleDashboardClick}>
                <NavLink to="/transaction" >transaction</NavLink>
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className=' md:block' onClick={handleDashboardClick}>
                <NavLink to="/" >supplier</NavLink>
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className=' md:block' onClick={handleDashboardClick}>
                <NavLink to="/" >accounts</NavLink>
              </Typography>
            </div>
        </div>
      </Drawer>
    </div>
  );
};
