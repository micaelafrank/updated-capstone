import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { brown } from '@mui/material/colors';
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



const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: '#795548',
            lighter: brown.A100,
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#bbe5ca',
        },
    },
});

const SpecialNavBar = ({ cartItems, user, setUser, setDarkMode, darkMode }) => {
    const navigate = useNavigate();


    // function handleLogout() {
    //     fetch("/api/logout", { method: "DELETE" }).then((r) => {
    //         if (r.ok) {
    //             setUser({});
    //             navigate("/login")
    //         }
    //     });
    // }

    function openShoppingCart() {
        navigate("/mycart")
    }

    const darkBrown = '#795548';
    const mainBrown = '#e8eaf6';
    const lightBrown = brown['A100'];


    return (
        <AppBar theme={theme} position="static">
            <Container sx={{ backgroundColor: darkBrown }} maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <img className='logoimg' alt="cube-logo" /> */}
                    <Typography
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            ml: 0,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 600,
                            fontSize: '1.6rem',
                            letterSpacing: '.17rem',
                            color: 'inherit',
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
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            onClick={() => navigate('/about')}
                            className='navButtonOption'
                            sx={{ my: 2, color: 'white', display: 'block', marginLeft: "2em" }}
                        >
                            ABOUT
                        </Button>
                        <Button
                            onClick={() => navigate('/login')}
                            className='navButtonOption'
                            sx={{ my: 2, color: 'white', display: 'block', marginLeft: "2em" }}
                        >
                            LOGIN
                        </Button>
                        <Button
                            onClick={() => navigate('/signup')}
                            className='navButtonOption'
                            sx={{ my: 2, color: 'white', display: 'block', marginLeft: "2em" }}
                        >
                            SIGN UP
                        </Button>

                    </Box>
                    <IconButton style={{ color: "white" }} onClick={() => navigate('/')}>
                        <HomeIcon />
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default SpecialNavBar;