import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import {brown} from '@mui/material/colors'; 
import { useNavigate } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import HomeIcon from '@mui/icons-material/Home'; 
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LogoutIcon from '@mui/icons-material/Logout';

const pages = ['ABOUT', 'SELL', 'BUY', 'PROFILE', 'LOGOUT'];


function ResponsiveAppBar({ user, setUser, setDarkMode, darkMode }) {
    const navigate = useNavigate();

    const theme = createTheme({
        palette: {
            primary: {
                // Purple and green play nicely together.
                main: brown[500],
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


    return (
        <AppBar theme={theme} position="static">
            <Container sx={{backgroundColor: darkBrown }} maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <img className='logoimg' alt="cube-logo" /> */}
                    <Typography
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
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
                    {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                    {/* <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/{page}"
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
                        LOGO
                    </Typography> */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            className='navButtonOption'
                            onClick={() => navigate('/about')}
                            sx={{ my: 2, color: "white", display: 'block', marginRight: "2em", marginLeft: "1em" }}
                        >
                            ABOUT
                        </Button>
                            <Button
                            className='navButtonOption'
                            onClick={() => navigate('/sell')}
                            sx={{ my: 2, color: "white", display: 'block', marginRight: "2em", marginLeft:"1em"}}
                            >
                                SELL
                            </Button>
                            <Button
                            className='navButtonOption'
                            sx={{ my: 2, color: 'white', display: 'block', marginRight: "2em" }}
                            onClick={() => navigate('/buy')}
                        >
                                BUY
                            </Button>
                        {/* {user.username ?  */}
                        <Button
                            className='navButtonOption'
                            sx={{ my: 2, color: 'white', display: 'block', marginRight:"2em" }}
                            onClick={() => navigate(`/profile/${user.username}`)}
                        >
                                PROFILE
                            </Button> 
                            {/* : null } */}
                        {/* {user.username ?  */}
                            <Button
                            onClick={() => navigate(`/mycart`)}
                            style={{my: 2, color:'white', paddingRight:'2em'}}
                        >
                            <p style={{ fontSize: "15px" }}>MY CART&nbsp;&nbsp;</p>
                            <ShoppingCartIcon/>
                        </Button>
                    </Box>
                    {/* {user.username ?  */}
                    <Box sx={{ flexGrow: 0, display:"flex", textAlign: 'center', alignItems: 'center'}}>
                        {/* <p style={{ fontSize:"15px", paddingRight: '1.5em' }}>SIGNED IN AS:<span style={{ fontFamily: 'monospace' }}> {user.username}</span></p> */}
                        <Button sx={{ my: 2, color: 'white', display: 'block', marginRight: "1em" }}
                            onClick={handleLogout}>
                            LOGOUT
                        </Button>
                        {/* <IconButton style={{ color: "white" }} onClick={() => navigate('/login')}>
                            <LogoutIcon />
                        </IconButton> */}
                        <IconButton style={{ color: "white" }} onClick={() => navigate('/')}>
                            <HomeIcon/>
                        </IconButton>
                    </Box> 
                    {/* : null} */}
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;