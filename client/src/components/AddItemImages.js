import React, { useState, useEffect } from "react";
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import { useNavigate } from 'react-router-dom'

function AddItemImages() {
    const navigate = useNavigate();

    let handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();

        const itemId = document.getElementById("itemId").value;
        formData.append("[id]", itemId);
        let imgArr = e.target.images.files.length;
        let uniqueImg = e.target.images.files;

        for (var i = 0; i < imgArr; i++) {
            formData.append("images[]", uniqueImg[i]);
        }

        patchSubmit(formData);
        e.target.reset();
    };

    function patchSubmit(data){
        fetch("/api/items/add-images", {
            method: "PATCH",
            body: data,
        })
        .then(navigate("/buy"))
    };

    return(
        <form onSubmit={handleSubmit}>
            <div className='field1'>
                <h1>Add Photos</h1>
                <label className='label'>
                    Show off your item!
                </label>
                <br></br>
                <FormControl>
                    <InputLabel
                        style={{ marginBottom: "3em" }}
                        htmlFor='my-input' >
                        Upload up to four images
                    </InputLabel>
                    <Input
                        style={{ marginTop: "3em" }}
                        type="file"
                        id="images"
                        name="images"
                        multiple
                        accept="image/*"
                    />
                </FormControl>
                <br></br>
                <FormControl>
                    <Input
                        style={{ marginTop: "3em" }}
                        type="file"
                        id="images"
                        name="images"
                        multiple
                        accept="image/*"
                    />
                </FormControl>
                <br></br>
                <FormControl>
                    <Input
                        style={{ marginTop: "3em" }}
                        type="file"
                        id="images"
                        name="images"
                        multiple
                        accept="image/*"
                    />
                </FormControl>
                <br></br>
                <FormControl>
                    <Input
                        style={{ marginTop: "3em" }}
                        type="file"
                        id="images"
                        name="images"
                        multiple
                        accept="image/*"
                    />
                </FormControl>
                <br></br>
                <button
                style={{marginTop: "3em"}}
                type="submit"
                >
                    SELL ITEM
                </button>
            </div>
        </form>
    )}


export default AddItemImages;
