import * as React from 'react';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; 
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Card from '@mui/material/Card';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function ItemCard({ item, sold_by, setChange, items, setItems, handleCartClick, change, user, itemname, isForSale, id, color, price, description, images_url, material, condition, size }) {
    const [inCart, setInCart] = useState(false)
    const [details, setDetails] = useState(false)
    const [wasClicked, setWasClicked] = useState(false)
    const [open, setOpen] = useState(false);
    const [priceState, setPriceState] = useState(0);
    const [editPriceState, setEditPriceState] = useState(false);
    const [initialPriceValue, setInitialPriceValue] = useState(price);
    const [itemNameState, setItemNameState] = useState("");
    const [editNameState, setEditNameState] = useState(false);
    const [initialItemNameValue, setInitialItemNameValue] = useState(itemname);
    const [descriptionState, setDescriptionState] = useState("");
    const [editDescriptionState, setEditDescriptionState] = useState(false);
    const [initialDescriptionValue, setInitialDescriptionValue] = useState(description);

    let handleEditDescription = (e) => {
        setEditDescriptionState(!editDescriptionState);
        if (e.target.textContent === descriptionState !== "") {
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


    let handleEditItemName = (e) => {
        setEditNameState(!editNameState);
        if (e.target.textContent === itemNameState !== "") {
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

    let handleEditPrice = (e) => {
        setEditPriceState(!editPriceState);
        if (e.target.textContent === priceState !== 0) {
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
        <Alert key={'success'} variant={'success'}>Added to cart</Alert>
    }

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
            <CardMedia
                component="img"
                src={images_url}
                alt="random"
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
                <IconButton aria-label="add to favorites">
                    <FavoriteBorderIcon />
                </IconButton>
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
                    <IconButton onClick={renderUserCartItem} aria-label="add to cart">
                        <AddShoppingCartIcon variant={wasClicked ? "outlined" : "contained"} />
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