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
import { brown } from '@mui/material/colors';


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


export default function Homepage({ user, setUser, darkMode, setDarkMode }) {

    const navigate = useNavigate();

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
                            <Typography component="h2" variant="h3" 
                                sx={{paddingTop: '35px', color: "primary.main", fontFamily: 'monospace'}}>
                            GOOD GOODS
                        </Typography>
                        <Typography component="h1" variant="h5"
                            sx={{ pb: 4, ml: 3, mr: 3, fontFamily: 'monospace', pt:2, textAlign: "center", fontSize: "20px" }}>
                            SUSTAINABLE SHOPPING YOU CAN FEEL <span style={{ color: "primary.main", fontWeight: 'bold' }}>GOOD</span> ABOUT.
                        </Typography>
                        <Typography component="h1" variant="h5"
                            sx={{ pb: 4, textAlign: "center", fontSize:"18px", color: "secondary.darker", letterSpacing:1.2, lineHeight: 2 }}>
                            A communal marketplace of bits and masterpieces.<br></br>
                            Sold, resold, bought, and made by one another.                   
                        </Typography>
                        {/* <Typography component="h1" variant="h5"
                            sx={{ paddingTop: '25px', paddingBottom: '45px', textAlign:"center", margin:'10px 20px', fontSize:"21px" }}>
                            High-quality bits and masterpieces sold, bought, and made by creatives.
                        </Typography> */}
                        {user.username ? null :
                        <>
                        (<Grid container>
                            <Grid item sx={{margin:'auto'}}>
                                <Button
                                        sx={{ m: 3, fontFamily: 'monospace', pl: 4, pr: 4, pt: 1, pb: 1, fontSize: "18px" }}
                                    onClick={() => navigate("/login")}
                                    variant="contained"
                                    >
                                    {"LOG IN"}
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item sx={{ margin: 'auto' }}>
                                <Button 
                                        sx={{ m: 3, fontFamily: 'monospace', pl: 4, pr: 4, pt: 1, pb: 1, fontSize: "18px" }}
                                    onClick={() => navigate("/signup")} 
                                    variant="outlined">
                                    {"SIGN UP"}
                                </Button>
                            </Grid>
                        </Grid>)
                    </>
                    }
                    </Box>
                    <Copyright sx={{ mt: 5 }} />
                </Grid>
            </Grid>
        </ThemeProvider>
    </>
    );
}

