import React, {useState, useEffect} from "react";
import { Avatar, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import SavedContainer from "./SavedContainer";
import IconButton from '@mui/material/IconButton';
import ItemCard from "./ItemCard";
import SvgIcon from '@mui/material/SvgIcon';
import DeleteIcon from '@mui/icons-material/Delete';


export default function Profile({ user, items, setItems, setUser }) {
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    
    // const myItems = items.filter((item) => {
    //     if (item.user_id === user.id) return true;
    // })

    const id = user.id;

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     fetch(`/profile/${id}`, {
    //         method: "PATCH",
    //         body: formData,
    //     })
    //     .then(r => r.json())
    //     .then(navigate("/profile"))
    // }
    // const firstname = user.firstname
    // const initial = firstname[0];

    return (
        <div style={{margin:"1rem"}} className="profileContainer">
            <div className="heading-container">
                <Avatar
                sx={{ width: '100px', height: '100px' }} 
                />
                <div display="flex">
                    <Button variant="contained" 
                    component="label"
                    >
                        Upload image
                        <input hidden accept="image/*" type="file" />
                    </Button>
                    {/* <Button type="submit">Use this image</Button> */}
                    {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
                        Delete
                    </Button> */}
                </div>
                <div>
                    <h2>Welcome, @{user.username}.</h2>
                    <p>Start buying and selling!</p>
                </div>
            </div>
            <h1>Your Items For Sale:</h1>
            {/* {myItems} */}
            <h1>Saved Items:</h1>
            <h1>Previous Purchases:</h1>
            // ITEM CARDS
        </div>
)}