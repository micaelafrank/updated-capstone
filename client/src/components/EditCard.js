import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import FormHelperText from '@mui/material/FormHelperText'


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

function EditCard({ openEdit, item, id, change, setChange, handleCloseEdit, 
    priceState, setPriceState, editPriceState, setEditPriceState, initialPriceValue, setInitialPriceValue,
    itemNameState, setItemNameState, editDescriptionState, editNameState, setEditNameState, initialItemNameValue, setInitialItemNameValue,
    descriptionState, setDescriptionState, setEditDescriptionState, initialDescriptionValue, setInitialDescriptionValue,
    images_url, handleOpenEdit, setOpenEdit, price, user, itemname, description }) {
    // const [priceState, setPriceState] = useState(item.price);
    // const [editPriceState, setEditPriceState] = useState(false);
    // const [initialPriceValue, setInitialPriceValue] = useState(item.price);
    // const [itemNameState, setItemNameState] = useState("");
    // const [editNameState, setEditNameState] = useState(false);
    // const [initialItemNameValue, setInitialItemNameValue] = useState(item.itemname);
    // const [descriptionState, setDescriptionState] = useState("");
    // const [editDescriptionState, setEditDescriptionState] = useState(false);
    // const [initialDescriptionValue, setInitialDescriptionValue] = useState(item.description);

    let handleEditDescription = () => {
        setEditDescriptionState(!editDescriptionState);
        if (descriptionState !== "") {
            fetch(`/api/items/${item.id}`, {
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
            setChange(!change);
        }
    };


    let handleEditItemName = () => {
        setEditNameState(!editNameState);
        if (itemNameState !== "") {
            fetch(`/api/items/${item.id}`, {
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
            setChange(!change);
        }
    };


    let handleEditPrice = () => {
        setEditPriceState(!editPriceState);
        if (priceState !== 0) {
            fetch(`/api/items/${item.id}`, {
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
            setChange(!change);
        }
    };


    return (
        <Modal className="modal-container"
            open={openEdit}
            onClose={handleCloseEdit}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className="modal-content" sx={style}>
                <div 
                    component="img"
                    src={item.images_url}>
                </div>
                <Typography style={{ textAlign: "center", fontFamily: "monospace", fontSize: "30px" }} className="modal-title1" id="modal-modal-title" variant="h6" component="h2">
                    Edit Item Information
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2, mb: 1.5, width: "70%", letterSpacing: "0.05rem", textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
                    Click on the edit button pertaining to the item detail you want to change 
                </Typography>
                <Typography lineHeight="2rem" textAlign="center" color="secondary.darkText" fontSize="1.2em" marginTop="2px" gutterBottom>
                    <div style={{display:"flex", flexDirection:"row", alignItems:"center" }}>
                        {editNameState ? (
                            <div className='field1' style={{ justifyContent: "center", marginLeft: "auto", marginRight: "auto", alignItems:"center", textAlign:"center" }}>
                            <input
                                defaultValue={initialItemNameValue}
                                className="editItemInput" 
                                id="my-input"
                                aria-describedby='my-helper-text'
                                onChange={(e) => setItemNameState(e.target.value)}
                            />
                            <FormHelperText id='my-helper-text'>
                                Edit your item name
                            </FormHelperText>
                        </div>
                        ) : (
                        <div 
                        style={{ marginLeft: "auto", marginRight: "auto", alignItems: "center", textAlign: "center" }}
                        >
                            <span><span style={{ fontFamily: "monospace", fontSize: "14px" }}>ITEM NAME:</span> {initialItemNameValue}</span>
                        </div>
                        )}
                        <Fab className="fab-edit" size="small" aria-label="edit">
                            <EditIcon onClick={handleEditItemName} />
                        </Fab>
                    </div>
                </Typography>
                <Typography lineHeight="2rem" textAlign="center" color="secondary.darkText" fontSize="1.2em" marginTop="5px" gutterBottom>
                    <div style={{ display: "flex", flexDirection:"row", marginLeft:"0", marginRight: "0"}}>
                        {editPriceState ? (
                            <div className='field1' style={{justifyContent: "center", marginLeft:"auto", marginRight:"auto", alignItems: "center", textAlign: "center" }}>
                                {/* <div style={{ alignItems: "center", textAlign: "center" }}> */}
                                    <input
                                        className="editItemInput"
                                        id="my-price-input"
                                        aria-describedby='my-helper-text'
                                        defaultValue={initialPriceValue}
                                        onChange={(e) => setPriceState(e.target.value)}
                                    />
                                    <FormHelperText
                                        id='my-helper-text'
                                    >
                                        Edit item price
                                    </FormHelperText>
                                {/* </div> */}
                            </div>
                        ) : (
                        <div 
                        style={{ marginLeft: "auto", marginRight: "auto", alignItems: "center", textAlign: "center" }}>
                            <span><span style={{ fontFamily: "monospace", fontSize: "14px" }}>PRICE:</span> ${initialPriceValue}</span>
                        </div>
                        )}
                        <Fab className="fab-edit" size="small" aria-label="edit">
                            <EditIcon onClick={handleEditPrice} />
                        </Fab>
                    </div>
                </Typography>
                    <Typography lineHeight="2rem" textAlign="center" color="secondary.darkText" fontSize=".95em" marginTop="2px" gutterBottom>
                        <div style={{ display: "flex", flexDirection: "row", marginLeft: "0", marginRight: "0" }}>
                            {editDescriptionState ? (
                            <div className='field1' style={{marginLeft: "auto", marginRight: "auto", justifyContent:"center", alignItems:"center"}}>
                                <textarea
                                    defaultValue={initialDescriptionValue}
                                    id="my-input"
                                    aria-describedby='my-helper-text'
                                    onChange={(e) => setDescriptionState(e.target.value)}
                                />
                                <FormHelperText id='my-helper-price'>
                                    Edit item description 
                                </FormHelperText>
                            </div>
                        ) : (
                            <div
                                style={{width:"100%", marginLeft: "0", marginRight: "0", alignItems: "center", textAlign: "center" }}>
                                    <span style={{}}><span style={{ fontFamily: "monospace", fontSize: "14px" }}>DESCRIPTION:</span> {initialDescriptionValue}</span>
                            </div>
                        )}
                        <Fab className="fab-edit" size="small" aria-label="edit">
                            <EditIcon onClick={handleEditDescription} />
                        </Fab>
                    </div>
                </Typography>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: "12px" }}>
                    <Button variant="secondary" id="modal1" onClick={handleCloseEdit}>
                        CANCEL
                    </Button>
                    <Button variant="primary" className="modal-btn" id="modal2"
                        onClick={handleCloseEdit}>
                        DONE
                    </Button>
                </div>
            </Box>
        </Modal>
    );
}

export default EditCard;