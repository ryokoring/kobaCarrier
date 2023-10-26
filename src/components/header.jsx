import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MenuAppBar() {

  const tabMapping = {
    "board": 0,
    "experience": 1,
    "keeplist": 2
  };

    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const router = useRouter();
    const [tabValue, setTabValue] = React.useState(tabMapping[router.query.tab]);


    const handleTabChange = (event,newValue) => {
      setTabValue(newValue);
    };

    const handleTabClick = (e, href,value) => {
      e.preventDefault();
      setTabValue(value);
      router.push(href);
    };
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    
    <Box sx={{ flexGrow: 1 }}>
      {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
      <AppBar position="static" sx={{ backgroundColor: '#6A5ACD' }}>
        <Toolbar>
          
        <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontFamily: "Nico Moji" }}>
  KOBA carrier
</Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <AppBar position="static" sx={{ backgroundColor: '#E5E5E5' }}>
      <Tabs value={tabValue} onChange={handleTabChange} centered>
        <Tab label="掲示板" onClick={(e) => handleTabClick(e, "/?tab=board", 0)} />
        <Tab label="体験談" onClick={(e) => handleTabClick(e, "/user/experience?tab=experience", 1)} />
        <Tab label="キープリスト" onClick={(e) => handleTabClick(e, "/user/keeplist?tab=keeplist", 2)} />
      </Tabs>
        </AppBar>
      
    </Box>
  );
}