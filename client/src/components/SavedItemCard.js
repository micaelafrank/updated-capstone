import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Card from '@mui/material/Card';
import Carousel from 'react-material-ui-carousel'
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function SavedItemCard({ itemname, change, setInCart, editHeartState, setEditHeartState, setWasClicked, setChange, wasClicked, handleUndoHeart, inCart, handleCartClick, getHeartStatus, sold_by, savedItem, item_id, images_url, price, user, description, size, color, material, deleteFavorite, setInitialHeartValue, item, id, deleteLike }) {

    // function renderUserCartItem() {
    //     console.log(user)
    //     const newItemToAdd = {
    //         user_cart_id: user.user_cart.id,
    //         item_id: item.id,
    //     }
    //     console.log(newItemToAdd)
    //     // const cartItem = item
    //     fetch("/addtocart", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(newItemToAdd),
    //     })
    //         .then(res => res.json())
    //         .then(setChange(!change))
    //     handleCartClick();
    // }


    // let handleUndoHeart = () => {
    //     setEditHeartState(!editHeartState);
    //     // if (heartValueState !== true) {
    //     fetch(`/edit_heart/${id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             clickedHeart: false,
    //             id: item.id,
    //         }),
    //     })
    //         .then((resp) => resp.json())
    //         .then(data => setInitialHeartValue(data.clickedHeart));
    //     deleteSavedItem();
    // }


//     function deleteSavedItem() {
//         fetch("/unsave/" + item_id, {
//             method: "DELETE",
//         })
//         handleUndoHeart();
//     }


    return (
//         <Card sx={{ border: "1px solid black" }}>
//             <CardMedia
//                 component="img"
//                 sx={{ maxHeight: "300" }}
//                 image={images_url}
//             />
//             <CardContent sx={{ flexGrow: 1 }}>
//                 <Typography gutterBottom variant="h5" component="h2">
//                     {user.id === item.user_id ?
//                         <Fab className="fab-edit" size="small" aria-label="edit">
//                             {/* <EditIcon onClick={handleEditItemName} sx={{ color: editNameState ? "green" : null }} /> */}
//                         </Fab>
//                         : null}
//                             <div>
//                                 <span>{itemname}</span>
//                             </div>
//                 </Typography>
//                 <div style={{ display: "flex", alignItems: "center" }}>
//                     <SellOutlinedIcon style={{ paddingRight: "4px" }} />
//                     <div style={{ paddingRight: "14px" }}>
//                             <div>
//                                 <span>${price}</span>
//                             </div>
//                     </div>
//                     {user.id === item.user_id ?
//                         <Fab className="fab-edit" size="small" aria-label="edit">
//                             {/* <EditIcon onClick={handleEditPrice} sx={{ color: editPriceState ? "green" : null }} /> */}
//                         </Fab>
//                         : null}
//                 </div>
//                 <Typography>
//                     {user.id === item.user_id ?
//                         <Fab className="fab-edit" float="right" size="small" aria-label="edit">
//                             {/* <EditIcon onClick={handleEditDescription} sx={{ color: editDescriptionState ? "green" : null }} /> */}
//                         </Fab>
//                         : null}
                        <div>
                            <span>{description}</span>
                        </div>
//                 </Typography>
//                 <Typography sx={{ fontSize: "14px", color: "#465C8B", fontWeight: "bold", paddingTop: "10px" }}>
//                     Sold by: {sold_by}
//                 </Typography>
//             </CardContent>
//             <CardActions>
//                 {/* <Button size="small">View</Button>
//                 <Button size="small">Edit</Button> */}
//                 {user.id === item.user_id ? null :
//                     <IconButton aria-label="add to favorites" onClick={deleteSavedItem}>
//                         {getHeartStatus ? <FavoriteIcon /> : <FavoriteBorderIcon />}
//                     </IconButton>
//                 }
//                 {user.id === item.user_id ?
//                     null :
//                     <IconButton onClick={wasClicked ? <Alert>"To remove this item, visit your cart"</Alert> : renderUserCartItem} aria-label="add to cart">
//                         {inCart ? <ShoppingCartIcon variant="outlined" /> : <AddShoppingCartIcon />}
//                     </IconButton>}
//             </CardActions>
//         </Card>
    )
}

export default SavedItemCard; 
