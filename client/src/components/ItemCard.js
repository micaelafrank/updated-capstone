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
import { brown, orange } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ConfirmDelete from './ConfirmDelete';
import EditCard from './EditCard';
import Button from '@mui/material/Button';
import ItemDetails from './ItemDetails';
import { useNavigate } from 'react-router-dom';
import DetailedItemCard from './DetailedItemCard';


function ItemCard({ handleHeartIconChange, images, heartSavedItem, getHeartSaves, preview_image_url, myLikedItem, category, userLikes, sold_by, show, addCartItem, deleteItemFromList, cartItems, setCartValue, setCartItems, handleUnlike, addNewFavorite, setFavorites, isFavorite, setIsFavorite, favorites, inCartIcon, item_id, item, deleteLike, clickedHeart, setChange, change, user, itemname, items, setItems, id, color, price, description, checkHearts, images_url, material, condition, size }) {
    const [priceState, setPriceState] = useState(price);
    const [editPriceState, setEditPriceState] = useState(false);
    const [initialPriceValue, setInitialPriceValue] = useState(price);
    const [imageState, setImageState] = useState(images_url);
    const [editImageState, setEditImageState] = useState(false);
    const [initialImageValue, setInitialImageValue] = useState(images_url)
    const [itemNameState, setItemNameState] = useState("");
    const [editNameState, setEditNameState] = useState(false);
    const [initialItemNameValue, setInitialItemNameValue] = useState(itemname);
    const [initialHeartValue, setInitialHeartValue] = useState(clickedHeart);
    // const [editHeartState, setEditHeartState] = useState(false);
    const [initialCartValue, setInitialCartValue] = useState(isFavorite);
    const [editCartState, setEditCartState] = useState(false);
    const [descriptionState, setDescriptionState] = useState("");
    const [editDescriptionState, setEditDescriptionState] = useState(false);
    const [initialDescriptionValue, setInitialDescriptionValue] = useState(description);
    const [isAddedCart, setIsAddedCart] = useState(false);
    const [wasClicked, setWasClicked] = useState(false)
    const [isSaved, setIsSaved] = useState(false);
    const [inCart, setInCart] = useState(false)
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [moreInfo, setMoreInfo] = useState(false);
    const navigate = useNavigate();

    // const [imageNum, setImageNum] = useState(images_url);

    //     const setLikeButtons = () => hearts.filter(heart => {
    //         if (heart === item.id) {
    //             setIsSaved(true);
    //         } else{
    //             setIsSaved(false);
    //     }
    // })
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => {
        (setChange(!change))
        setOpenEdit(false);
    }

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


    function toggleLikedItem() {
        console.log("clicked heart before: ", clickedHeart)
        const fillHeart = {
            clickedHeart: !clickedHeart,
        };

        fetch(`api/items/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(fillHeart),
        })
            .then(res => res.json())
            .then(handleHeartIconChange);
        console.log("clicked heart after: ", clickedHeart)
    }

    function handleMoreInfo() {
        setMoreInfo(true)
    }

    function handleCloseMoreInfo() {
        setMoreInfo(false);
    }

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
            .then(setWasClicked(wasClicked => (!wasClicked)))
            (setChange(!change))
    }


    function handleFillHeart() {
        console.log(user)
        const newFavoriteItem = {
            user_likes_container_id: user.user_likes_container.id,
            item_id: item.id,
        }
        console.log(user)
        console.log(newFavoriteItem)
        fetch(`/api/save-item`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFavoriteItem),
        })
            .then(res => res.json())
            .then(setIsSaved(true))
        // .then(setIsSaved(isSaved => (!isSaved)))
        // setIsFavorite(true);
        setChange(!change);
    }


    function handleUndoHeart() {
        console.log(user);
        console.log(item)
        fetch(`/api/remove-save/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then(data => handleUnlike(data))
        setIsSaved(false)
        // setWasClicked(wasClicked => (!wasClicked));
        // handleUnlike();
        // setIsFavorite(false)
        // deleteFavorite();
        // .then(setIsFavorite(isFavorite => !isFavorite))
    }

    // const handleCartClick = useCallback(item => {
    //     setCartItems(cartItems => {
    //         const index = cartItems.findIndex(currentItem => currentItem.id === item.id);
    //         const updatedCart = [...cartItems];
    //         if (index >= 0) {
    //             // Be sure not to mutate the item object within in the cart state:
    //             const updatedItem = { ...updatedCart[index] };
    //             updatedItem.quantity += item.quantity;
    //             updatedCart[index] = updatedItem;
    //         }
    //         else updatedCart.push(item);
    //         return updatedCart;
    //     });
    // }, [setCartItems]);
    function nextImage() {
        console.log(images_url)
        // if (imageNum == imageNum.length) {
        //     setImageNum(0)
        // }
        // else {
        //     setImageNum(imageNum + 1)
        // };
    }

    function prevImage() {
        // console.log(imageNum)
        // if (imageNum == 0) {
        //     setImageNum(imageNum.length)
        // } else {
        //     setImageNum(imageNum - 1)
        // };
    }

    function setCartValue(deletedItem) {
        setInitialCartValue(deletedItem.inCartIcon);
        setIsAddedCart(isAddedCart => (!isAddedCart))
    }

    return (
        <Card className="oneItemCard" theme={theme}
            sx={{ border: "1px solid black" }}
        >
            <div sx={{ height: '300px' }}>
                <CardMedia
                    className="itemImage"
                    component="img"
                    sx={{ height: "260px" }}
                    image={images_url}
                />
            </div>
            {/* <div sx={{ height: '300' }}>
                <Carousel
                    next={nextImage}
                    prev={prevImage}
                    autoPlay={false} // <-- You probaly want to disable this for our purposes
                    navButtonsAlwaysVisible
                    sx={{ width: "auto" }}
                > 
                <img className="itemImage" style={{ objectPosition: "center", objectFit: "cover" }} src={images_url} />
                </Carousel>
            </div> */}
            <CardContent className="card-details" color="primary" sx={{ flexGrow: 1 }}>
                {user.id === item.user_id ?
                    (<Typography sx={{ fontSize: "13px", color: "black", fontWeight: "bold", mb: .3 }}>
                        YOU ARE SELLING THIS ITEM
                    </Typography>) :
                    (<Typography sx={{ fontSize: "13px", color: brown[400], fontWeight: "bold", mb: .3 }}>
                        SOLD BY: {sold_by}
                    </Typography>)
                }
                <Typography color="secondary.darkText" fontSize="1.4em" gutterBottom>
                    {initialItemNameValue}
                </Typography>
                <div className='form-box' style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <SellOutlinedIcon style={{ paddingRight: "4px" }} />
                        <div style={{ paddingRight: "14px" }}>
                            <div
                            // style={{marginBottom: "5px", marginTop: "5px"}}
                            >
                                <span>${initialPriceValue}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div className="descriptionInfoEdit">
                        <span>SIZE {size}, {material}</span>
                        {/* <span>{initialDescriptionValue}</span> */}
                    </div>
                </div>
            </CardContent>
            <CardActions className="bottom-card-details" theme={theme}>
                {user.id === item.user_id ? null :
                    <IconButton onClick={isSaved ? handleUndoHeart : handleFillHeart}>
                    {/* <IconButton onClick={heartSavedItem ? handleUndoHeart : handleFillHeart}> */}
                        {isSaved ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>}
                {user.id === item.user_id ?
                    <IconButton aria-label="delete" onClick={handleOpen}>
                        <DeleteIcon />
                    </IconButton> : null}
                {open ? <ConfirmDelete handleClose={handleClose} handleOpen={handleOpen} deleteItemFromList={deleteItemFromList} item={item} open={open} setOpen={setOpen} /> : null}
                {user.id === item.user_id ?
                    (<IconButton aria-label="edit"
                        onClick={handleOpenEdit}>
                        <EditIcon />
                    </IconButton>) : null}
                {openEdit ? <EditCard priceState={priceState} setPriceState={setPriceState} initialPriceValue={initialPriceValue} setInitialPriceValue={setInitialPriceValue} editPriceState={editPriceState} setEditPriceState={setEditPriceState} itemNameState={itemNameState} setItemNameState={setItemNameState} editNameState={editNameState} setEditNameState={setEditNameState} initialItemNameValue={initialItemNameValue}
                    setInitialItemNameValue={setInitialItemNameValue} descriptionState={descriptionState} setDescriptionState={setDescriptionState} editDescriptionState={editDescriptionState} setEditDescriptionState={setEditDescriptionState} initialDescriptionValue={initialDescriptionValue} setInitialDescriptionValue={setInitialDescriptionValue} change={change} setChange={setChange} handleOpenEdit={handleOpenEdit}
                    images_url={images_url} handleCloseEdit={handleCloseEdit} setImageState={setImageState} imageState={imageState} initialImageValue={initialImageValue}
                    setInitialImageValue={setInitialImageValue} editImageState={editImageState} setEditImageState={setEditImageState} openEdit={openEdit} item={item} price={price} user={user} itemname={itemname} setOpenEdit={setOpenEdit} /> : null}
                {user.id === item.user_id ? null :
                    <IconButton
                        onClick={wasClicked ? alreadyInCart : renderUserCartItem}
                        sx={{ pointerEvents: wasClicked ? "none" : null }}
                    // defaultValue={initialCartValue}
                    >
                        {wasClicked ? <ShoppingCartIcon /> : <AddShoppingCartIcon />}
                    </IconButton>}
                {/* {moreInfo ? () => navigate(`/buy/${item.id}`) : null} */}
                {moreInfo ? <ItemDetails wasClicked={wasClicked} initialCartValue={initialCartValue} ShoppingCartIcon={ShoppingCartIcon} AddShoppingCartIcon={AddShoppingCartIcon} inCartIcon={inCartIcon} renderUserCartItem={renderUserCartItem}
                    user={user} initialHeartValue={initialHeartValue} isSaved={isSaved} handleUndoHeart={handleUndoHeart} handleFillHeart={handleFillHeart} FavoriteIcon={FavoriteIcon} FavoriteBorderIcon={FavoriteBorderIcon} item_id={item_id} items={items} setItems={setItems} moreInfo={moreInfo} handleMoreInfo={handleMoreInfo} handleCloseMoreInfo={handleCloseMoreInfo} item={item} id={id} itemname={itemname} price={price} color={color} material={material} condition={condition} size={size} description={description} images_url={images_url}
                />
                    : null}
                {user.id === item.user_id ? null :
                    (<Button
                        style={{ fontFamily: "monospace", padding: "6px 15px", alignItems: "center", justifyContent: "center", backgroundColor: brown[500], border: "1px solid white", borderRadius: "4px", color: "white" }}
                        onClick={handleMoreInfo}>
                        more info
                    </Button>)}
                {/* <button onClick={<DetailedItemCard item={item} id={id} />}>Detail card</button> */}
            </CardActions>
        </Card>
    )
}

export default ItemCard;