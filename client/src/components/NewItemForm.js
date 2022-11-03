import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import FormHelperText from '@mui/material/FormHelperText'
import { useNavigate } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { createTheme } from '@mui/material'



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
    const [category, setCategory] = useState("")
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

    const navigate = useNavigate();

    function handleImages(e) {
        console.log(e.target.files[0])
        setImages(e.target.files[0])
    }

    const formData = new FormData();
    formData.append('itemname', itemname);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('color', color);
    formData.append('material', material);
    formData.append('size', `${category}, ${size}`);
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
        <div className='form-box'>
            <h5 className='form-box-h5'> Page {page} of 3</h5>
            <form onSubmit={handleSubmit}>
                {page === 1 ? (  
                    <div className='field1'>
                        <h1>Sell An Item</h1>
                        <label className='label'>
                            Please fill in all required fields to list your item.
                        </label>
                        <p>Complete all of the steps below</p>
                        <FormControl>
                            <InputLabel htmlFor='my-input' >
                                Item Name </InputLabel>
                            <Input
                                id="my-input"
                                aria-describedby='my-helper-text'
                                name="itemname"
                                onChange={(e) => setItemName(e.target.value)}
                                value={itemname}
                            />
                            <FormHelperText id='my-helper-text'
                            >
                                What are you selling?</FormHelperText>
                        </FormControl>

                        <FormControl>
                            <InputLabel htmlFor='my-input' >
                                Price</InputLabel>
                            <Input
                                id="my-input"
                                aria-describedby='my-helper-text'
                                name="price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                            <FormHelperText id='my-helper-text'
                            >
                                How much does your item cost?</FormHelperText>
                        </FormControl>
                        <br></br>
                        <FormControl>
                            <InputLabel htmlFor='my-input'
                            >
                                Description</InputLabel>
                            <Input
                                id="my-input"
                                aria-describedby='my-helper-text'
                                name="description"
                                onChange={(e) => setDescription(e.target.value)}
                                value={description}
                            />
                            <FormHelperText id='my-helper-text'
                            >
                                Write a description to accompany your listing. Feel free to expand on an item's fit, its origin story, a brand, etc.
                            </FormHelperText>
                        </FormControl>
                        <br ></br>
                        <FormControl>
                            <InputLabel htmlFor='my-input' >
                                Color </InputLabel>
                            <Input
                                id="my-input"
                                aria-describedby='my-helper-text'
                                name="color"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                            />
                            <FormHelperText id='my-helper-text'
                            >
                                What color is it?</FormHelperText>
                        </FormControl>
                        <br></br>
                        <button
                        type="button"
                        onClick={(() => setPage(page - 1))}
                        >
                        BACK
                        </button>
                        <button
                        type="button"
                        onClick={() => setPage((page) => page + 1)}
                        >
                        NEXT
                        </button>
                    </div>) : null}
            </form>

            {page === 2 ? (
                <>
                    <div>
                        <h1>Sell An Item</h1>
                        <label>
                            You're almost there!
                        </label>
                        <p>It's all in the details</p>
                        <FormControl>
                            <InputLabel htmlFor='my-input' >
                                Material</InputLabel>
                            <Input
                                id="my-input"
                                aria-describedby='my-helper-text'
                                name="material"
                                value={material}
                                onChange={(e) => setMaterial(e.target.value)}
                            />
                            <FormHelperText id='my-helper-text'
                            >
                                What material is it?
                            </FormHelperText>
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor='my-input' >
                                Condition</InputLabel>
                            <Input
                                id="my-input"
                                aria-describedby='my-helper-text'
                                name="condition"
                                value={condition}
                                onChange={(e) => setCondition(e.target.value)}
                            />
                            <FormHelperText id='my-helper-text'
                            >
                                Specify the item's condition (New, Good, Average, Used, etc.)
                            </FormHelperText>
                        </FormControl>
                        <br></br>
                        <FormControl
                            style={{ marginTop: "3em" }}
                        >
                            <InputLabel htmlFor='my-input' >
                                Category
                            </InputLabel>
                            <FormHelperText id='my-helper-text'
                            >
                                Select a category to filter size options.
                            </FormHelperText>
                            <Select
                                id="my-input"
                                aria-describedby='my-helper-text'
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
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
                        <FormControl
                        style={{ marginTop: "3em" }}
                        >
                            <InputLabel htmlFor='my-input' >
                                Size</InputLabel>
                            <Input
                                id="my-input"
                                aria-describedby='my-helper-text'
                                name="size"
                                value={size}
                                onChange={(e) => setSize(e.target.value)}
                            />
                            <FormHelperText id='my-helper-text'
                            >
                                Item's size and/or dimensions
                            </FormHelperText>
                        </FormControl>             
                        <br></br>
                        <FormControl
                        style={{ marginTop: "3em" }}
                        >
                            <InputLabel
                                style={{ marginBottom: "1em" }}
                                htmlFor='my-input' >
                                Upload Photo
                            </InputLabel>
                            <FormHelperText id='my-helper-text'
                            >
                                Show off your item!
                            </FormHelperText>
                            <Input
                            type="file"
                            id="file"
                            name="file"
                            multiple
                            accept="image/*"
                            onChange={handleImages}
                            style={{ marginTop: "2em" }}
                            />
                        </FormControl>
                        <br></br>
                        <br></br>
                        <button
                        type="button"
                        onClick={() => setPage((page) => page - 1)}
                        >
                            BACK
                        </button>
                        <button
                        className="nextBtn"
                        type="button"
                        onClick={() => setPage((page) => page + 1)}
                        >
                            NEXT
                        </button>
                    </div>
                </>
            ) : null}

            {/* PAGE THREE  */}
            {/* <div> */}
            {page === 3 ?
             <>
                <div className='field1'>
                    <h1>Sell An Item</h1>
                    <label className='label'>
                        Everything look good?
                    </label>
                    <p>Confirm your info in order to list your item</p>
                    <br></br>
                <div style={{border: "1px solid black", width: "30%", height: "200px", marginLeft: "20px", padding: "30px"}}>
                    <p>PREVIEW</p>
                </div>
                <br></br>
                <button
                type="button"
                onClick = {() => setPage((page) => page - 1)}
                >
                BACK
                </button>
                <button
                type="submit"
                >
                    LOOKS GOOD!
                </button>                
            </div>
        </> : null}
        </div>
    )}

export default NewItemForm;