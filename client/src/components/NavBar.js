import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
const pages = ['SELL', 'BUY', 'PROFILE', 'LOGOUT'];

const ResponsiveAppBar = ({ user, setUser, setDarkMode, darkMode }) => {
    const navigate = useNavigate();

    
    function handleLogout() {
        fetch("/api/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
                navigate("/login")
            }
        });
    }

    function openShoppingCart() {
        navigate("/mycart")
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1}} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
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
                                onClick={() => navigate('/sell')}
                                sx={{ my: 2, color: 'white', display: 'block', marginRight: "2em", marginLeft:"1em"}}
                            >
                                SELL
                            </Button>
                            <Button
                            sx={{ my: 2, color: 'white', display: 'block', marginRight: "2em" }}
                            onClick={() => navigate('/buy')}
                        >
                                BUY
                            </Button>
                        {user.username ? <Button
                            sx={{ my: 2, color: 'white', display: 'block', marginRight:"2em" }}
                            onClick={() => navigate('/profile')}
                        >
                                PROFILE
                            </Button> : null }
                        {user.username ? 
                            (<Button sx={{ my: 2, color: 'white', display: 'block', marginRight: "2em" }}                            
                            onClick={handleLogout}>
                                LOGOUT
                            </Button>)
                             : 
                            (<Button sx={{ my: 2, color: 'white', display: 'block', marginRight: "2em" }}
                            onClick={() => navigate('/login')}
                            >
                            LOGIN
                            </Button>)
                        }
{/* 
                        {user.username ? 
                            (<Button
                                onClick={handleLogout}
                                sx={{ my: 2, color: 'white', display: 'block', marginRight: "2em" }}
                            >
                                LOGOUT
                            </Button>)
                            : 
                            <Button
                            onClick={() => navigate('/login')}
                                sx={{ alignItems: 'right', float: 'right', my: 2, color: 'white', border: '1px solid white', marginLeft: '25px', marginRight: "2em", padding:'10px', display: 'block' }}
                            >
                                LOGIN
                            </Button>} */}
                        {user.username ? null :
                            <Button
                            onClick={() => navigate('/signup')}
                                sx={{ alignItems: 'right', my: 2, color: 'white', float: 'right', border: '1px solid white', marginLeft: '25px', marginRight: "2em", padding: '10px', display: 'block' }}
                            >
                                SIGN UP
                            </Button>
                        }
                    </Box>
                    {user.username ? 
                    <Box sx={{ flexGrow: 0, display:"flex", textAlign: 'center', alignItems: 'center'}}>
                        <p style={{paddingRight:'2em'}}>SIGNED IN AS:  {user.username}</p>
                        <IconButton
                            onClick={openShoppingCart}
                            style={{color:'white', paddingRight:'2em'}}
                        >
                            <p style={{ fontSize: "15px" }}>MY CART&nbsp;&nbsp;</p>
                            <ShoppingCartIcon/>
                        </IconButton>
                        {/* <div className="cursor-pointer duration-200 hover:text-red-500 absolute right-8 dark:text-slate-400 dark:hover:text-slate-200"> */}
                        <IconButton style={{color:"white"}} onClick={() => setDarkMode(!darkMode)}>
                            {darkMode ? <LightModeIcon/> : <DarkModeIcon/> }
                        </IconButton>
                            {/* <button onClick={() => setDarkMode(!darkMode)} >
                                {darkMode ? 
                                    <IconButton>
                                        <LightModeIcon/>
                                    </IconButton>
                                     : 
                                    <IconButton>
                                        <DarkModeIcon />
                                    </IconButton>
                                    }
                            </button> */}
                    </Box> : null}
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;