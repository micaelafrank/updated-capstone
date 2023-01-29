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
    imageNum, onLogin, setImageNum, user, setUser, darkMode, setDarkMode }) {
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
        setImageNum(Math.floor(Math.random() * 26));
    }, []);

    const loginImgs = [
        "https://static.zarahome.net/8/photos4/2022/I/4/1/p/2130/005/500/2130005500_2_7_2.jpg?t=1665749355836&imwidth=985&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/p/8306/008/715/8306008715_2_7_2.jpg?t=1667549977231&imwidth=985&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/p/9118/004/400/9118004400_7_1_2.jpg?t=1668172045449&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/p/8357/004/114/8357004114_2_7_2.jpg?t=1667549987191&imwidth=985&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/p/3256/022/052/3256022052_2_7_2.jpg?t=1667568785579&imwidth=985&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2228/000/800/BH/BU/2228000800_7_1_2.jpg?t=1667484886860&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2460/000/528/BH/BU/2460000528_7_1_2.jpg?t=1667484892118&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2289/000/712/ZH/XX/2289000712_7_1_2.jpg?t=1667484894192&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2023/V/4/1/b/2226/000/914/ZH/XX/2226000914_7_1_2.jpg?t=1668520687688&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2460/000/800/ZH/XX/2460000800_7_1_2.jpg?t=1667569693167&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2460/000/800/ZH/XX/2460000800_2_1_2.jpg?t=1667569693167&imwidth=985&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2221/000/112/ZH/DV/2221000112_1_1_2.jpg?t=1660913895719&imwidth=985&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2289/000/712/ZH/XX/2289000712_2_1_2.jpg?t=1667484894192&imwidth=985&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2273/000/251/ZH/VV/2273000251_2_1_2.jpg?t=1667484893644&imwidth=985&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2228/000/800/BH/BU/2228000800_2_1_2.jpg?t=1667484886860&imwidth=985&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/b/5270/000/982/BH/BU/5270000982_2_1_2.jpg?t=1667490039379&imwidth=985&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/p/2231/022/120/2231022120_7_1_2.jpg?t=1667551576936&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/p/3223/550/120/3223550120_2_7_2.jpg?t=1658216255403&imwidth=985&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/p/3249/022/120/3249022120_2_7_2.jpg?t=1666263788336&imwidth=985&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/p/6204/022/712/6204022712_2_7_2.jpg?t=1667551189152&imwidth=985&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2231/000/120/BH/NI/2231000120_1_1_2.jpg?t=1664527045706&imwidth=985&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/p/1221/022/115/1221022115_2_7_2.jpg?t=1667551522985&imwidth=985&imformat=chrome",
        "https://static.zarahome.net/8/photos4/2022/I/4/1/p/7298/401/826/7298401826_2_7_2.jpg?t=1662108367272&imwidth=985&imformat=chrome",
        "https://i.etsystatic.com/21668141/r/il/9b0a1f/4390569481/il_1588xN.4390569481_a8vw.jpg",
    ];


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
                {/* <Grid
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
                > */}
                        {/* <h1 className="header">GOOD GOODS</h1> */}

                    {/* </Grid> */}
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

