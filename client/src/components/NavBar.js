import * as React from 'react';
import Logout from '@mui/icons-material/Logout';
import { useEffect } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import AppBar from '@mui/material/AppBar';
import { Avatar, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import {brown, green, pink } from '@mui/material/colors'; 
import { useNavigate } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import HomeIcon from '@mui/icons-material/Home'; 
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LogoutIcon from '@mui/icons-material/Logout'; 
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';



const pages = ['ABOUT', 'SELL', 'BUY', 'PROFILE', 'LOGOUT'];


function ResponsiveAppBar({ cartCount, user, setUser, setDarkMode, darkMode }) {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    
    const theme = createTheme({
        palette: {
            primary: {
                // Purple and green play nicely together.
                main: brown[500],
                pinker: pink[200],
                // main: '#efd6ed',
                darker: '#bca5bb',
            },
            secondary: {
                // This is green.A700 as hex.
                main: '#cfe0c3',
                darker: '#9eae93',
                darkText: '#3b4234;'
            },
        },
    });
    function handleLogout() {
        fetch("/api/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser({});
                navigate('/login')
            }
        });
    }

    function openShoppingCart() {
        navigate("/mycart")
    }

    const darkBrown = '#795548';
    const mainBrown = '#e8eaf6';
    const lightBrown = brown['A100'];


    // const StyledBadge = styled(Badge)(({ theme }) => ({
    //     '& .MuiBadge-badge': {
    //         color: "primary.pinker",
    //     },
    // }));

    return (
        <AppBar theme={theme} position="static">
            <Container sx={{backgroundColor: darkBrown, mt:1, mb:1 }} maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <img className='logoimg' alt="cube-logo" /> */}
                    <Typography
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 4,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 600,
                            fontSize: '1.6rem',
                            letterSpacing: '.17rem',
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        GOOD GOODS
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            // className='navButtonOption'
                            onClick={() => navigate('/about')}
                            sx={{ my: 2, color: "white", display: 'block', marginRight: "2em", marginLeft: "1em" }}
                        >
                            ABOUT
                        </Button>
                        <Button
                        // className='navButtonOption'
                        onClick={() => navigate('/sell')}
                        sx={{ my: 2, color: "white", display: 'block', marginRight: "2em", marginLeft:"1em"}}
                        >
                            SELL
                        </Button>
                        <Button
                        // className='navButtonOption'
                        sx={{ my: 2, color: 'white', display: 'block', marginRight: "2em" }}
                        onClick={() => navigate('/buy')}
                        >
                            BUY
                        </Button>
                        {/* {user.username ?  */}
                        {/* <Button
                            // className='navButtonOption'
                            sx={{ my: 2, color: 'white', display: 'block', marginRight:"2em" }}
                            onClick={() => navigate(`/profile/${user.username}`)}
                        >
                                PROFILE
                            </Button>  */}
                            {/* : null } */}
                        {/* {user.username ?  */}
                    </Box>
                    <Box sx={{ flexGrow: 0, display:"flex", justifyContent:"center", textAlign: 'center', alignItems: 'center'}}>
                         <Button
                            onClick={() => navigate(`/mycart`)}
                            style={{ my: 2, color: 'white' }}
                        // className='navButtonOption'
                        >
                            <Badge badgeContent={cartCount} color="warning">
                                <ShoppingCartIcon fontSize="large" color="white" />
                            </Badge>
                        </Button>
                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <Avatar
                                    className="avatarImg"
                                    sx={{ height: "50px", border: "1px solid white", width: "50px", marginLeft: "auto", marginRight: "auto", alignItems: "center", justifyContent: "center" }}
                                    src={user.images_url}
                                />
                            </IconButton>
                        
                        </Tooltip>
                    </Box> 
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        {/* <MenuItem>
                            <Typography>{user.username}</Typography>
                        </MenuItem> */}
                        <Divider/>
                        <MenuItem onClick={() => navigate(`/profile/${user.username}`)}>
                            <Avatar /> Profile
                        </MenuItem>
                        <MenuItem onClick={handleLogout} >
                            <ListItemIcon>
                                <LogoutIcon fontSize="small" />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;