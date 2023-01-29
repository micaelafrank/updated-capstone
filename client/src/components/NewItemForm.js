import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import FormHelperText from '@mui/material/FormHelperText'
import { useNavigate } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { createTheme } from '@mui/material'
import { brown } from '@mui/material/colors';


function NewItemForm({ user, addNewItem, setUser }) {
    const [page, setPage] = useState(1)
    const [images, setImages] = useState("");
    const [itemname, setItemName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [color, setColor] = useState("")
    const [material, setMaterial] = useState("")
    const [size, setSize] = useState("")
    const [condition, setCondition] = useState("")
    const [category, setCategory] = useState("DEFAULT")
    const [errors, setErrors] = useState([]);

    const theme = createTheme({
        palette: {
            primary: {
                // Purple and green play nicely together.
                main: '#efd6ed',
                darker: '#bca5bb',
            },
            secondary: {
                // This is green.A700 as hex.
                main: '#cfe0c3',
                darker: '#9eae93',
                darkText: '#3b4234;'
            },
        },
    });
    const veryDarkBrown = brown[500];
    const darkBrown = brown[300];
    const mainBrown = brown[200];
    const lightBrown = brown['A100'];


    const navigate = useNavigate();

    function handleImages(e) {
        console.log(e.target.files[0])
        setImages(e.target.files[0])
    }

    const newSizeCat = `${category}, ${size}`;

    const formData = new FormData();
    formData.append('itemname', itemname);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('color', color);
    formData.append('material', material);
    formData.append('size', newSizeCat);
    formData.append('condition', condition);
    formData.append('user_id', user.id);
    formData.append('images', images);

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        //POST request to create new item for sale 
        fetch("/api/items", {
            method: "POST",
            body: formData,
        })
        .then((r) => {
            if (r.ok) {
                r.json().then(data => addNewItem(data));
                navigate("/buy");
            }
            else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }


    return (
        <div className='form-box' style={{alignItems:"center", marginLeft:"auto", marginRight:"auto", justifyContent:"center"}}>
            <form style={{marginLeft:"15px", marginBottom:"20px", alignItems:"center", width:"760px"}} onSubmit={handleSubmit}>
                {page === 1 ? (  
                    <div className='field1' style={{ display: "flex", flexDirection: "column", marginLeft: "auto", marginRight: "auto" }}>
                        <h1 style={{ textAlign: "center", fontSize: "35px", paddingTop: "40px", fontFamily: "monospace", fontWeight: "normal", color: veryDarkBrown, marginBottom: "0" }}>SELL YOUR GOODS</h1>
                        <p style={{ textAlign: "center", fontSize: "16px", paddingBottom: "10px", color: veryDarkBrown }}>TO LIST AN ITEM FOR SALE, ALL SECTIONS MUST BE FILLED OUT</p>
                        <h5 style={{ marginLeft: "15px" }} className='form-box-h5'> Page {page} of 2</h5>
                        <div style={{ width: "100%", height: "120px", justifyContent: "space-around", display: "flex", flexDirection: "row" }}>
                        <FormControl sx={{mr: 4}}>
                            <InputLabel htmlFor='my-input' style={{fontFamily:"monospace"}}>
                                Item Name  </InputLabel>
                            <Input
                                id="my-input"
                                required
                                aria-describedby='my-helper-text'
                                name="itemname"
                                onChange={(e) => setItemName(e.target.value)}
                                value={itemname}
                            />
                            <FormHelperText style={{ fontFamily: "Roboto, Helvetica,Arial, sans-serif"}} id='my-helper-text'
                            >
                                (EX: ACRYLIC PAINTING, KNIT SCARF, BOYFRIEND JEANS)
                            </FormHelperText>
                        </FormControl>

                        <FormControl>
                            <InputLabel htmlFor='my-input' style={{ fontFamily: "monospace" }}>
                                Price</InputLabel>
                            <Input
                                id="my-input"
                                aria-describedby='my-helper-text'
                                name="price"
                                required
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                            <FormHelperText id='my-helper-text' style={{ padding:"0px 10px", fontFamily: "Roboto, Helvetica,Arial, sans-serif" }}
                            >
                                HOW MUCH DOES YOUR ITEM COST?</FormHelperText>
                        </FormControl>
                        </div>
                        <div style={{ width: "100%", height:"120px", justifyContent:"space-around", display:"flex", flexDirection:"row" }}>
                        <FormControl sx={{ mr: 4 }}>
                            <InputLabel htmlFor='my-input' style={{ fontFamily: "monospace" }} >
                                Color </InputLabel>
                            <Input
                                id="my-input"
                                aria-describedby='my-helper-text'
                                name="color"
                                required
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                            />
                            <FormHelperText id='my-helper-text' style={{ padding: "0px 15px", fontFamily: "Roboto, Helvetica,Arial, sans-serif" }}
                            >
                                WHAT COLOR IS IT?</FormHelperText>
                        </FormControl>
                        <FormControl sx={{ mr: 2 }}>
                            <InputLabel htmlFor='my-input' style={{ fontFamily: "monospace" }}>
                                Material </InputLabel>
                            <Input
                                id="my-input"
                                required
                                aria-describedby='my-helper-text'
                                name="material"
                                value={material}
                                onChange={(e) => setMaterial(e.target.value)}
                            />
                            <FormHelperText id='my-helper-text' style={{ padding: "0px 15px", fontFamily: "Roboto, Helvetica,Arial, sans-serif" }}
                            >
                                WHAT MATERIAL IS IT? 
                            </FormHelperText>
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor='my-input' style={{ fontFamily: "monospace" }}>
                                Condition </InputLabel>
                            <Input
                                id="my-input"
                                required
                                aria-describedby='my-helper-text'
                                name="condition"
                                value={condition}
                                onChange={(e) => setCondition(e.target.value)}
                            />
                            <FormHelperText id='my-helper-text'
                            >
                                (EX: NEW, GOOD, AVERAGE, USED)
                            </FormHelperText>
                        </FormControl>
                        </div>
                        <div style={{ width: "100%", height: "120px", justifyContent: "space-around", display: "flex", flexDirection: "row" }}>
                        <FormControl sx={{mr: 4}}>
                            {/* <InputLabel style={{fontFamily:"monospace", marginTop:"10px"}} htmlFor='my-input' >
                                Category
                            </InputLabel> */}
                            <FormHelperText id='my-helper-text' style={{ fontFamily: "Roboto, Helvetica,Arial, sans-serif" }}
                            >
                                SELECT A CATEGORY TO FILTER SIZE OPTIONS
                            </FormHelperText>
                            <Select
                                id="my-input"
                                required
                                aria-describedby='my-helper-text'
                                style={{height:"45%"}}
                                defaultValue={'DEFAULT'}
                                label="Category"
                                name="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <MenuItem value="DEFAULT">Category </MenuItem>
                                <MenuItem value="mClothing">Men's Clothing</MenuItem>
                                <MenuItem value="wClothing">Women's Clothing</MenuItem>
                                <MenuItem value="uClothing">Unisex Clothing</MenuItem>
                                <MenuItem value="accessories">Accessories</MenuItem>
                                <MenuItem value="mShoes">Men's Shoes</MenuItem>
                                <MenuItem value="wShoes">Women's Shoes</MenuItem>
                                <MenuItem value="furniture">Furniture</MenuItem>
                                <MenuItem value="art">Art</MenuItem>
                                <MenuItem value="other">Other</MenuItem>
                                <MenuItem value="na">N/A</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor='my-input' style={{fontFamily:"monospace"}} >
                                Size </InputLabel>
                            <Input
                                id="my-input"
                                aria-describedby='my-helper-text'
                                name="size"
                                value={size}
                                required
                                onChange={(e) => setSize(e.target.value)}
                            />
                            <FormHelperText id='my-helper-text' style={{ fontFamily: "Roboto, Helvetica,Arial, sans-serif" }}
                            >
                                WHAT IS THE ITEM'S SIZE AND/OR DIMENSIONS?
                            </FormHelperText>
                        </FormControl>
                        </div>
                        <div style={{marginLeft:"5px", width:"100%", display:"flex", flexDirection:"row", justifyContent:"flex-end"}}>
                            {/* <button
                            type="button"
                            style={{ cursor:"pointer", fontSize:"15px", marginLeft:"20px", marginTop:"15px", border:"1px solid black", borderRadius:"3px", letterSpacing:"1.2px", backgroundColor: veryDarkBrown, marginRight:"30px", padding:"9px 20px", color: "white"}}
                            onClick={(() => setPage(page - 1))}
                            >
                            BACK
                            </button> */}
                            <button
                            type="button"
                            style={{ cursor:"pointer", marginTop: "15px", marginRight:"30px", fontSize: "15px", border: "1px solid black", borderRadius: "3px", letterSpacing: "1.2px", backgroundColor: veryDarkBrown, marginRight: "30px", padding: "9px 20px", color: "white" }}
                            onClick={() => setPage((page) => page + 1)}
                            >
                            NEXT
                            </button>
                        </div>
                    </div>) : null}
            {/* </form> */}

            {page === 2 ? (
                <>
                    <div className='field1' style={{display:"flex", flexDirection:"column", marginLeft:"auto", marginRight:"auto"}}>
                        <h1 style={{ textAlign:"center", fontSize:"35px", paddingTop: "40px", fontFamily: "monospace", fontWeight: "normal", color:veryDarkBrown, marginBottom:"0" }}>SELL YOUR GOODS</h1>
                        <p style={{ textAlign: "center", fontSize:"16px", paddingBottom: "10px", color:veryDarkBrown }}>IT'S ALL IN THE DETAILS.</p>
                        <h5 style={{ marginLeft: "15px" }} className='form-box-h5'> Page {page} of 2</h5>
                        <div style={{ width: "100%", height: "120px", justifyContent:"center", textAlign:"left"}}>
                        <FormControl>
                            <InputLabel htmlFor='my-input' style={{ fontFamily: "monospace" }}
                            >
                                Description </InputLabel>
                            <Input
                                id="my-input"
                                style={{textAlign:"left"}}
                                aria-describedby='my-helper-text'
                                name="description"
                                required
                                onChange={(e) => setDescription(e.target.value)}
                                value={description}
                            />
                            <FormHelperText id='my-helper-text'
                            >
                                EXPAND ON AN ITEM'S FIT, ORIGIN STORY, BRAND NAME, ETC.
                            </FormHelperText>
                        </FormControl>
                        </div>
                        <div style={{ width: "100%", height: "120px"}}>
                        <FormControl>
                            <InputLabel
                                style={{ position:"relative", fontFamily:"monospace" }}
                                htmlFor='my-input' >
                                Upload an image 
                            </InputLabel>
                            <Input
                            type="file"
                            id="file"
                            name="file"
                            multiple
                            accept="image/*"
                            onChange={handleImages}
                            style={{ alignItems:"left", marginTop: "2em", paddingLeft:"20px", paddingRight: "330px", }}
                            />
                            <FormHelperText id='my-helper-text' style={{ textAlign:"left", fontFamily: "Roboto, Helvetica,Arial, sans-serif" }}>
                                SHOW OFF YOUR ITEM
                            </FormHelperText>
                        </FormControl>
                        </div>
                        <div style={{ marginTop:"10px", marginLeft: "5px", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <button
                            type="button"
                            style={{ cursor: "pointer", fontSize: "15px", marginLeft: "20px", marginTop: "15px", border: "1px solid black", borderRadius: "3px", letterSpacing: "1.2px", backgroundColor: veryDarkBrown, marginRight: "30px", padding: "9px 20px", color: "white" }}
                            onClick={() => setPage((page) => page - 1)}
                            >
                                BACK    
                            </button>
                            <button
                            style={{ cursor: "pointer", fontSize: "15px", marginLeft: "20px", marginTop: "15px", border: "1px solid black", borderRadius: "3px", letterSpacing: "1.2px", backgroundColor: veryDarkBrown, marginRight: "30px", padding: "9px 20px", color: "white" }}
                            className="nextBtn"
                            type="submit"
                            // onClick={() => setPage((page) => page + 1)}
                            >
                                SUBMIT
                            </button>
                        </div>
                        </div>
                    </>
                ) : null}
            {/* PAGE THREE  */}
            {/* <div> */}
        </form>
        </div>
    )}

export default NewItemForm;