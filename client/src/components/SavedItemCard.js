import React, { useState, useCallback, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import Carousel from 'react-material-ui-carousel'
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { darkScrollbar } from '@mui/material';
import { brown, orange } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ConfirmDelete from './ConfirmDelete';
import EditCard from './EditCard';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import ItemDetails from './ItemDetails';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function SavedItemCard({ key, item_id, user_likes_container_id, handleUnlike, user, initialHeartValue, renderUserCartItem, handleUndoHeart, handleFillHeart, date, deleteItemFromList, inCartIcon, item, deleteLike, clickedHeart, setChange, change, itemname, items, setItems, id, color, price, description, images_url, material, condition, size }) {
    const [wasClicked, setWasClicked] = useState(false)
    const [inCart, setInCart] = useState(false)
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [moreInfo, setMoreInfo] = useState(false);
    const [isSaved, setIsSaved] = useState(false)

    console.log("key: ", key)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => {
        (setChange(!change))
        setOpenEdit(false);
    }

    function handleMoreInfo() {
        console.log("more info clicked")
        setMoreInfo(true)
    }

    function handleCloseMoreInfo() {
        setMoreInfo(false);
    }

    function handleUndoHeart() {
        console.log(user);
        console.log(item)
        fetch(`/api/remove-save/${item.id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then(setIsSaved(false))
        setChange(!change);
    }

    function handleFillHeart() {
        console.log("user: ", user)
        const newFavoriteItem = {
            user_likes_container_id: user.id,
            item_id: item_id,
        }
        console.log("user: ", user)
        console.log("newFavoriteItem: ", newFavoriteItem)
        fetch(`/api/save-item`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFavoriteItem),
        })
            .then(res => res.json())
            .then(setIsSaved(true));
        // CHANGE STATE SO THAT IT ADDS THIS ITEM INTO THE SAVED ITEMS ARRAY
        // .then(setIsSaved(isSaved => (!isSaved)))
        // setIsFavorite(true);
        setChange(!change);
    }


    const postedDate = new Date(date);
    const dateItem = postedDate.toDateString();
    console.log(postedDate)

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

    return (
        <Card key={key} className="savedItemCard" theme={theme}
            sx={{ border: "1px solid black", boxShadow:"none", borderRadius: "0" }}
        >
            {/* <Carousel
                component = "img"
                alt="random" 
                src={images_url}>
                <ArrowBackIosIcon style={{ position: 'absolute', top: '50%', left: 20, transform: 'translate(-50%,-50%)' }}>Back</ArrowBackIosIcon>
                <ArrowForwardIosIcon style={{ position: 'absolute', top: '50%', right: 20, transform: 'translate(-50%,-50%)' }}>Next</ArrowForwardIosIcon>               
            </Carousel> */}
            <div sx={{ height: '190' }}>
                <CardMedia
                    className="profItemImage"
                    component="img"
                    sx={{ maxHeight: "190" }}
                    image={images_url}
                />
            </div>
            {/* <Typography sx={{ lineHeight: "1", fontSize: "1.2em", paddingLeft: "12px", paddingRight: "16px", paddingTop: "10px", }} color="secondary.darkText" gutterBottom> */}
            <p style={{ marginLeft: "10px", lineHeight: "1", marginTop: "0", marginBottom: "0", fontSize: "20px", paddingRight: "12px", justifyContent: "left", alignItems: "left", paddingTop: "10px", textTransform:"uppercase" }}>{itemname}</p>
            <p style={{ marginLeft: "10px", marginTop: "0", marginBottom: "0", lineHeight: "1", fontSize: "12px", paddingRight: "12px", justifyContent: "left", paddingTop: "10px" }}>ON SALE SINCE: <span style={{ fontWeight: "bold" }}>{dateItem}</span></p>
            <CardActions style={{ margin:"5px", marginTop:"7px", alignItems:"center", justifyContent:"space-between" }} className="prof-bottom-card-details" theme={theme}>
                {/* <IconButton style={{ alignItems: "center", padding: "0", margin: "0" }} onClick={isSaved ? handleUndoHeart : handleFillHeart}>
                    {isSaved ? <FavoriteIcon style={{ fontSize: "2rem", color: "#C57E8E", stroke: "maroon" }} className="icon-style" /> : <FavoriteBorderIcon className="icon-style" style={{ fontSize: "2rem", color: "#C57E8E", stroke: "maroon" }} />}
                </IconButton> */}
                <IconButton style={{ alignItems: "center", padding: "0", margin: "0"}} onClick={isSaved ? handleUndoHeart : handleFillHeart}>
                    {isSaved ? <FavoriteIcon className="icon-style" style={{ fontSize: "2rem", color: "#C57E8E", stroke: "maroon" }} /> : <FavoriteBorderIcon className="icon-style" style={{ fontSize: "2rem", color: "#C57E8E", stroke: "maroon" }} />}
                </IconButton>
                {open ? <ConfirmDelete handleClose={handleClose} handleOpen={handleOpen} deleteItemFromList={deleteItemFromList} item={item} open={open} setOpen={setOpen} /> : null}
                {/* {moreInfo ? <ItemDetails wasClicked={wasClicked} initialCartValue={initialCartValue} ShoppingCartIcon={ShoppingCartIcon} AddShoppingCartIcon={AddShoppingCartIcon} inCartIcon={inCartIcon}
                user={user} initialHeartValue={initialHeartValue} isSaved={isSaved} FavoriteIcon={FavoriteIcon} FavoriteBorderIcon={FavoriteBorderIcon} item_id={item.item_id} items={items} setItems={setItems} moreInfo={moreInfo} handleMoreInfo={handleMoreInfo} handleCloseMoreInfo={handleCloseMoreInfo} item={item} id={id} itemname={itemname} price={price} color={color} material={material} condition={condition} size={size} description={description} images_url={images_url}
                />
                : null} */}
                <Button style={{alignItems:"center", padding:"0", fontSize:"14px", color: "black", paddingLeft:"10px", paddingRight:"10px", paddingBottom:"2px", paddingTop:"5px", borderRadius:"0", borderBottom:"1px solid black"}} onClick={handleMoreInfo}>VIEW DETAILS</Button>
                {/* <IconButton aria-label="edit" style={{ alignItems: "center", paddingTop: "0", marginTop: "0" }}
                    onClick={handleOpenEdit}
                >
                    <span style={{ fontSize: "18px", fontFamily: "monospace", color: "black", marginRight: "3px" }}>EDIT </span> <EditIcon />                    
                </IconButton> */}
            </CardActions>
        </Card>
    )
}

export default SavedItemCard;