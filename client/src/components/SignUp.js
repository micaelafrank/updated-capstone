import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { brown } from '@mui/material/colors'; 
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';


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


function SignUp({ onSignUp, user }) {
    const navigate = useNavigate();
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const handleClickShowPassword = () => setShowPassword((showPassword) => !showPassword);
    const handleMouseDownPassword = () => setShowPassword((showPassword) => !showPassword);
    const handleClickShowPassword2 = () => setShowPassword2((showPassword2) => !showPassword2);
    const handleMouseDownPassword2 = () => setShowPassword2((showPassword2) => !showPassword2);


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

    const pwError = "Passwords entered do not match. Please try again.";

    function handleSubmit(e) {
        console.log(password);
        console.log(password_confirmation);
        e.preventDefault();
        if (password !== password_confirmation) {
            errors.push(pwError);
        }
        fetch("/api/signup", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                email: email,
                username: username,
                password: password,
                password_confirmation: password_confirmation,
            }),
        })
            .then((res) => {
                if (res.ok) {
                    res.json().then((user) => onSignUp(user));
                    navigate(`/profile/${username}`);
                } else {
                    res.json().then((err) => setErrors(err.errors));
                }
            });
    }
    //     .then((res) => {
    //         console.log(errors)
    //         if (res.ok) {
    //             res.json().then((user) => onSignUp(user));
    //             // setIsLoading(!isLoading);
    //             navigate("/profile")
    //         } else {
    //             res.json().then((err) => setErrors(err.errors));
    //         }
    //     });
    // }


    return (
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
                        }}
                    >
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h2" variant="h3" style={{ fontFamily: "monospace", mt: 4 }}>
                        SIGN UP
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <div style={{ marginBottom:"2rem", color: 'red', alignItems:'center', textAlign:'center' }}>
                            {errors.map((err) => (
                                <Typography align="center" variant="p" key={err}>
                                    {err}. Please try again
                                </Typography>
                            ))}
                        </div>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    value={firstname}
                                    onChange={(e) => setFirstname(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    value={lastname}
                                    onChange={(e) => setLastname(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    className="form-control"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    className="form-control"
                                    fullWidth
                                    id="username"
                                    label="Create Username"
                                    name="username"
                                    autoComplete="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="password"
                                    label="Password"
                                    name="password"
                                    type={showPassword ? "text" : "password"} 
                                    autoComplete="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    InputProps={{ // <-- This is where the toggle button is added.
                                        endAdornment: (
                                            <InputAdornment className="MuiInputAdornment-hiddenLabel" sx={{ bgcolor: "white" }} position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    className="form-control"
                                    name="passwordConfirmation"
                                    label="Confirm Password"
                                    type={showPassword2 ? "text" : "password"} 
                                    id="passwordConfirmation"
                                    autoComplete="new-password"
                                    value={password_confirmation}
                                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                                    InputProps={{ // <-- This is where the toggle button is added.
                                        endAdornment: (
                                            <InputAdornment className="MuiInputAdornment-hiddenLabel" sx={{ bgcolor: "white" }} position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword2}
                                                    onMouseDown={handleMouseDownPassword2}
                                                >
                                                    {showPassword2 ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                                                </IconButton>
                                            </InputAdornment>
                                        )}}
                                    />
                            </Grid>
                        </Grid>
                        <Grid container sx={{ flexDirection: 'column' }}>
                            <Grid item sx={{ margin: 'auto' }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ m: 3, fontFamily: 'monospace', pl: 4, pr: 4, pt: 1, pb: 1, fontSize: "18px" }}
                                >
                                    SIGN UP
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Link href="/login" variant="body" style={{ fontSize: "16px" }}>
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default SignUp;