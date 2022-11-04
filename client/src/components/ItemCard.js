import React, { useState, useCallback, useEffect } from 'react';
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
import {brown, orange} from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ConfirmDelete from './ConfirmDelete';
import EditCard from './EditCard';
// import SavedContainer from './SavedContainer';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function ItemCard({ sold_by, show, deleteItemFromList, cartItems, setCartValue, setCartItems, handleUnlike, addNewFavorite, setFavorites, isFavorite, setIsFavorite, addCartItem, favorites, inCartIcon, item_id, item, deleteLike, clickedHeart, setChange, change, user, itemname, items, setItems, id, color, price, description, checkHearts, images_url, material, condition, size }) {
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
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => setOpenEdit(false);


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


    // let handleEditDescription = () => {
    //     setEditDescriptionState(!editDescriptionState);
    //     if (descriptionState !== "") {
    //         fetch(`/api/items/${id}`, {
    //             method: "PATCH",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 description: descriptionState,
    //                 id: item.id,
    //             }),
    //         })
    //             .then((resp) => resp.json())
    //             .then((data) => setInitialDescriptionValue(data.description));
    //     }
    // };


    // let handleEditItemName = () => {
    //     setEditNameState(!editNameState);
    //     if (itemNameState !== "") {
    //         fetch(`/api/items/${id}`, {
    //             method: "PATCH",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 itemname: itemNameState,
    //                 id: item.id,
    //             }),
    //         })
    //             .then((resp) => resp.json())
    //             .then((data) => setInitialItemNameValue(data.itemname));
    //     }
    // };


    // let handleEditPrice = () => {
    //     setEditPriceState(!editPriceState);
    //     if (priceState !== 0) {
    //         fetch(`/api/items/${id}`, {
    //             method: "PATCH",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 price: priceState,
    //                 id: item.id,
    //             }),
    //         })
    //         .then((resp) => resp.json())
    //         .then((data) => setInitialPriceValue(data.price));
    //     }
    // };


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
        handleCartClick();
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


    // let handleCartClick = () => {
    //     setEditCartState(!editCartState);
    //     fetch(`/api/edit_cart/${id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             id: item.id,
    //         }),
    //     })
    //     .then((resp) => resp.json())
    //     .then(data => setInitialCartValue(data.inCartIcon));
    //     // setIsAddedCart(isAddedCart => (!isAddedCart))
    // }

    const handleCartClick = useCallback(item => {
        setCartItems(cartItems => {
            const index = cartItems.findIndex(currentItem => currentItem.id === item.id);
            const updatedCart = [...cartItems];
            if (index >= 0) {
                // Be sure not to mutate the item object within in the cart state:
                const updatedItem = { ...updatedCart[index] };
                updatedItem.quantity += item.quantity;
                updatedCart[index] = updatedItem;
            }
            else updatedCart.push(item);
            return updatedCart;
        });
    }, [setCartItems]);


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


    return (
        <Card className="oneItemCard" theme={theme} 
        sx={{ border: "1px solid black" }}
        >
            {/* <Carousel
                component = "img"
                alt="random" 
                src={images_url}>
                <ArrowBackIosIcon style={{ position: 'absolute', top: '50%', left: 20, transform: 'translate(-50%,-50%)' }}>Back</ArrowBackIosIcon>
                <ArrowForwardIosIcon style={{ position: 'absolute', top: '50%', right: 20, transform: 'translate(-50%,-50%)' }}>Next</ArrowForwardIosIcon>               
            </Carousel> */}
            <div sx={{height: '300'}}>
                <CardMedia
                    className="itemImage"
                    component="img"
                    sx={{ maxHeight: "300" }}
                    image={images_url}
                />
            </div>
            <CardContent className="card-details" color="primary" sx={{ flexGrow: 1 }}>
            {user.id === item.user_id ?
                (<Typography sx={{ fontSize: "14px", color: "black", fontWeight: "bold", mb: 1.3 }}>
                    YOU ARE SELLING THIS ITEM
                </Typography>) :
                (<Typography sx={{ fontSize: "14px", color: brown[400], fontWeight: "bold", mb: 1.3 }}>
                    Sold by: {sold_by}
                </Typography>)
                }                
                <Typography color="secondary.darkText" fontSize="1.4em" gutterBottom>
                    {/* {user.id === item.user_id ?
                        <Fab className="fab-edit" float="right" alignItem="right" size="small" aria-label="edit">
                            <EditIcon onClick={handleEditItemName} 
                            // sx={{ color: editNameState ? "green" : null }} 
                            />
                        </Fab>
                        : null} */}
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
                <div className='form-box' style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
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
                                <div style={{marginBottom: "5px", marginTop: "5px"}}>
                                    <span>${initialPriceValue}</span>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* {user.id === item.user_id ?
                        <Fab className="fab-edit" size="small" float="right" aria-label="edit" align-item="right" justify-item="right">
                            <EditIcon onClick={handleEditPrice} sx={{ float:"right", alignItem: "right", justifyItem: "right", color: editPriceState ? "green" : null }} />
                        </Fab>
                    : null} */}
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent:"space-between" }}>
                    {editDescriptionState ? (
                        <div>
                            <textarea
                                className="form-control descriptionInfo"
                                defaultValue={initialDescriptionValue}
                                onChange={(e) => setDescriptionState(e.target.value)}
                            />
                        </div>
                    ) : (
                        <div className="descriptionInfoEdit">
                            <span>{initialDescriptionValue}</span>
                        </div>
                    )}
                    {/* {user.id === item.user_id ?
                        <Fab className="fab-edit" size="small" float="right" aria-label="edit" align-item="right" justify-item="right">
                            <EditIcon onClick={handleEditDescription} sx={{ color: editDescriptionState ? "green" : null }} />
                        </Fab>
                        : null} */}
                </div>
                </CardContent>
                <CardActions className="bottom-card-details" theme={theme} 
            // sx={{bgcolor: orange[100]}}
                >
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
                        onClick={handleOpen}
                    >
                        <DeleteIcon />
                    </IconButton> : null}
                {open ? <ConfirmDelete handleClose={handleClose} handleOpen={handleOpen} deleteItemFromList={deleteItemFromList} item={item} open={open} setOpen={setOpen} /> : null}    
                {user.id === item.user_id ?
                    <IconButton aria-label="edit"
                        onClick={handleOpenEdit}
                    >
                        <EditIcon />
                    </IconButton> : null}
                {openEdit ? <EditCard handleOpenEdit={handleOpenEdit} images_url={images_url} handleCloseEdit={handleCloseEdit} openEdit={openEdit} item={item} price={price} user={user} itemname={itemname} setOpenEdit={setOpenEdit} /> : null}    
                {user.id === item.user_id ? null :
                    <IconButton
                        onClick={initialCartValue ? alreadyInCart : renderUserCartItem}
                        sx={{ pointerEvents: initialCartValue ? "none" : null }}
                        defaultValue={initialCartValue}
                    >
                        {initialCartValue ? <ShoppingCartIcon /> : <AddShoppingCartIcon />}
                    </IconButton>
                }
            </CardActions>
        </Card>
    )
}

export default ItemCard;