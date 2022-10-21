import * as React from 'react';
import { useState } from 'react';
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

const theme = createTheme();


export default function SignInSide({ user, setUser, darkMode, setDarkMode }) {

    const navigate = useNavigate();

    // function handleLogin(e) {
    //     e.preventDefault();
    //     fetch("/login", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ username, password }),
    //     }).then((r) => {
    //         if (r.ok) {
    //             r.json().then((user) => {
    //                 setUser(user)
    //                 navigate("/profile");
    //             });
    //         } else {
    //             r.json().then((err) => setErrors(err.errors));
    //         }
    //     });
    // }

    return (
        <>
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
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
                            <Typography component="h1" variant="h2" 
                                sx={{paddingTop: '35px', fontFamily: 'monospace'}}>
                            GOOD GOODS
                        </Typography>
                        <Typography component="h1" variant="h5"
                            sx={{ paddingTop: '15px', paddingBottom: '5px', textAlign: "center", fontSize:"23px" }}>
                            Communal marketplace with a lot of depth to it. Bits and masterpieces sold, bought, and made by cubers and creatives.                       
                        </Typography>
                        <Typography component="h1" variant="h5"
                            sx={{ paddingBottom: '55px', paddingTop:"25px", textAlign: "center", fontSize:"21px"}}>
                            Sustainable shopping you can feel <span style={{ color: "blue" }}>good</span> about.
                        </Typography>
                        {/* <Typography component="h1" variant="h5"
                            sx={{ paddingTop: '25px', paddingBottom: '45px', textAlign:"center", margin:'10px 20px', fontSize:"21px" }}>
                            High-quality bits and masterpieces sold, bought, and made by creatives.
                        </Typography> */}
                        <Grid container>
                            <Grid item sx={{margin:'auto'}}>
                                <Button
                                    sx={{ mt: 3, mb: 2, alignItems: 'center', margin: 'auto'}}
                                    onClick={() => navigate("/login")}
                                    variant="contained"
                                    >
                                    {"Log In"}
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item sx={{ margin: 'auto' }}>
                                <Button 
                                    sx={{ mt: 3, mb: 2 }}
                                    onClick={() => navigate("/signup")} 
                                    variant="outlined">
                                    {"Sign Up"}
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                    <Copyright sx={{ mt: 5 }} />
                </Grid>
            </Grid>
        </ThemeProvider>
    </>
    );
}

