import './Header.css'
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, NavLink } from 'react-router-dom'


const Header = () => {
    const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Tabs
        TabIndicatorProps={{style: {background:'white'}}}
        value={value}
        onChange={handleChange}
        textColor="inherit"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab LinkComponent={NavLink} to='/' value="one" label="Home" />
        <Tab LinkComponent={NavLink} to='/about' value="two" label="About" />
        <Tab LinkComponent={NavLink} to='/books' value="three" label="Books" />
        <Tab LinkComponent={NavLink} value="four" label="Add Book" />
      </Tabs>
      </Toolbar>

    </AppBar>
  </Box>
  )
}

export default Header