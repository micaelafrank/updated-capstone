import * as React from 'react';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SellIcon from '@mui/icons-material/Sell';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function AddItemForm({ user, addNewItem }) {
    const [itemname, setItemName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [color, setColor] = useState("#000000")
    const [material, setMaterial] = useState("")
    const [size, setSize] = useState("")
    const [condition, setCondition] = useState("")
    const [errors, setErrors] = useState([]);
    const [images, setImages] = useState("");

    // const [firstImage, setFirstImage] = useState("");
    // const [secondImage, setSecondImage] = useState("");
    // const [thirdImage, setThirdImage] = useState("");
    const navigate = useNavigate();
    const theme = createTheme();

    function handleImages(e){
        console.log(e.target.files[0])
        setImages(e.target.files[0])        
    }

    const formData = new FormData();
    formData.append('itemname', itemname);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('color', color);
    formData.append('material', material);
    formData.append('size', size);
    formData.append('condition', condition);
    formData.append('user_id', user.id);
    formData.append('images', images);

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        fetch("/api/items", {
            method: "POST",
            body: formData,
        })
            .then((r) => {
                if (r.ok) {
                    r.json().then(data => addNewItem(data));
                    navigate("/buy")
                } 
                else {
                    r.json().then((err) => setErrors(err.errors));
                }
            });
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <SellIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" sx={{ paddingTop: "5px", paddingBottom: "20px" }}>
                        Sell An Item:
                    </Typography>
                    <form noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}
                                value={itemname}
                                onChange={(e) => setItemName(e.target.value)}
                            >
                                <TextField
                                    required
                                    placeholder="Item Name"
                                    id="itemname"
                                    name="itemname"
                                    value={itemname}
                                    onChange={(e) => setItemName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="price"
                                    name="price"
                                    required
                                    placeholder="Item Price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="description"
                                    placeholder="Enter a description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    type="color"
                                    id="color"
                                    name="color"
                                    sx={{ height: "50px", width: "50px" }}
                                    title="Select Item Color:"
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    placeholder="Enter Item Material and/or Brand"
                                    type="text"
                                    name="material"
                                    id="material"
                                    value={material}
                                    onChange={(e) => setMaterial(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel label="Size">Size</InputLabel>
                                <Select
                                    id="size"
                                    name="size"
                                    value={size}
                                    onChange={(e) => setSize(e.target.value)}
                                    label="Size"
                                    placeholder="Size"
                                >
                                    <MenuItem value="XXS">XXS</MenuItem>
                                    <MenuItem value="XS">XS</MenuItem>
                                    <MenuItem value="S">S</MenuItem>
                                    <MenuItem value="M">M</MenuItem>
                                    <MenuItem value="L">L</MenuItem>
                                    <MenuItem value="XL">XL</MenuItem>
                                    <MenuItem value="XXL">XXL</MenuItem>
                                    <MenuItem value="0">0</MenuItem>
                                    <MenuItem value="2">2</MenuItem>
                                    <MenuItem value="4">4</MenuItem>
                                    <MenuItem value="6">6</MenuItem>
                                    <MenuItem value="8">8</MenuItem>
                                    <MenuItem value="10">10</MenuItem>
                                    <MenuItem value="12">12</MenuItem>
                                    <MenuItem value="14">14</MenuItem>
                                    <MenuItem value="16">16</MenuItem>
                                    <MenuItem value="W5">W5</MenuItem>
                                    <MenuItem value="W6">W6</MenuItem>
                                    <MenuItem value="W7">W7</MenuItem>
                                    <MenuItem value="W8">W8</MenuItem>
                                    <MenuItem value="W9">W9</MenuItem>
                                    <MenuItem value="W10">W10</MenuItem>
                                    <MenuItem value="W11">W11</MenuItem>
                                    <MenuItem value="M7">M7</MenuItem>
                                    <MenuItem value="M8">M8</MenuItem>
                                    <MenuItem value="M9">M9</MenuItem>
                                    <MenuItem value="M10">M10</MenuItem>
                                    <MenuItem value="M11">M11</MenuItem>
                                    <MenuItem value="M12">M12</MenuItem>
                                    <MenuItem value="M13">M13</MenuItem>
                                    <MenuItem value="M14">M14</MenuItem>
                                    <MenuItem value="NA">N/A</MenuItem>
                                    <MenuItem value="Other">Other</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel label="Condition">Condition</InputLabel>
                                <Select
                                    id="condition"
                                    name="condition"
                                    placeholder='condition'
                                    value={condition}
                                    onChange={(e) => setCondition(e.target.value)}
                                    label="Condition"
                                >
                                    <MenuItem value="new">New</MenuItem>
                                    <MenuItem value="likeNew">Like New</MenuItem>
                                    <MenuItem value="good">Good</MenuItem>
                                    <MenuItem value="average">Average</MenuItem>
                                    <MenuItem value="worn">Worn/Used</MenuItem>
                                    <MenuItem value="wearTear">Some Wear and Tear</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel>Upload Image:</InputLabel>
                                <input
                                    type="file"
                                    id="file"
                                    name="file"
                                    multiple
                                    accept="image/*"
                                    onChange={handleImages}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button sx={{ height: "50px" }} size="large" variant="contained" type="submit" endIcon={<SendIcon />}>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default AddItemForm; 