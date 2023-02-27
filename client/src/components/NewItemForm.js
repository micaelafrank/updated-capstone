import React, { useState, useEffect } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import FormHelperText from '@mui/material/FormHelperText'
import { useNavigate } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { createTheme } from '@mui/material'
import { brown } from '@mui/material/colors';
// import NewItemImages from './NewItemImages'
import ItemDetails from './ItemDetails'

function NewItemForm({ user, addNewItem, items, setItems }) {
    const [page, setPage] = useState(1)
    // const [images, setImages] = useState("");
    const [itemname, setItemName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [color, setColor] = useState("")
    const [material, setMaterial] = useState("")
    const [size, setSize] = useState("")
    const [condition, setCondition] = useState("")
    const [images, setImages] = useState("");
    // const [image1, setImage1] = useState("")
    // const [image2, setImage2] = useState("")
    // const [image3, setImage3] = useState("")
    // const [image4, setImage4] = useState("")
    const [category, setCategory] = useState("DEFAULT")
    const [errors, setErrors] = useState([]);
    const [addImages, setAddImages] = useState(false);

    useEffect(() => {
        fetch("/api/items")
            .then((r) => r.json())
            .then(data => { setItems(data) })
    }, [])
    console.log("items arary: ", items)
    let itemsArr = [...items];
    let arrLength = itemsArr.length;
    console.log("arr length: ", arrLength);

    // console.log("items length: ", items.length)

    console.log("new form user: ", user)

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

    function handleImages(e){
        setImages(e.target.files[0]);
        console.log("my image url: ", e.target.files[0])
    }

    // function handleImageOne(e) {
    //     console.log(e.target.files[0])
    //     setImage1(e.target.files[0])
    // }

    // let newItemId = {user.id} + (items.length)+1

    const newSizeCat = `${category}, ${size}`;

    
    // formData.append("images", images);
    // formData.append('image1', image1);
    // formData.append('image2', images);
    // formData.append('image3', images);
    // formData.append('image4', images);

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);

        const formData = new FormData();
        formData.append('itemname', itemname);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('color', color);
        formData.append('material', material);
        formData.append('size', newSizeCat);
        formData.append('condition', condition);
        formData.append('user_id', user.id);
        formData.append("images", images);
        
        //POST request to create new item for sale 
        fetch("/api/items", {
            method: "POST",
            body: formData,
        })
        .then((r) => {
            if (r.ok) {
                r.json().then(data => addNewItem(data));
                navigate('/buy');
            }
            else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }


    return (
        <div className='form-box' style={{alignItems:"center", marginLeft:"auto", marginRight:"auto",}}>
            <form style={{marginLeft:"auto", marginRight:"auto", marginBottom:"20px", justifyContent:"center", alignItems:"center", width:"760px"}} onSubmit={handleSubmit}>
                {page === 1 ? (  
                    <div className='field1' style={{ display: "flex", flexDirection: "column", marginLeft: "auto", marginRight: "auto" }}>
                        <p id="newItemId" style={{ display: "none" }}>{`${user.id}${arrLength +1}`}</p>
                        <h1 
                        className='titleHeaderStyling'
                        // style={{ textAlign: "center", fontSize: "35px", paddingTop: "40px", fontFamily: "monospace", fontWeight: "bold", color: veryDarkBrown, marginBottom: "0" }}
                        >SELL YOUR GOODS</h1>
                        <p style={{ textAlign: "center", fontSize: "22px", paddingBottom: "0", marginBottom: "7px", textShadow: "1px 1px #c98d6d", fontFamily: "monospace",color: "black" }}>great sellers make good goods</p>
                        <p style={{ textAlign: "center", fontSize: "17px", paddingBottom: "20px", paddingTop:"15px", color: "black" }}>TO LIST AN ITEM FOR SALE, ALL SECTIONS MUST BE FILLED OUT</p>
                        <h5 style={{ marginLeft: "15px" }} className='form-box-h5'> Page {page} of 2</h5>
                        <div style={{ width: "100%", height: "120px", justifyContent: "space-around", display: "flex", flexDirection: "row" }}>
                        <FormControl sx={{mr: 4}} theme={theme}>
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
                            <button
                            type="button"
                            style={{ cursor:"pointer", fontSize:"15px", marginLeft:"20px", marginTop:"15px", border:"1px solid black", borderRadius:"3px", letterSpacing:"1.2px", backgroundColor: veryDarkBrown, marginRight:"30px", padding:"9px 20px", color: "white"}}
                            onClick={(() => setPage(page - 1))}
                            >
                            BACK
                            </button>
                            <button
                            type="submit"
                            style={{ cursor: "pointer", fontFamily: "monospace", marginTop: "15px", marginRight:"30px", fontSize: "15px", border: "1px solid black", borderRadius: "3px", letterSpacing: "1.2px", backgroundColor: veryDarkBrown, marginRight: "30px", padding: "9px 20px", color: "white" }}
                            onClick={(() => setPage(page + 1))}
                            >
                            NEXT
                            </button>
                        </div>
                    </div>) : null}
            {/* </form> */}

            {page === 2 ? (
                <>
                    <div className='field1' style={{display:"flex", flexDirection:"column", marginLeft:"auto", marginRight:"auto"}}>
                        <h1 style={{ textAlign: "center", fontSize: "35px", paddingTop: "40px", fontFamily: "monospace", fontWeight: "bold", color: veryDarkBrown, marginBottom: "0" }}>SELL YOUR GOODS</h1>
                        <p style={{ textAlign: "center", fontSize: "22px", paddingBottom: "0", marginBottom: "7px", textShadow: "1px 1px #c98d6d", fontFamily: "monospace", color: "black" }}>great sellers make good goods</p>
                        <p style={{ textAlign: "center", fontSize: "17px", paddingBottom: "20px", paddingTop:"15px", color: "black" }}>IT'S ALL IN THE DETAILS</p>
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
                                <FormHelperText style={{ paddingRight: "300px" }} id='my-helper-text'
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
                            name="file"
                            id="file"
                            multiple
                            accept="image/*"
                            onChange={handleImages}
                            style={{ alignItems:"left", marginTop: "2em", paddingLeft:"20px", paddingRight: "390px", }}
                            />
                            <FormHelperText id='my-helper-text' style={{ textAlign:"left", fontFamily: "Roboto, Helvetica,Arial, sans-serif" }}>
                                SHOW OFF YOUR ITEM
                            </FormHelperText>
                        </FormControl>
                        {/* <FormControl>
                            <InputLabel
                                style={{ position: "relative", fontFamily: "monospace" }}
                                htmlFor='my-input' >
                                Add another image (optional)
                            </InputLabel>
                            <Input
                                type="file"
                                name="file"
                                id="file"
                                multiple
                                accept="image/*"
                                onChange={handleImages}
                                style={{ alignItems: "left", marginTop: "2em", paddingLeft: "20px", paddingRight: "390px", }}
                            />
                            <FormHelperText id='my-helper-text' style={{ textAlign: "left", fontFamily: "Roboto, Helvetica,Arial, sans-serif" }}>
                                SHOW OFF YOUR ITEM
                            </FormHelperText>
                        </FormControl>
                        <FormControl>
                            <InputLabel
                                style={{ position: "relative", fontFamily: "monospace" }}
                                htmlFor='my-input' >
                                Add another image (optional)
                            </InputLabel>
                            <Input
                                type="file"
                                id="image3"
                                name="file"
                                accept="image/*"
                                onChange={handleImages}
                                style={{ alignItems: "left", marginTop: "2em", paddingLeft: "20px", paddingRight: "390px", }}
                            />
                            <FormHelperText id='my-helper-text' style={{ textAlign: "left", fontFamily: "Roboto, Helvetica,Arial, sans-serif" }}>
                                SHOW OFF YOUR ITEM
                            </FormHelperText>
                        </FormControl> */}
                        {/* <FormControl>
                            <InputLabel
                                style={{ position: "relative", fontFamily: "monospace" }}
                                htmlFor='my-input' >
                                Add another image (optional)
                            </InputLabel>
                            <Input
                                type="file"
                                id="image4"
                                name="file"
                                accept="image/*"
                                onChange={handleImages}
                                style={{ alignItems: "left", marginTop: "2em", paddingLeft: "20px", paddingRight: "390px", }}
                            />
                            <FormHelperText id='my-helper-text' style={{ textAlign: "left", fontFamily: "Roboto, Helvetica,Arial, sans-serif" }}>
                                SHOW OFF YOUR ITEM
                            </FormHelperText>
                        </FormControl> */}
                    </div> 
                    <div style={{ marginTop:"10px", marginLeft: "5px", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <button
                        type="button"
                        style={{ cursor: "pointer", fontSize: "15px", marginLeft: "20px", marginTop: "15px", border: "1px solid black", borderRadius: "3px", letterSpacing: "1.2px", fontFamily:"monospace", backgroundColor: veryDarkBrown, marginRight: "30px", padding: "9px 20px", color: "white" }}
                        onClick={() => setPage((page) => page - 1)}
                        >
                            BACK    
                        </button>
                        <button
                        style={{ cursor: "pointer", fontSize: "15px", marginTop: "15px", border: "1px solid black", borderRadius: "3px", letterSpacing: "1.2px", backgroundColor: veryDarkBrown, fontFamily: "monospace", marginRight: "30px", padding: "9px 20px", color: "white" }}
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
    {addImages ? <ItemDetails itemname={itemname} size={size} condition={condition} material={material} color={color} price={price} user={user} images={images} /> : null}
    </div>
    )}

export default NewItemForm;