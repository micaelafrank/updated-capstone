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


function SignUp({ user, setUser }) {
    const navigate = useNavigate();
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const [userCart, setCart] = useState(null);
    const [favoriteBucket, setFavoriteBucket] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [userFromSignup, setUserFromSignup] = useState({});

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

    const handleSignUp = (e) => {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/api/signup", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ firstname, lastname, email, username, password }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => {
                    setUser(user)
                    setIsLoading(!isLoading);
                    navigate("/profile")
                    setFirstname("")
                    setLastname("")
                    setEmail("")
                    setUsername("")
                    setPassword("")
                })
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }


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
                    {errors.map((err) => (
                        <p key={err} style={{ color: "red" }}>
                            {err}
                        </p>
                    ))}
                    <Box component="form" noValidate onSubmit={handleSignUp} sx={{ mt: 3 }}>
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
                                    fullWidth
                                    id="username"
                                    label="Create A Username"
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
                                    type="password"
                                    autoComplete="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="passwordConfirmation"
                                    label="Confirm Password"
                                    type="password"
                                    id="passwordConfirmation"
                                    autoComplete="new-password"
                                    value={password_confirmation}
                                    onChange={(e) => setPasswordConfirmation(e.target.value)}
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