import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import { useNavigate } from 'react-router-dom';
import { brown } from '@mui/material/colors'; 
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import IconButton from '@mui/material/IconButton';
import SpecialNavBar from './SpecialNavBar';
import WithNav from './WithNav';


function Copyright({ props }) {
    return (
        <Typography
            sx={{ bottom: '0', position: 'absolute', width: '43%', textAlign: 'center', paddingBottom: '5px' }}
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

export default function LogIn({ renderSignUp, imageNum, setImageNum, loginImgs, user, setUser, items, onLogin, setItems }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const navigate = useNavigate();

    // useEffect(() => {
    //     setImageNum(Math.floor(Math.random() * 5));
    // }, []);

    // useEffect(() => {
    //     fetch("/api/items")
    //         .then((r) => r.json())
    //         .then(data => setItems(data))
    // }, [])


    function handleLogin(e) {
        e.preventDefault();
        setErrors("");
        setIsLoading(true);
        fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => {
                    setUser(user)
                    navigate("/profile");
                });
                setUsername("")
                setPassword("")
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }


    return (
        <ThemeProvider theme={theme}>
            {user.username ? <WithNav /> : <SpecialNavBar />}
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
            {/* <Typography component="h1" variant="h1" style={{ fontFamily: "monospace", mt: 3, fontSize: "3rem" }}>
                GOOD GOODS
            </Typography> */}
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
                sx={{
                    mt: 8,
                    mx: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
                <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h2" variant="h3" style={{fontFamily:"monospace", mt: 3, fontSize:"2.4rem"}}>
                    SIGN IN
                </Typography>
                <p style={{ textAlign:"center", color: "red" }}>{errors}</p>
                <Box component="form" autoComplete='off' noValidate onSubmit={handleLogin} >
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    id="username"
                    autoComplete='off'
                    label="Username"
                    name="username"
                    />
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    autoComplete='off'
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    label="Password"
                    type={showPassword ? "text" : "password"} 
                    id="password"
                    InputProps={{ // <-- This is where the toggle button is added.
                        endAdornment: (
                            <InputAdornment className="MuiInputAdornment-hiddenLabel" sx={{bgcolor: "white"}} position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                                </IconButton>
                            </InputAdornment>
                    )}}
                    />
                        {/* {revealText ? 
                        <IconButton onClick={handleTextReveal} id="togglePassword">
                            <VisibilityOutlinedIcon />
                        </IconButton>
                        : 
                        <IconButton onClick={handleTextReveal} id="togglePassword">
                            <VisibilityOffOutlinedIcon />
                        </IconButton>
                        } */}
                            {/* <Grid container sx={{flexDirection: 'column'}}> */}
                    <Grid item 
                        sx={{
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <Button
                        type="submit"
                        variant="contained"
                        sx={{ alignItems:"center", justifyContent:"center", color: "white", m: 3, fontFamily:'monospace', pl: 4, pr: 4, pt: 2, pb: 2, fontSize:"15px" }}
                        >
                        SHOW ME THE GOOD GOODS
                    </Button>
                    </Grid>
                    <Grid item sx={{ paddingTop: '10px', margin: 'auto', flexDirection: "column", display: "flex", alignItems: "center" }}>
                        <Link onClick={()=> navigate("/signup")}
                        style={{ fontFamily:"monospace", fontSize:"16px", alignItems: "center" }}>
                            Don't have an account? Sign up!
                        </Link>
                    </Grid>
                    {/* </Grid> */}
                    </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
