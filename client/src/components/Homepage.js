import * as React from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { brown } from '@mui/material/colors';
import Carousel from "react-material-ui-carousel";
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import SignUp from './SignUp';
import LogIn from './LogIn';
import SpecialNavBar from './SpecialNavBar';
import WithNav from './WithNav';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// function Copyright({props}) {
//     return (
//         <Typography 
//             sx={{ bottom: '0', backgroundColor:"white", position:'absolute', width:'43%', textAlign:'center', zIndex:"2", paddingBottom:'5px'}} 
//         variant="body2" color="text.secondary" 
//         align="center" {...props}>
//             {'Copyright © '}
//             <Link color="inherit" href="">
//                 Marketplace
//             </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }


export default function Homepage({ 
    // handleSignIn, handleLogin, 
    imageNum, onLogin,loginImgs, cartCount, setImageNum, user, setUser, darkMode, setDarkMode }) {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    // const [activeChild, setActiveChild] = useState(0);
    // const imgItems = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], []);
    
    function nextImage() {
        console.log(imageNum)
        if(imageNum==23){
            setImageNum(0)
        }
        else{
            setImageNum(imageNum+1)
        };
    }

    function prevImage() {
        console.log(imageNum)
        if (imageNum == 0) {
            setImageNum(23)
        } else{
        setImageNum(imageNum -1)};
    }

    useEffect(() => {
        setImageNum(Math.floor(Math.random() * 23));
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
            {user.username ? <WithNav cartCount={cartCount} user={user} /> : <SpecialNavBar/>}
            <Grid container component="main" sx={{ height: '100vh' }}>
                {/* <CssBaseline /> */}
                <Grid 
                xs={false}
                sm={4}
                md={7}
                // sx={{height:"100%"}}
                >
                    <Carousel
                    next={nextImage}
                    prev={prevImage}
                    autoPlay={false} // <-- You probaly want to disable this for our purposes
                    navButtonsAlwaysVisible 
                    sx={{width:"auto"}}
                    >
                        <img style={{height:"110vh", width:"130vh", objectPosition:"center", objectFit:"cover"}} src={`${loginImgs[imageNum]}`}/>
                    </Carousel>
                </Grid>
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
                            {user.username ? null : 
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
                                ) : null }
                                {showSignUp ? (
                                navigate("/signup")
                                ) : null}
                            </Grid>}
                    </Box>
                    {/* <Copyright /> */}
                </Grid>
            </Grid>
        </ThemeProvider>
    </>
    );
}

