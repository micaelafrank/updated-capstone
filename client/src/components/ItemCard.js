import * as React from 'react';
import { useState, useEffect } from 'react';
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
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function ItemCard({ sold_by, item, deleteLike, images, mySavedItems, setMySavedItems, deleteItem, setChange, items, setItems, handleCartClick, change, user, itemname, selectedImages, isForSale, id, color, price, description, images_url, material, condition, size }) {
    const [inCart, setInCart] = useState(false)
    const [isFavorite, setFavorite] = useState(false)
    const [details, setDetails] = useState(false)
    const [wasClicked, setWasClicked] = useState(false)
    const [wasHearted, setWasHearted] = useState(false)
    const [open, setOpen] = useState(false);
    const [priceState, setPriceState] = useState(price);
    const [editPriceState, setEditPriceState] = useState(false);
    const [initialPriceValue, setInitialPriceValue] = useState(price);
    const [itemNameState, setItemNameState] = useState("");
    const [editNameState, setEditNameState] = useState(false);
    const [initialItemNameValue, setInitialItemNameValue] = useState(itemname);
    const [descriptionState, setDescriptionState] = useState("");
    const [editDescriptionState, setEditDescriptionState] = useState(false);
    const [initialDescriptionValue, setInitialDescriptionValue] = useState(description);


    function addToFavorites(){
        console.log(user)
        const newFavorite = {
            user_likes_container_id: user.user_likes_container.id,
            item_id: item.id,
        }
        console.log(newFavorite)
        // const cartItem = item
        fetch("/save", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFavorite),
        })
            .then(res => res.json())
            .then(setChange(!change))
            handleFavoriteClick();
    }

    // function deleteLike(id){
    //     const updatedSaves = mySavedItems.filter((item) => item.id !== id);
    //     setMySavedItems(updatedSaves);
    // }

    function removeFavorite(id) {
        id = item.id;
        fetch(`/saved_items/${id}`, {
            method: "DELETE"
        })
            .then((r) => {
                if (r.ok) {
                    handleFavoriteClick();
                    deleteLike(id)
                }
            });
    }

    function handleFavoriteClick() {
        setFavorite(isFavorite => (!isFavorite))
        setWasHearted(wasHearted => (!wasHearted));
    }

    let handleEditDescription = () => {
        setEditDescriptionState(!editDescriptionState);
        if (descriptionState !== "") {
            fetch(`/items/${id}`, {
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
            fetch(`/items/${id}`, {
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
            fetch(`/items/${id}`, {
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

    function handleCartClick() {
        setInCart(inCart => (!inCart))
        setWasClicked(wasClicked => (!wasClicked));
    }

    // function removeSave(id){
    //     const updatedSaves = savedItems.filter((item) => item.id !== id);
    //     setMySavedItems(updatedSaves);
    //     handleFavoriteClick();
    // }

    function handleDelete(id) {
        fetch(`items/${id}`, {
            method: "DELETE",
        })
        .then((res) => res.json())
            .then(data => setItems(items.filter((item) => item.id !== id)))        
    }

    function renderUserCartItem() {
        console.log(user)

        const newItemToAdd = {
            user_cart_id: user.user_cart.id,
            item_id: item.id,
        }
        console.log(newItemToAdd)
        // const cartItem = item
        fetch("/addtocart", {
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
        <Card sx={{border: "1px solid black"}}>
            {/* <Carousel
                component = "img"
                alt="random" 
                src={images_url}>
                <ArrowBackIosIcon style={{ position: 'absolute', top: '50%', left: 20, transform: 'translate(-50%,-50%)' }}>Back</ArrowBackIosIcon>
                <ArrowForwardIosIcon style={{ position: 'absolute', top: '50%', right: 20, transform: 'translate(-50%,-50%)' }}>Next</ArrowForwardIosIcon>               
            </Carousel> */}
            <CardMedia
                component="img"
                maxHeight="300"
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
                <div style={{display: "flex", alignItems: "center"}}>
                    <SellOutlinedIcon style={{ paddingRight: "4px" }} />
                    <p style={{ paddingRight: "14px" }}> 
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
                    </p>
                    {user.id === item.user_id ?
                        <Fab className="fab-edit" size="small" aria-label="edit">
                            <EditIcon onClick={handleEditPrice} sx={{color: editPriceState ? "green" : null}}/>
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
                <Typography sx={{fontSize:"14px", color:"#465C8B", fontWeight:"bold", paddingTop:"10px"}}>
                    Sold by: {sold_by}
                </Typography>
            </CardContent>
            <CardActions>
                {/* <Button size="small">View</Button>
                <Button size="small">Edit</Button> */}
                {user.id === item.user_id ? null :
                <IconButton aria-label="add to favorites">
                        {isFavorite ? <FavoriteIcon onClick={removeFavorite} /> : <FavoriteBorderIcon onClick={addToFavorites}/> }
                </IconButton>
                }
                {/* {user.id === item.user_id ?
                    <IconButton className="cardButtonDelete"
                        onClick={() => {
                            alert('Are you sure you want to delete this item?')
                            handleDelete(item.id);
                        }}>Delete
                    </IconButton> :
                    (<IconButton className={!wasClicked ? "cardButtonAddCart" : "cardButtonInCart"}
                        onClick={renderUserCartItem}
                        variant="primary">
                        Add To Cart
                    </IconButton>)} */}
                {user.id === item.user_id ?
                    <IconButton aria-label="delete"
                        onClick={() => {
                            <Alert severity="warning" variant="outlined"
                                onClick={handleDelete}
                                onClose={() => { }}>Are you sure you want to delete this item? This cannot be undone.
                            </Alert>
                        }}>
                        <DeleteIcon />
                    </IconButton> :
                    <IconButton onClick={wasClicked ? <Alert>"To remove this item, visit your cart"</Alert> : renderUserCartItem} sx={{pointerEvents: wasClicked? "none" : null}} aria-label="add to cart">
                        {inCart ? <ShoppingCartIcon variant="outlined" /> : <AddShoppingCartIcon />}
                    </IconButton>}
                {/* {user.id === item.user_id ?
                    <Fab className="fab-edit" float="right" size="small" aria-label="edit">
                        <EditIcon float="right"/>
                    </Fab>
                    : null} */}
            </CardActions>
        </Card>
)}

export default ItemCard;