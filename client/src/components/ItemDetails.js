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
import { brown } from '@mui/material/colors';


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
    pt: 6, pb: 6,
};

function ItemDetails({ items, setItems, moreInfo, handleCloseMoreInfo, item, id, itemname, price, color, material, condition, size, description, images_url }) {
    const [itemDetail, setItemDetail] = useState({});
    const navigate = useNavigate();

    const darkestBrown = brown['A700']

    useEffect(() => {
        fetch(`/api/items/${item.itemname}${item.id}`)
            .then((r) => r.json())
            .then(data => setItemDetail(data))
            // .then(data => setItemDetail(data))
    }, [])
    console.log("my one item: ", itemDetail)

    return (
        <Modal className="modal-container"
            open={moreInfo}
            onClose={handleCloseMoreInfo}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className="modal-content" sx={style}>
                <Typography style={{ paddingTop: "0", textAlign: "center", fontFamily: "monospace", fontSize: "30px", marginTop: "0", textShadow: "1px 1px #c98d6d", color: "black", marginBottom: "0" }} className="modal-title1" id="modal-modal-title" variant="h6" component="h2"> 
                    {itemname}
                </Typography>
                <Typography style={{ lineHeight: "1.5rem" }} textAlign="center" fontSize="1.2em" gutterBottom>
                    {/* <div style={{ display: "flex", flexDirection: "row", marginLeft: "0", marginRight: "0" }}> */}
                    <div
                        style={{ color:"black", alignItems: "center", fontSize:"15px", textAlign: "center" }}>
                        SOLD BY: <span style={{ fontSize:"15px", letterSpacing:"1.4px", fontFamily:"monospace", fontWeight:"bold" }}>{item.sold_by}</span>
                    </div>
                </Typography>

                <div style={{ height: '300px', width: 'auto', justifyContent: 'center', display: 'flex', position: 'relative', marginLeft: '0', marginRight: '0', alignItems: 'center' }}>
                    <img
                        // onClick={addMultImages}
                        className="itemImage"
                        component="img"
                        src={images_url} alt="Image of sale item"
                        style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}
                    />
                </div>
                {/* LINK TO PROFILE OF SELLER AND ONLY SHOW WHAT THEY ARE SELLING IF THAT USER IS NOT THE LOGGED IN USER. DON'T SHOW PROFILE DETAILS. */}
                <div className='modal-item-description-box'>
                    <Typography style={{ lineHeight: "3rem" }} textAlign="center" color="secondary.darkText" fontSize="1.2em" marginTop="5px" gutterBottom>
                                <div
                                    style={{ alignItems: "left", textAlign: "left" }}>
                                    <span><span style={{ fontFamily: "monospace", fontSize: "14px" }}>PRICE:</span> ${price}</span>
                                </div>
                            {/* <Fab className="fab-edit" size="small" aria-label="edit">
                            <EditIcon onClick={handleEditPrice} />
                        </Fab> */}
                        {/* </div> */}
                    </Typography>
                    <Typography style={{ lineHeight: "3rem" }} textAlign="center" color="secondary.darkText" fontSize=".95em" marginTop="12px" gutterBottom>
                        {/* <div style={{ display: "flex", alignItems: "center", flexDirection: "row", marginLeft: "0", marginRight: "0" }}> */}
                                <div
                                    style={{ lineHeight: "1.4", marginLeft: "auto", marginRight: "auto", alignItems: "left", textAlign: "left" }}>
                                    <span style={{}}><span style={{ fontFamily: "monospace", fontSize: "14px" }}>DESCRIPTION:</span> {description}</span>
                                </div>
                        {/* </div> */}
                    </Typography>
                </div>
                <div className="modal-button-container" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <Button style={{fontFamily:"monospace"}} variant="secondary" id="modal1" onClick={handleCloseMoreInfo}>
                        close
                    </Button>
                </div>
            </Box>
        </Modal>
    );
}

export default ItemDetails;