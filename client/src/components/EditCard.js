import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import FormHelperText from '@mui/material/FormHelperText'
import { Checkbox } from '@mui/material';
import DoneAllIcon from '@mui/icons-material/DoneAll';

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

    console.table(item)
    console.log(item.images_url[0])
    let handleEditDescription = () => {
        setEditDescriptionState(!editDescriptionState);
        if (descriptionState !== "") {
            fetch(`/api/items/edit/${item.id}`, {
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
            fetch(`/api/items/edit/${item.id}`, {
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
            fetch(`/api/items/edit/${item.id}`, {
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
                <Typography style={{ paddingTop: "0", textAlign: "center", fontFamily: "monospace", fontSize: "30px" }} className="modal-title1" id="modal-modal-title" variant="h6" component="h2">
                    Edit Item Information
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 1, mb: 1, width: "70%", letterSpacing: "0.05rem", textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
                    Click on the edit button pertaining to the item detail you want to change
                </Typography>
                <div style={{height:'300px', width:'auto', justifyContent:'center', display:'flex', position: 'relative', marginLeft: '0', marginRight: '0', alignItems: 'center'}}>
                    <img
                        // onClick={addMultImages}
                        className="itemImage"
                        component="img"
                        src={images_url[0]} alt="Image of sale item"
                        style={{height: '100%', justifyContent:'center', alignItems:'center'}}
                    />
                </div>
                <div className='modal-item-description-box'>
                <Typography style={{lineHeight:"3rem"}} textAlign="center" color="secondary.darkText" fontSize="1.2em" marginTop="5px" gutterBottom>
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
                            <FormHelperText sx={{mb: 2}} id='my-helper-text'>
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
                        <Fab style={{ lineHeight: "1" }} className="fab-edit"
                            size="small" aria-label="edit"
                        >
                        {editNameState ?
                            <DoneAllIcon
                            style={{ color: "primary.main" }}
                            onClick={handleEditItemName}
                            /> :
                            <EditIcon
                            onClick={handleEditItemName} />}
                        </Fab>
                        {/* <Fab className="fab-edit" size="small" aria-label="edit">
                            <EditIcon onClick={handleEditItemName} />
                        </Fab> */}
                    </div>
                </Typography>
                <Typography style={{ lineHeight: "3rem" }} textAlign="center" color="secondary.darkText" fontSize="1.2em" marginTop="5px" gutterBottom>
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
                                    sx={{mb: 2}}
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
                        <Fab style={{ lineHeight: "1" }} className="fab-edit"
                        size="small" aria-label="edit"
                        >
                        {editPriceState ?
                            <DoneAllIcon
                                style={{ color: "primary.main" }}
                                onClick={handleEditPrice}
                            /> :
                            <EditIcon
                                onClick={handleEditPrice} />}
                        </Fab>
                        {/* <Fab className="fab-edit" size="small" aria-label="edit">
                            <EditIcon onClick={handleEditPrice} />
                        </Fab> */}
                    </div>
                </Typography>
                <Typography style={{ lineHeight: "3rem" }} textAlign="center" color="secondary.darkText" fontSize=".95em" marginTop="12px" gutterBottom>
                        <div style={{ display: "flex", alignItems:"center", flexDirection: "row", marginLeft: "0", marginRight: "0" }}>
                            {editDescriptionState ? (
                            <div id="divDesc" className='field1' style={{marginLeft: "auto", marginRight: "auto", justifyContent:"center", alignItems:"center"}}>
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
                                style={{lineHeight: "1.4", marginLeft: "auto", marginRight: "auto", alignItems: "center", textAlign: "center" }}>
                                    <span style={{}}><span style={{ fontFamily: "monospace", fontSize: "14px" }}>DESCRIPTION:<br></br></span> {initialDescriptionValue}</span>
                            </div>
                            )}
                            <Fab style={{ lineHeight: "1" }} className="fab-edit"                        
                            size="small" aria-label="edit"
                            >
                                {editDescriptionState ?
                                <DoneAllIcon
                                style={{color: "primary.main"}}
                                onClick={handleEditDescription}
                             /> :
                                <EditIcon
                                onClick={handleEditDescription} /> }
                            </Fab>
                        </div>
                    </Typography>
                </div>
                <div className="modal-button-container" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <Button variant="secondary" id="modal1" onClick={handleCloseEdit}>
                        CANCEL
                    </Button>
                    <Button style={ editPriceState || editNameState || editDescriptionState ? {pointerEvents: "none", opacity: ".5"} : null }
                    variant="primary" className="modal-btn" id="modal2"
                    onClick={handleCloseEdit}>
                        DONE
                    </Button>
                </div>
            </Box>
        </Modal>
    );
}

export default EditCard;