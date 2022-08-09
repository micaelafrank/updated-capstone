import React, {useState} from "react";
import { Avatar, Icon } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';

function Profile({ user }) {
    const [image, setImage] = useState("");

    function handleImage(e) {
        // console.log(e.target.files[0]);
        setImage(e.target.file)
    };

    console.log(user)
    // console.log({username})

    return (
        <div className="profileContainer">
            <div className="heading-container">
                <Avatar src={image ? image : "/broken-image.jpg"}
                alt="Profile photo" 
                sx={{ width: '200px', height: '200px' }} 
                />
                <Icon fontSize="small" onClick={handleImage}>add_circle</Icon>
                <IconButton aria-label="delete">
                    <SvgIcon>
                        <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
                    </SvgIcon>
                </IconButton>;                
                <div>
                    <h2>Welcome, @{user.username}.</h2>
                    <p>Start buying and selling!</p>
                </div>
            </div>
            <h1>Your Items For Sale:</h1>
            // ITEM CARDS
            <h1>Saved Items:</h1>
            // ITEM CARDS
            <h1>Previous Purchases:</h1>
            // ITEM CARDS
        </div>
)};

export default Profile;