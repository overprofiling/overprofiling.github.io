import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';


const pages = ['Downloads', 'Privacy Policy'];
const pages_url = {'Downloads': '/downloads', 'Privacy Policy': '/privacy_policy'};

const ResponsiveAppBar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky">
    <Container maxWidth="xl">
        <Toolbar disableGutters sx={{minHeight: "68.5px"}}>
        <Stack direction="row" spacing={1} alignItems="center" sx={{display: { xs: 'none', md: 'flex' }}}>
            <Avatar variant="rounded" src="/logo_128.png" alt="logo" component={Link} to={"/"}/>
            <Typography
                variant="h6"
                noWrap
                component={Link} to={"/"}
                sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                alignItems: 'center'
                }}
            >
                OVERPROFILING
            </Typography>
        </Stack>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={handleOpenNavMenu}
            >
            <MenuIcon />
            </IconButton>
            <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            onClose={handleCloseNavMenu}
            sx={{
                display: { xs: 'block', md: 'none' },
            }}
            >
            {pages.map((page) => (
                <MenuItem key={page} onClick={() => { handleCloseNavMenu()}} component={Link} to={pages_url[page]}>
                <Typography textAlign="center" style={{color: "white"}} >{page}</Typography>
                </MenuItem>
            ))}
            </Menu>
        </Box>
        <Typography
            variant="h5"
            noWrap
            sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            }}
        >
            OVERPROFILING
        </Typography>
        <Box sx={{ flexGrow: 1, mx: 1, display: { xs: 'none', md: 'flex' }}}>
            <Stack direction="row" spacing={1} divider={<Divider orientation="vertical" flexItem variant="middle"/>}>
            
            {pages.map((page) => (
            <Button
                key={page}
                sx={{  color: 'white', display: 'block' }}
                component={Link}
                to={pages_url[page]}
            >
                {page}
            </Button>
            ))}
            </Stack>
        </Box>

        </Toolbar>
    </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
