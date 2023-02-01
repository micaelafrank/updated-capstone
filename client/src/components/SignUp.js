import * as React from 'react';
import { useState, useEffect } from 'react';
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
import WithNav from './WithNav';
import SpecialNavBar from './SpecialNavBar';
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import FormHelperText from '@mui/material/FormHelperText'



function SignUp({ imageNum, setImageNum, loginImgs, onSignUp, user }) {
    const navigate = useNavigate();
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [images, setImages] = useState("");

    const handleClickShowPassword = () => setShowPassword((showPassword) => !showPassword);
    // const handleMouseDownPassword = () => setShowPassword((showPassword) => !showPassword);
    const handleClickShowPassword2 = () => setShowPassword2((showPassword2) => !showPassword2);
    // const handleMouseDownPassword2 = () => setShowPassword2((showPassword2) => !showPassword2);


    useEffect(() => {
        setImageNum(Math.floor(Math.random() * 26));
    }, []);


    function handleImages(e) {
        setImages(e.target.files[0])
        console.log(e.target.files[0])
    }

    const formData = new FormData();
    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('email', email);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('password_confirmation', password_confirmation);
    formData.append('user_id', user.id);
    formData.append('images', images);


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

    // const pwError = "Passwords entered do not match. Please try again.";

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/api/signup", {
            method: 'POST',
            body: formData,
        })
        .then((res) => {
            if (res.ok) {
                res.json().then((data) => onSignUp(data));
                navigate(`/profile/${user.username}`);
            } else {
                res.json().then((err) => setErrors(err.errors));
            }
        });
    }
    
    // function handleSubmit(e) {
    //     console.log(password);
    //     console.log(password_confirmation);
    //     e.preventDefault();
    //     if (password !== password_confirmation) {
    //         errors.push(pwError);
    //     }
    //     fetch("/api/signup", {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             firstname: firstname,
    //             lastname: lastname,
    //             email: email,
    //             username: username,
    //             password: password,
    //             password_confirmation: password_confirmation,
    //         }),
    //     })
    //         .then((res) => {
    //             if (res.ok) {
    //                 res.json().then((data) => onSignUp(data));
    //                 navigate(`/profile/${username}`);
    //             } else {
    //                 res.json().then((err) => setErrors(err.errors));
    //             }
    //         });
    // }
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
                    <Typography component="h1" variant="h1" sx={{ fontFamily: "monospace", mt: 2, fontSize: "3.4rem", color:"primary.main" }}>
                        GOOD GOODS
                    </Typography>
                    {/* <Avatar sx={{ mt: 5,bgcolor: 'primary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar> */}
                        <Typography component="h3" variant="h3" sx={{ textShadow: "1px 1px #c98d6d", fontFamily: "monospace", mt: 5, fontSize: "2rem" }}>
                        sign up
                    </Typography>                    
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <p style={{ marginTop: "25px", marginBottom: "25px", color: "red", textAlign: "center" }}>{errors}</p>

                        {/* <div style={{ marginBottom:"2rem", color: 'red', alignItems:'center', textAlign:'center' }}>
                            {errors.map((err) => (
                                <Typography align="center" variant="p" key={err}>
                                    {err}. Please try again.
                                </Typography>
                            ))}
                        </div> */}
                        <Grid sx={{ ml: "auto", mr: "auto", width: "630px" }} container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <FormControl>
                                    <InputLabel style={{ fontFamily: "monospace" }} htmlFor='my-input' >
                                        FIRST NAME</InputLabel>
                                    <Input
                                    className="signUpFormInput"
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    style={{minWidth: "290px"}}
                                    value={firstname}
                                    onChange={(e) => setFirstname(e.target.value)}
                                    />
                                    <FormHelperText style={{ textAlign: "left" }} id='my-helper-text'
                                    >
                                        Enter your first name
                                    </FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl>
                                    <InputLabel style={{fontFamily:"monospace"}} htmlFor='my-input' >
                                        LAST NAME</InputLabel>
                                    <Input
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    value={lastname}
                                    onChange={(e) => setLastname(e.target.value)}
                                    style={{ minWidth: "290px" }}
                                    />
                                    <FormHelperText style={{ textAlign: "left" }} id='my-helper-text'
                                    >
                                        Enter your last name
                                    </FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl>
                                    <InputLabel style={{ fontFamily: "monospace" }} htmlFor='my-input' >
                                        EMAIL ADDRESS</InputLabel>
                                    <Input
                                        required
                                        fullWidth
                                        id="email"
                                        className="form-control"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        style={{ minWidth: "290px" }}
                                    />
                                    <FormHelperText style={{textAlign:"left"}} id='my-helper-text'
                                    >
                                        Enter your email address
                                    </FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl>
                                    <InputLabel style={{ fontFamily: "monospace" }} htmlFor='my-input' >
                                        USERNAME</InputLabel>
                                    <Input
                                        required
                                        className="form-control"
                                        fullWidth
                                        id="username"
                                        label="Create Username"
                                        name="username"
                                        autoComplete="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        style={{ minWidth: "290px" }}
                                    />
                                    <FormHelperText style={{ textAlign: "left" }} id='my-helper-text'
                                    >
                                        Create a unique username
                                    </FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} spacing={2}>
                                <FormControl>
                                    <InputLabel sx={{ fontFamily: "monospace" }} htmlFor='my-input' >
                                        PASSWORD
                                    </InputLabel>
                                    <div style={{display:"flex", lineHeight:"6", marginTop:"8px", flexDirection:"row"}}>
                                    <Input
                                    required
                                    className="form-control"
                                    fullWidth
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    style={{ minWidth: "250px" }}                                        
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
                                        Create a password
                                    </FormHelperText>
                                </FormControl>
                            </Grid>
                            <br></br>
                            <Grid item xs={12} sm={6}>
                                <FormControl>
                                    <InputLabel sx={{ fontFamily: "monospace" }} htmlFor='my-input' >
                                        CONFIRM PASSWORD
                                    </InputLabel>
                                    <div style={{ display: "flex", lineHeight: "6", marginTop: "8px", flexDirection: "row" }}>
                                    <Input
                                        required
                                        className="form-control"
                                        fullWidth
                                        name="passwordConfirmation"
                                        type={showPassword2 ? "text" : "password"}
                                        id="passwordConfirmation"
                                        autoComplete="new-password"
                                        value={password_confirmation}
                                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                                        style={{ minWidth: "250px" }}
                                        />
                                        <IconButton
                                            position="end"
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword2}
                                        >
                                            {showPassword2 ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                                        </IconButton>
                                    </div>
                                    
                                    <FormHelperText style={{ textAlign: "left" }} id='my-helper-text'
                                    >
                                        Re-enter your password 
                                    </FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid style={{paddingTop:"25px", marginLeft:"10px"}} item xs={12}>
                                <InputLabel style={{fontFamily:"monospace"}}>UPLOAD PROFILE PHOTO:</InputLabel>
                                <input
                                    type="file"
                                    id="file"
                                    name="file"
                                    multiple
                                    style={{border:"none", fontFamily:"monospace"}}
                                    accept="image/*"
                                    onChange={handleImages}
                                />
                            </Grid>
                        </Grid>
                        <Grid item
                            sx={{
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                            <Button
                                type="submit"
                                id="signUpButton"
                                variant="contained"
                                sx={{ alignItems: "center", justifyContent: "center", color: "white", m: 3, mt:5, fontFamily: 'monospace', pl: 6, pr: 6, pt: 1.5, pb: 1.5, fontSize: "15px" }}
                            >
                                SIGN UP
                            </Button>
                        </Grid>
                        <Grid item sx={{ paddingTop: '10px', margin: 'auto', flexDirection: "column", display: "flex", alignItems: "center" }}>
                            <Link onClick={() => navigate("/login")}
                                style={{ cursor:"pointer", fontFamily: "monospace", fontSize: "16px", alignItems: "center" }}>
                                Already have an account? Sign in!
                            </Link>
                        </Grid>
                    </Box>
                </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default SignUp;