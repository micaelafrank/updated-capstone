import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import Fab from '@mui/material/Fab';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


function SavedItemCard({ item_id, id, item, savedItems, heartIcon, savedCard, user, price, description, images_url, itemname, seller, }) {
    // const [initialHeartValue, setInitialHeartValue] = useState(heartIcon);
    // const [editHeartState, setEditHeartState] = useState(false);
    // const [isHearted, setIsHearted] = useState(false);


    // let handleUndoHeart = () => {
    //     setEditHeartState(!editHeartState);
    //     if (editHeartState !== true) {
    //         fetch(`/api/edit_heart/${item_id}`, {
    //             method: "PATCH",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 heartIcon: false,
    //                 user_likes_container_id: user.user_likes_container.id,
    //                 item_id: item.id,
    //             }),
    //         })
    //             .then((resp) => resp.json())
    //             .then(data => setInitialHeartValue(data.clickedHeart));
    //         // deleteSavedItem();
    //     }
    // }


    // function handleHeartClick() {
    //     setEditHeartState(!editHeartState);
    //     fetch("/api/save", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             user_likes_container_id: user.user_likes_container.id,
    //             item_id: item.id,
    //             heartIcon: true,
    //         }),
    //     })
    //         .then(res => res.json())
    //         .then(data => setInitialHeartValue(data.heartIcon));
    //     setIsHearted(isHearted => !isHearted);
    //     // editItemHeart();
    // }


    return(
        <>
            {heartIcon}
        </>
    )
}

export default SavedItemCard; 
