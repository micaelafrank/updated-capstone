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
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import FormHelperText from '@mui/material/FormHelperText'


// function Copyright({ props }) {
//     return (
//         <Typography
//             sx={{ bottom: '0', position: 'absolute', width: '43%', textAlign: 'center', paddingBottom: '5px' }}
//             variant="body2" color="text.secondary"
//             align="center" {...props}>
//             {'Copyright © '}
//             <Link color="inherit" href="">
//                 Marketplace
//             </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }

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
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const navigate = useNavigate();

    useEffect(() => {
        setImageNum(Math.floor(Math.random() * 26));
    }, []);

    // useEffect(() => {
    //     fetch("/api/items")
    //         .then((r) => r.json())
    //         .then(data => setItems(data))
    // }, [])


    function handleLogin(e) {
        e.preventDefault();
        // setError("");
        setIsLoading(true);
        fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            setIsLoading(false);
            console.log("set is loading false")
            if (r.ok) {
                console.log("i am in the r.ok file")
                r.json().then((user) => {
                    onLogin(user)
                    navigate(`/profile/${user.username}`);
                });
                setUsername("")
                setPassword("")
            } else {
                r.json().then((err) => setError(err.error));
                console.log("my error: ", error.message)
            }
        });
    }
    console.log(error)

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
                            my: 4,
                            mx: 5,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h1" sx={{ fontFamily: "monospace", mt: 2, fontSize: "3rem", fontWeight: "normal", color: "primary.main" }}>
                            GOOD GOODS
                        </Typography>
                        {/* <Avatar sx={{ mt: 5,bgcolor: 'primary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar> */}
                        <Typography component="h3" variant="h3" sx={{ textShadow: "1px 1px #c98d6d", fontFamily: "monospace", mt: 3, fontSize: "2.5rem" }}>
                            log in
                        </Typography>
                        {/* <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}> */}
                        <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
                            <p style={{ marginTop: "25px", marginBottom: "25px", color: "red", textAlign: "center" }}>{error}</p>
                            {/* <div style={{ marginBottom: "2rem", color: 'red', alignItems: 'center', textAlign: 'center' }}>
                        {errors ? errors.map((err) => (
                            <Typography align="center" variant="p" key={err}>
                                {err}. Please try again
                            </Typography>
                        )) : null}
                    </div> */}
                            <Grid container sx={{ml:"auto", mr:"auto", width:"400px"}} spacing={2}>
                                <Grid style={{ marginBottom: "5px" }} item xs={12}>
                                    <FormControl>
                                        <InputLabel style={{ fontFamily: "monospace" }} htmlFor='my-input' >
                                            USERNAME</InputLabel>
                                        <Input
                                            required
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            id="username"
                                            autoComplete='off'
                                            label="Username"
                                            name="username"
                                            style={{ minWidth: "350px" }}
                                        />
                                        <FormHelperText style={{ textAlign: "left" }} id='my-helper-text'
                                        >
                                            Enter your username
                                        </FormHelperText>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl>
                                        <InputLabel sx={{ fontFamily: "monospace" }} htmlFor='my-input' >
                                            PASSWORD
                                        </InputLabel>
                                        <div style={{ display: "flex", lineHeight: "6", marginTop: "8px", flexDirection: "row" }}>
                                            <Input
                                                required
                                                autoComplete='off'
                                                name="password"
                                                value={password}
                                                style={{ minWidth: "320px" }}
                                                onChange={(e) => setPassword(e.target.value)}
                                                label="Password"
                                                type={showPassword ? "text" : "password"}
                                                id="password"
                                            />
                                            <IconButton
                                                position="end"
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                            >
                                                {showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                                            </IconButton>
                                        </div>
                                        <FormHelperText style={{ textAlign: "left" }} id='my-helper-text'
                                        >
                                            Enter your password
                                        </FormHelperText>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item
                                sx={{
                                    mx: 4,
                                    mt: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ alignItems: "center", justifyContent: "center", color: "white", m: 3, fontFamily: 'monospace', pl: 4, pr: 4, pt: 2, pb: 2, fontSize: "15px" }}
                                >
                                    SHOW ME THE GOOD GOODS
                                </Button>
                            </Grid>
                        </Box>

                        <Grid item sx={{ paddingTop: '10px', margin: 'auto', flexDirection: "column", display: "flex", alignItems: "center" }}>
                            <Link sx={{cursor: "pointer"}}
                            onClick={() => navigate("/signup")}
                                style={{ fontFamily: "monospace", fontSize: "16px", alignItems: "center" }}>
                                Don't have an account? Sign up!
                            </Link>
                        </Grid>
                        {/* </Grid> */}
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}