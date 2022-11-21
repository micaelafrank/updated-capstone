import * as React from 'react';
import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { brown } from '@mui/material/colors';
import SignUp from './SignUp';
import LogIn from './LogIn';
import SpecialNavBar from './SpecialNavBar';
import WithNav from './WithNav';

function Copyright({props}) {
    return (
        <Typography 
        sx={{bottom:'0', position:'absolute', width:'43%', textAlign:'center', paddingBottom:'5px'}} 
        variant="body2" color="text.secondary" 
        align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="">
                Marketplace
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default function Homepage({ 
    // handleSignIn, handleLogin, 
    imageNum, onLogin, setImageNum, loginImgs, user, setUser, darkMode, setDarkMode }) {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    useEffect(() => {
        setImageNum(Math.floor(Math.random() * 5));
    }, []);

    const navigate = useNavigate();

    function handleSignUp(){
        setShowSignUp(showSignUp => !showSignUp);
    }

    function handleLogin(){
        setShowLogin(showLogin => !showLogin);
    }

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

    return (
        <>
        <ThemeProvider theme={theme}>
            {user.username ? <WithNav/> : <SpecialNavBar/>}
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: `url(${loginImgs[imageNum]})`,
                        backgroundRepeat: "no-repeat",
                        backgroundColor: (t) =>
                            t.palette.mode === "light"
                                ? t.palette.grey[50]
                                : t.palette.grey[900],
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            fontFamily: 'monospace',
                        }}
                        >
                            <Typography component="h2" variant="h3" 
                                sx={{paddingTop: '35px', color: "primary.main", fontFamily: 'monospace'}}>
                            GOOD GOODS
                        </Typography>
                        <Typography component="h1" variant="h5"
                                sx={{ pb: 4, ml: 3, mr: 3, mb:5, color: "primary", fontFamily: 'monospace', pt: 2, textAlign: "center", lineHeight: 1.6, fontSize: "20px" }}>
                            SUSTAINABLE SHOPPING YOU CAN FEEL <span style={{ color: "primary.main", fontWeight: 'bold' }}>GOOD</span> ABOUT 
                        </Typography>
                        {/* <Typography component="h1" variant="h5"
                        sx={{ pb: 4, ml: 3, mr: 3, mt: 4, color: "primary", fontFamily: 'monospace', pt: 2, textAlign: "center", fontSize: "20px" }}>
                        <span style={{ textWeight: "bold" }}>We're giving items and objects a second chance at life.</span>
                        </Typography> */}
                        <Typography component="h1" variant="h5"
                            sx={{ pb: 4, textAlign: "center", fontSize:"18px", color: "secondary.darker", letterSpacing:1.2, lineHeight: 2 }}>
                            <span style={{ textWeight: "bold" }}>We're giving items and objects a second chance at life.</span><br></br>
                             A communal marketplace of bits and masterpieces.<br></br>
                            Sold, resold, and made by one another.                   
                        </Typography>
                        {/* <Typography component="h1" variant="h5"
                            sx={{ paddingTop: '25px', paddingBottom: '45px', textAlign:"center", margin:'10px 20px', fontSize:"21px" }}>
                            High-quality bits and masterpieces sold, bought, and made by creatives.
                        </Typography> */}
                        {/* <Grid container> */}
                            <Grid item sx={{margin:'auto'}}>
                                <Button
                                    sx={{ m: 3, fontFamily: 'monospace', pl: 4, pr: 4, pt: 1, pb: 1, fontSize: "18px" }}
                                    onClick={handleLogin}
                                    variant="contained"
                                    >
                                    {"LOG IN"}
                                </Button>
                                <Button
                                    sx={{ m: 3, fontFamily: 'monospace', pl: 4, pr: 4, pt: 1, pb: 1, fontSize: "18px" }}
                                    onClick={handleSignUp}
                                    variant="contained"
                                >
                                    {"SIGN IN"}
                                </Button>
                                {showLogin ? (
                                    navigate("/login")
                                    // <LogIn 
                                    // imageNum={imageNum} 
                                    // setImageNum={setImageNum} 
                                    // loginImgs={loginImgs} 
                                    // setUser={setUser} 
                                    // user={user}
                                    // onLogin={onLogin} 
                                    // />
                                ) : null }
                                {showSignUp ? (
                                navigate("/signup")
                                ) : null}
                            </Grid>
                            {/* <Grid item sx={{ paddingTop: '10px', margin: 'auto', flexDirection: "column", display: "flex", alignItems: "center" }}>
                                <Link onClick={renderSignUp}
                                    style={{ fontFamily: "monospace", fontSize: "16px", alignItems: "center" }}>
                                    Don't have an account? Sign up!
                                </Link>
                            </Grid> */}
{/* 
                            {showLogin ?
                            <Grid item sx={{ paddingTop: '10px', margin: 'auto', flexDirection: "column", display: "flex", alignItems: "center" }}>
                                <Link href="/signup" variant="body" style={{ fontSize: "16px", alignItems: "center" }}>
                                    {"Don't have an account? Sign up!"}
                                </Link>
                            </Grid> 
                                : <Grid item sx={{ paddingTop: '10px', margin: 'auto', flexDirection: "column", display: "flex", alignItems: "center" }}>
                                    <Link href="/signup" variant="body" style={{ fontSize: "16px", alignItems: "center" }}>
                                        {"Don't have an account? Sign up!"}
                                    </Link>
                                </Grid>}
                            {showSignUp ? 
                            <Grid item sx={{ paddingTop: '10px', margin: 'auto', flexDirection: "column", display: "flex", alignItems: "center" }}>
                                <Link href="/login" variant="body" style={{ fontSize: "16px", alignItems: "center" }}>
                                    {"Already have an account? Sign in!"}
                                </Link>
                            </Grid>
                            : null} */}
                        {/* </Grid> */}
                        {/* <Grid container>
                            <Grid item sx={{ margin: 'auto' }}>
                                <Button 
                                sx={{ m: 3, fontFamily: 'monospace', pl: 4, pr: 4, pt: 1, pb: 1, fontSize: "18px" }}
                                onClick={() => navigate("/signup")} 
                                variant="outlined">
                                {"SIGN UP"}
                                </Button>
                                {showSignUp ? <SignUp /> : null}
                            </Grid>
                        </Grid> */}
                    </Box>
                    <Copyright sx={{ mt: 5 }} />
                </Grid>
            </Grid>
        </ThemeProvider>
    </>
    );
}

