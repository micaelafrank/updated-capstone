import React, { useState, useEffect } from 'react';
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
import { darkScrollbar } from '@mui/material';

// import SavedContainer from './SavedContainer';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function ItemCard({ sold_by, cartItems, setCartValue, setCartItems, handleUnlike, addNewFavorite, setFavorites, isFavorite, setIsFavorite, addCartItem, favorites, inCartIcon, item_id, item, deleteLike, clickedHeart, setChange, change, user, itemname, items, setItems, id, color, price, description, checkHearts, images_url, material, condition, size }) {
    const [priceState, setPriceState] = useState(price);
    const [editPriceState, setEditPriceState] = useState(false);
    const [initialPriceValue, setInitialPriceValue] = useState(price);
    const [itemNameState, setItemNameState] = useState("");
    const [editNameState, setEditNameState] = useState(false);
    const [initialItemNameValue, setInitialItemNameValue] = useState(itemname);
    // const [initialHeartValue, setInitialHeartValue] = useState(clickedHeart);
    // const [editHeartState, setEditHeartState] = useState(false);
    const [initialCartValue, setInitialCartValue] = useState(inCartIcon);
    const [editCartState, setEditCartState] = useState(false);
    const [descriptionState, setDescriptionState] = useState("");
    const [editDescriptionState, setEditDescriptionState] = useState(false);
    const [initialDescriptionValue, setInitialDescriptionValue] = useState(description);
    const [isAddedCart, setIsAddedCart] = useState(false);
    const [wasClicked, setWasClicked] = useState(false)
    const [isSaved, setIsSaved] = useState(false)
    const [inCart, setInCart] = useState(false)

    // const listOfSaves = favorites.filter((favItem) => {
    //     return favItem.item_id === item.id
    // })
    // console.log(listOfSaves)


    let handleEditDescription = () => {
        setEditDescriptionState(!editDescriptionState);
        if (descriptionState !== "") {
            fetch(`/api/items/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    description: descriptionState,
                    id: item.id,
                }),
            })
                .then((resp) => resp.json())
                .then((data) => setInitialDescriptionValue(data.description));
        }
    };


    let handleEditItemName = () => {
        setEditNameState(!editNameState);
        if (itemNameState !== "") {
            fetch(`/api/items/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    itemname: itemNameState,
                    id: item.id,
                }),
            })
                .then((resp) => resp.json())
                .then((data) => setInitialItemNameValue(data.itemname));
        }
    };


    let handleEditPrice = () => {
        setEditPriceState(!editPriceState);
        if (priceState !== 0) {
            fetch(`/api/items/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    price: priceState,
                    id: item.id,
                }),
            })
            .then((resp) => resp.json())
            .then((data) => setInitialPriceValue(data.price));
        }
    };


    function alreadyInCart() {
        <Alert key={'success'} variant={'success'}>This item is already in your cart</Alert>
    }

    function renderUserCartItem() {
        console.log(user)
        const newCartItem = {
            user_cart_id: user.user_cart.id,
            item_id: item.id,
        }
        console.log(newCartItem)
        // const cartItem = item
        fetch("/api/addtocart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCartItem),
        })
        .then(res => res.json())
        .then(setInCart(inCart => (!inCart)))
        // setInCart(inCart => (!inCart))
        setWasClicked(wasClicked => (!wasClicked));
        // setIsFavorite(isFavorite => !isFavorite);
    }


    function handleFillHeart() {
        console.log(user)
        const newFavoriteItem = {
            user_likes_container_id: user.user_likes_container.id,
            item_id: item.id,
        }
        console.log(user)
        console.log(newFavoriteItem)
        fetch(`/api/saved-items`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFavoriteItem),
        })
        .then(res => res.json())
        .then(data => addNewFavorite(data))
        // setIsFavorite(true);
        setChange(!change);
        setIsSaved(isSaved => (!isSaved))
        setWasClicked(wasClicked => (!wasClicked));
    }
        // .then(res => res.json())
        // .then(data => addNewFavorite(data));
        // .then(res => res.json())
        // .then(data => addNewFavorite(data))



    function handleUndoHeart() {
        console.log(user);
        console.log(item)
        fetch(`/api/remove-save/${id}`, {
            method: "DELETE",
        })
        .then((res) => res.json())
        .then(data => handleUnlike(data))        
        setIsSaved(isSaved => (!isSaved))
        setWasClicked(wasClicked => (!wasClicked));
        // handleUnlike();
        // setIsFavorite(false)
        // deleteFavorite();
        // .then(setIsFavorite(isFavorite => !isFavorite))
    }


    let handleCartClick = () => {
        setEditCartState(!editCartState);
        fetch(`/api/edit_cart/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                inCartIcon: !inCartIcon,
                id: item.id,
            }),
        })
        .then((resp) => resp.json())
        .then(data => setInitialCartValue(data.inCartIcon));
        setIsAddedCart(isAddedCart => (!isAddedCart))
    }


    function setCartValue(deletedItem){
        setInitialCartValue(deletedItem.inCartIcon);
        setIsAddedCart(isAddedCart => (!isAddedCart))
    }

    function renderUserCartItem() {
        console.log(user)
        const newItemToAdd = {
            user_cart_id: user.user_cart.id,
            item_id: item.id,
        }
        console.log(newItemToAdd)
        // const cartItem = item
        fetch("/api/addtocart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newItemToAdd),
        })
        .then(res => res.json())
        .then(setChange(!change))
        handleCartClick();
    }


    function handleDelete(id) {
        fetch(`/api/items/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then(data => setItems(items.filter((item) => item.id !== id)))
    }


    return (
        <Card sx={{ border: "1px solid black" }}>
            {/* <Carousel
                component = "img"
                alt="random" 
                src={images_url}>
                <ArrowBackIosIcon style={{ position: 'absolute', top: '50%', left: 20, transform: 'translate(-50%,-50%)' }}>Back</ArrowBackIosIcon>
                <ArrowForwardIosIcon style={{ position: 'absolute', top: '50%', right: 20, transform: 'translate(-50%,-50%)' }}>Next</ArrowForwardIosIcon>               
            </Carousel> */}
            <CardMedia
                component="img"
                sx={{ maxHeight: "300" }}
                image={images_url}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                    {user.id === item.user_id ?
                        <Fab className="fab-edit" size="small" aria-label="edit">
                            <EditIcon onClick={handleEditItemName} sx={{ color: editNameState ? "green" : null }} />
                        </Fab>
                        : null}
                    {editNameState ? (
                        <div>
                            <textarea
                                className="form-control"
                                defaultValue={initialItemNameValue}
                                onChange={(e) => setItemNameState(e.target.value)}
                            />
                        </div>
                    ) : (
                        <div>
                            <span>{initialItemNameValue}</span>
                        </div>
                    )}
                </Typography>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <SellOutlinedIcon style={{ paddingRight: "4px" }} />
                    <div style={{ paddingRight: "14px" }}>
                        {editPriceState ? (
                            <div>
                                <textarea
                                    className="form-control"
                                    defaultValue={initialPriceValue}
                                    onChange={(e) => setPriceState(e.target.value)}
                                />
                            </div>
                        ) : (
                            <div>
                                <span>${initialPriceValue}</span>
                            </div>
                        )}
                    </div>
                    {user.id === item.user_id ?
                        <Fab className="fab-edit" size="small" aria-label="edit">
                            <EditIcon onClick={handleEditPrice} sx={{ color: editPriceState ? "green" : null }} />
                        </Fab>
                        : null}
                </div>
                <Typography>
                    {user.id === item.user_id ?
                        <Fab className="fab-edit" float="right" size="small" aria-label="edit">
                            <EditIcon onClick={handleEditDescription} sx={{ color: editDescriptionState ? "green" : null }} />
                        </Fab>
                        : null}
                    {editDescriptionState ? (
                        <div>
                            <textarea
                                className="form-control"
                                defaultValue={initialDescriptionValue}
                                onChange={(e) => setDescriptionState(e.target.value)}
                            />
                        </div>
                    ) : (
                        <div>
                            <span>{initialDescriptionValue}</span>
                        </div>
                    )}
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "#465C8B", fontWeight: "bold", paddingTop: "10px" }}>
                    Sold by: {sold_by}
                </Typography>
            </CardContent>
            <CardActions>
                {/* <Button size="small">View</Button>
                <Button size="small">Edit</Button> */}
                {user.id === item.user_id ? null :
                    <IconButton
                        onClick={isSaved ? handleUndoHeart : handleFillHeart}
                    >
                        {isSaved ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                }
                {user.id === item.user_id ?
                    <IconButton aria-label="delete"
                        onClick={() => {
                            <p severity="warning" variant="outlined"
                                onClick={handleDelete}
                                onClose={() => { }}>alert('Are you sure you want to delete this item? This cannot be undone.')
                            </p>
                        }}>
                        <DeleteIcon />
                    </IconButton> : null}
                {user.id === item.user_id ? null :
                    <IconButton
                        onClick={initialCartValue ? alreadyInCart : renderUserCartItem}
                        sx={{ pointerEvents: initialCartValue ? "none" : null }}
                        defaultValue={initialCartValue}
                    >
                        {initialCartValue ? <ShoppingCartIcon /> : <AddShoppingCartIcon />}
                    </IconButton>
                }
                {/* {user.id === item.user_id ?
                    <Fab className="fab-edit" float="right" size="small" aria-label="edit">
                        <EditIcon float="right"/>
                    </Fab>
                    : null} */}
            </CardActions>
        </Card>
    )
}

export default ItemCard;