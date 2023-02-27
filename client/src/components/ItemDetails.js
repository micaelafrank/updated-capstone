import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import FormHelperText from '@mui/material/FormHelperText'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { brown, green, deepOrange, lightGreen } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '80%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pl: 4, pr: 4,
    pt: 4, pb: 6,
};

function ItemDetails({ user, initialHeartValue, items, isSaved, handleFillHeart, handleUndoHeart, FavoriteIcon, renderUserCartItem, inCartIcon, FavoriteBorderIcon, setItems, moreInfo, handleCloseMoreInfo, item, id, itemname, price, color, material, condition, size, description, images_url, ShoppingCartIcon, AddShoppingCartIcon, wasClicked, alreadyInCart }) {
    const [itemDetail, setItemDetail] = useState({});
    const navigate = useNavigate();
    // const { sold_byDetail, itemnameDetail, idDetail, priceDetail, colorDetail, materialDetail, sizeDetail, descriptionDetail } = itemDetail;
    const darkestBrown = brown['A700']

    useEffect(() => {
        fetch(`/api/items/${item.itemname}${item.id}`)
            .then((r) => r.json())
            .then(data => setItemDetail(data))
            // .then(data => setItemDetail(data))
    }, [])
    console.log("my one item: ", itemDetail)

    return (
        <Modal className="detail-modal-container"
            open={moreInfo}
            onClose={handleCloseMoreInfo}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className="detail-modal-content" sx={style}>
                <Typography style={{ paddingTop: "0", textAlign: "center", fontFamily: "monospace", fontSize: "30px", marginTop: "10px", textShadow: "1px 1px #c98d6d", color: "black", marginBottom: "0" }} className="modal-title1" id="modal-modal-title" variant="h6" component="h2"> 
                    {itemname}
                </Typography>
                <Typography style={{ lineHeight: "1.5rem" }} textAlign="center" fontSize="1.2em" gutterBottom>
                    {/* <div style={{ display: "flex", flexDirection: "row", marginLeft: "0", marginRight: "0" }}> */}
                    <div
                        style={{ color:"black", alignItems: "center", fontSize:"15px", textAlign: "center" }}>
                        SOLD BY: <span style={{ fontSize:"15px", letterSpacing:"1.4px", fontFamily:"monospace", fontWeight:"bold" }}>{item.sold_by}</span>
                    </div>
                </Typography>
                <p style={{ margin: "0", padding: "0", color: "gray", textAlign: "center" }}><i>{material}, {color}</i></p>
                <div style={{ justifyContent: 'center', display: 'flex', position: 'relative', marginLeft: '0', marginRight: '0', marginBottom:"20px", marginTop:"10px", alignItems: 'center' }}>
                    <img
                        // onClick={addMultImages}
                        className="detailItemImage"
                        component="img"
                        src={images_url} alt="Image of sale item"
                        // style={{ width: '300px', objectFit:"cover", objectPosition:"center", marginTop:"20px", height: 'auto', maxHeight: "300px", justifyContent: 'center', alignItems: 'center' }}
                    />
                </div>
                {/* LINK TO PROFILE OF SELLER AND ONLY SHOW WHAT THEY ARE SELLING IF THAT USER IS NOT THE LOGGED IN USER. DON'T SHOW PROFILE DETAILS. */}
                <div className='modal-item-description-box' style={{ marginLeft: "8%", marginRight: "8%", marginTop:"25px", display: "flex", height:"auto", flexDirection: "row", justifyContent: "start", alignItems: "start", textAlign: "left" }}>
                    {/* <div style={{display:"flex", flexDirection:"row", height:"500px", justifyContent:"space-between", alignItems:"center", textAlign:"left"}}> */}
                        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"start", width:"80%", flexDirection: "column", margin:"0", paddingTop:"0" }}>
                            <p style={{ marginBottom: "10px" }}><span style={{ fontFamily: "monospace", fontSize: "16px", textShadow: "1px 1px #c98d6d" }}>price:</span> ${price}</p>
                            <p style={{ marginBottom: "10px" }}><span style={{ fontFamily: "monospace", fontSize: "16px", textShadow: "1px 1px #c98d6d" }}>size:</span> {size}</p>
                            <p style={{ marginBottom: "10px" }}><span style={{ fontFamily: "monospace", fontSize: "16px", textShadow: "1px 1px #c98d6d" }}>description:</span> {description}</p>
                        </div>
                        {user.id === item.user_id ? null :
                        <div style={{ alignItems: "right", display:"flex", marginTop:"5px", width:"20%", flexDirection: "row", marginLeft: "auto", paddingBottom:"10px", }}>
                            <IconButton onClick={initialHeartValue ? handleUndoHeart : handleFillHeart}>
                                {isSaved ? <FavoriteIcon sx={{ color: deepOrange[400] }} fontSize="large" /> : <FavoriteBorderIcon sx={{ color: deepOrange[400] }} fontSize="large" />}
                            </IconButton>
                            <IconButton
                                onClick={wasClicked ? alreadyInCart : renderUserCartItem}
                            // defaultValue={initialCartValue}
                            >
                                {wasClicked ? <ShoppingCartIcon fontSize="large" sx={{
                                    color:"black"}} /> : <AddShoppingCartIcon sx={{color: "black" }} fontSize="large" />}
                            </IconButton>
                        </div>}
                    </div>
                {/* </div> */}
                <div className="detail-modal-button-container" style={{ display: "flex", flexDirection: "row", alignItems: "right", justifyContent: "right" }}>
                    <Button style={{marginTop:"25px", fontFamily:"monospace"}} variant="secondary" id="detailModal1" onClick={handleCloseMoreInfo}>
                        close
                    </Button>
                </div>
            </Box>
        </Modal>
    );
}

export default ItemDetails;