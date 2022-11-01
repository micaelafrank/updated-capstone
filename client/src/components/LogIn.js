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
import { useNavigate } from 'react-router-dom';
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

export default function SignInSide({ user, setUser, items, setItems }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        fetch("/api/items")
            .then((r) => r.json())
            .then(data => setItems(data))
    }, [])


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
                        <Avatar sx={{ m: 1, mb: 3, bgcolor: 'primary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h2" variant="h3" style={{fontFamily:"monospace", mt: 4}}>
                            LOGIN
                        </Typography>
                        <p style={{ textAlign:"center", color: "red" }}>{errors}</p>
                        <Box component="form" noValidate onSubmit={handleLogin} >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Grid container sx={{flexDirection: 'column'}}>
                                <Grid item sx={{ margin: 'auto' }}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{ m: 3, fontFamily:'monospace', pl: 4, pr: 4, pt: 1, pb: 1, fontSize:"18px" }}
                                    >
                                        LOG IN
                                    </Button>
                                </Grid>
                                <Grid item sx={{ paddingTop: '10px', margin:'auto' }}>
                                    <Link href="/signup" variant="body" style={{fontSize:"16px"}}>
                                        {"Don't have an account? Sign Up"}
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
