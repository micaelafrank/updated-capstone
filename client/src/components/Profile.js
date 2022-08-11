import React, {useState} from "react";
import { Avatar, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import DeleteIcon from '@mui/icons-material/Delete';


export default function Profile({ user, setUser }) {
    const [avatar_url, setAvatar] = useState("")
    const [myItemsForSale, setMyItemsForSale] = useState([])
    const [errors, setErrors] = useState([]);
    const [favorites, setFavorites] = useState([]);


    function handleImage(e) {
        console.log(e.target.files[0]);
        setAvatar(e.target.files[0])
    };

    const formData = new FormData();
    formData.append('avatar', avatar_url);
    console.log(user)

    // const myItems = items.filter((item) => {
    //     if (item.user_id === user.id) return true;
    // })

    const id = user.id;
    function handleImage() {
        fetch(`/profile/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData),
        })
            .then(r => r.json())
            .then(update => {
                console.log(update)
                setAvatar(avatar_url)
    })}

    // const firstname = user.firstname
    // const initial = firstname[0];

    return (
        <div className="profileContainer">
            <div className="heading-container">
                <Avatar
                sx={{ width: '100px', height: '100px' }} 
                />
                <div display="flex">
                    <Button variant="contained" 
                    component="label"
                    >
                        Upload image
                        <input onChange={handleImage} hidden accept="image/*" type="file" />
                    </Button>
                    <Button variant="outlined" startIcon={<DeleteIcon />}>
                        Delete
                    </Button>
                </div>
                <div>
                    <h2>Welcome, @{user.username}.</h2>
                    <p>Start buying and selling!</p>
                </div>
            </div>
            <h1>Your Items For Sale:</h1>
            {/* {myItems} */}
            <h1>Saved Items:</h1>
            // ITEM CARDS
            <h1>Previous Purchases:</h1>
            // ITEM CARDS
        </div>
)}