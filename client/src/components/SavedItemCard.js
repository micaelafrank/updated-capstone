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


function SavedItemCard({ date, deleteItemFromList, inCartIcon, item, deleteLike, clickedHeart, setChange, change, user, itemname, items, setItems, id, color, price, description, images_url, material, condition, size }) {
    const [priceState, setPriceState] = useState(price);
    const [editPriceState, setEditPriceState] = useState(false);
    const [initialPriceValue, setInitialPriceValue] = useState(price);
    const [itemNameState, setItemNameState] = useState("");
    const [editNameState, setEditNameState] = useState(false);
    const [initialItemNameValue, setInitialItemNameValue] = useState(itemname);
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
    const handleCloseEdit = () => {
        (setChange(!change))
        setOpenEdit(false);
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
        <Card className="savedItemCard" theme={theme}
            sx={{ border: "1px solid black" }}
        >
            {/* <Carousel
                component = "img"
                alt="random" 
                src={images_url}>
                <ArrowBackIosIcon style={{ position: 'absolute', top: '50%', left: 20, transform: 'translate(-50%,-50%)' }}>Back</ArrowBackIosIcon>
                <ArrowForwardIosIcon style={{ position: 'absolute', top: '50%', right: 20, transform: 'translate(-50%,-50%)' }}>Next</ArrowForwardIosIcon>               
            </Carousel> */}
            <div sx={{ height: '200' }}>
                <CardMedia
                    className="profItemImage"
                    component="img"
                    sx={{ maxHeight: "200" }}
                    image={images_url}
                />
            </div>
            {/* <Typography sx={{ lineHeight: "1", fontSize: "1.2em", paddingLeft: "12px", paddingRight: "16px", paddingTop: "10px", }} color="secondary.darkText" gutterBottom> */}
            <p style={{ marginLeft: "10px", lineHeight: "1", marginTop: "0", marginBottom: "0", fontSize: "18px", paddingRight: "12px", justifyContent: "left", alignItems: "left", paddingTop: "15px" }}>{itemname}</p>
            <p style={{ marginLeft: "10px", marginTop: "0", marginBottom: "0", lineHeight: "1", fontSize: "12px", paddingRight: "12px", justifyContent: "left", paddingTop: "10px" }}>ON SALE SINCE: <span style={{ fontWeight: "bold" }}>{dateItem}</span></p>
            <CardActions style={{ marginTop: "8px", alignItems:"center" }} className="prof-bottom-card-details" theme={theme}>
                <IconButton aria-label="delete" style={{ alignItems: "center", paddingTop: "0", marginTop: "0", marginBottom:"1"}} onClick={handleOpen}>
                    <FavoriteIcon/>               
                </IconButton>
                {open ? <ConfirmDelete handleClose={handleClose} handleOpen={handleOpen} deleteItemFromList={deleteItemFromList} item={item} open={open} setOpen={setOpen} /> : null}
                <Button style={{alignItems:"center", color: "black", marginBottom:"5px"}}>VIEW DETAILS</Button>
                {/* <IconButton aria-label="edit" style={{ alignItems: "center", paddingTop: "0", marginTop: "0" }}
                    onClick={handleOpenEdit}
                >
                    <span style={{ fontSize: "18px", fontFamily: "monospace", color: "black", marginRight: "3px" }}>EDIT </span> <EditIcon />                    
                </IconButton> */}
                {/* {openEdit ? <EditCard priceState={priceState} setPriceState={setPriceState} initialPriceValue={initialPriceValue} setInitialPriceValue={setInitialPriceValue} editPriceState={editPriceState} setEditPriceState={setEditPriceState} itemNameState={itemNameState} setItemNameState={setItemNameState} editNameState={editNameState} setEditNameState={setEditNameState} initialItemNameValue={initialItemNameValue}
                    setInitialItemNameValue={setInitialItemNameValue} descriptionState={descriptionState} setDescriptionState={setDescriptionState} editDescriptionState={editDescriptionState} setEditDescriptionState={setEditDescriptionState} initialDescriptionValue={initialDescriptionValue} setInitialDescriptionValue={setInitialDescriptionValue} change={change} setChange={setChange} handleOpenEdit={handleOpenEdit} images_url={images_url} handleCloseEdit={handleCloseEdit} openEdit={openEdit} item={item} price={price} user={user} itemname={itemname} setOpenEdit={setOpenEdit} /> : null} */}
            </CardActions>
        </Card>
    )
}

export default SavedItemCard;