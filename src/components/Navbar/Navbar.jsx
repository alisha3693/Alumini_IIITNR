import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

const drawerWidth = 240;
const navItems = ['Home', 'Alumni Directory', 'Events', 'Contribute', 'Newsroom', 'Login'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const {isAuthenticated} = useAuthStore()
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          position: 'fixed',
          top: '30px',
          left: 0,
          right: 0,
          zIndex: 1301, // Ensures it is above everything
          boxShadow: '0',
          background: 'transparent',
        }}
      >
        <Toolbar>
          {/* Hamburger Menu Icon for screens below 700px */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { xs: 'block', md: 'none' }, // Show on mobile view
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Desktop Navigation (Hidden below 700px) */}
          <Box
            sx={{
              margin: 'auto',
              backgroundColor: '#0E0631',
              padding: '5px',
              borderRadius: '30px',
              display: { xs: 'none', md: 'flex' }, // Hide on mobile view
              alignItems: 'center',
              justifyContent: 'center',
              border: '4px solid #6A79FF',
              gap:"10px"
            }}
          >
              <Button  sx={{ color: 'white', fontWeight:"700" }}>
                Home
              </Button>
              <Button  sx={{ color: 'white', fontWeight:"700" }}>
                Alumni Directory
              </Button>
              <Button  sx={{ color: 'white', fontWeight:"700" }}>
                Events
              </Button>
              <Button  sx={{ color: 'white', fontWeight:"700" }}>
                Contribute
              </Button>
              <Button  sx={{ color: 'white', fontWeight:"700" }}>
                Newsroom
              </Button>
              {!isAuthenticated && <NavLink to="/login"><Button  sx={{ color: 'white', fontWeight:"700" }}>
                Login
              </Button></NavLink>}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile View */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' }, // Show only on mobile view
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default DrawerAppBar;
