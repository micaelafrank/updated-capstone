import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
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

function EditCard({ openEdit, item, id, handleCloseEdit, handleOpenEdit, setOpenEdit, price, user, itemname, description }) {
    const [priceState, setPriceState] = useState(item.price);
    const [editPriceState, setEditPriceState] = useState(false);
    const [initialPriceValue, setInitialPriceValue] = useState(item.price);
    const [itemNameState, setItemNameState] = useState("");
    const [editNameState, setEditNameState] = useState(false);
    const [initialItemNameValue, setInitialItemNameValue] = useState(item.itemname);
    const [descriptionState, setDescriptionState] = useState("");
    const [editDescriptionState, setEditDescriptionState] = useState(false);
    const [initialDescriptionValue, setInitialDescriptionValue] = useState(item.description);

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
                <Typography style={{ textAlign: "center", fontWeight: "bold", fontFamily: "monospace", fontSize: "30px" }} className="modal-title1" id="modal-modal-title" variant="h6" component="h2">
                    Edit Information
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2, mb: 1.5, width: "70%", letterSpacing: "0.05rem", textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
                    Click on the edit button pertaining to the item detail you want to change 
                </Typography>
                <Typography textAlign="center" color="secondary.darkText" fontSize="1.4em" gutterBottom>
                        <div style={{display:"flex", flexDirection:"row" }}>
                        {editNameState ? (
                        <div className='field1' style={{justifyContent:"center", alignItems:"center", textAlign:"center" }}>
                                <input
                                    defaultValue={initialItemNameValue}
                                    className="editItemInput" 
                                    id="my-input"
                                    aria-describedby='my-helper-text'
                                    onChange={(e) => setItemNameState(e.target.value)}
                                />
                                <FormHelperText
                                    id='my-helper-text'
                                >
                                    Edit your item name
                                </FormHelperText>
                            </div>
                    ) : (
                        <div 
                        style={{ marginLeft: "auto", marginRight: "auto", alignItems: "center", textAlign: "center" }}
                        >
                            <span>{initialItemNameValue}</span>
                        </div>
                    )}
                        <Fab className="fab-edit" size="small" aria-label="edit">
                            <EditIcon onClick={handleEditItemName} />
                        </Fab>
                    </div>
                </Typography>
                <Typography style={{ marginTop: "5px", display:"flex", flexDirection:"row"}} textAlign="center" alignItems="center" justifyContent="center" color="secondary.darkText" fontSize="1em" gutterBottom>
                    <Fab style={{ textAlign: "center", marginTop: "5px", alignItems:"center"}} className="fab-edit" size="small" aria-label="edit">
                            <EditIcon onClick={handleEditPrice}/>
                        </Fab>
                        <div style={{ marginLeft:"auto", marginRight:"auto", display: "flex", alignItems: "center", justifyContent:"center" }}>
                            {/* <div style={{ display: "flex", flexDirection:"row", alignItems: "center" }}> */}
                                {/* <SellOutlinedIcon style={{ paddingRight: "4px" }} /> */}
                                <div>
                                    {editPriceState ? (
                                    <div style={{ marginLeft: "auto", flexDirection:"row", marginRight:"auto", justifyContent:"center", alignItems:"center", textAlign:"center" }}>
                                        <p style={{fontSize:"17px", textAlign:"center", alignItems:"center"}}>
                                        Price:&nbsp;&nbsp;
                                        </p>
                                            <input
                                                id="my-input"
                                                aria-describedby='my-helper-text'
                                                style={{ alignItems: "center", textAlign:"center", fontSize: "14px" }}
                                                defaultValue={initialPriceValue}
                                                onChange={(e) => setPriceState(e.target.value)}
                                            />
                                            <FormHelperText
                                                id='my-helper-text'
                                            >
                                                Edit item price
                                            </FormHelperText>
                                        </div>
                                    ) : (
                                        <div>
                                            <SellOutlinedIcon style={{ paddingRight: "4px" }} />
                                            <span>${initialPriceValue}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        {/* </div> */}
                </Typography>


{/* 
                <div style={{ display: "flex", flexDirection:"row" }}>
                    <div style={{ paddingRight: "14px" }}>
                        {editPriceState ? (
                            <div style={{ marginLeft: "auto", marginRight:"auto", justifyContent:"center", alignItems:"center", textAlign:"center" }}>
                                <SellOutlinedIcon style={{ paddingRight: "4px" }} />
                                <p style={{fontSize:"17px", textAlign:"center", alignItems:"center"}}>
                                    Price:&nbsp;&nbsp;
                                </p>
                                <div style={{ display: "flex", margin:"1", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                    <input
                                    defaultValue={initialPriceValue}
                                    onChange={(e) => setPriceState(e.target.value)}
                                    />
                                    <FormHelperText>
                                        Edit item price
                                    </FormHelperText>
                                </div>
                            </div>
                    ) : (
                        <div style={{ display:"flex", flexDirection:"row", marginBottom: "5px", marginTop: "5px" }}>
                            <SellOutlinedIcon style={{ paddingRight: "4px" }} />
                            <span>${initialPriceValue}</span>
                        </div>
                    )}
                    </div>
                </div> */}
                {user.id === item.user_id ?
                    <Fab className="fab-edit" size="small" float="right" aria-label="edit" align-item="right" justify-item="right">
                        <EditIcon onClick={handleEditPrice} sx={{ float: "right", alignItem: "right", justifyItem: "right", color: editPriceState ? "green" : null }} />
                    </Fab>
                    : null}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                {editDescriptionState ? (
                    <div>
                        <textarea
                            className="form-control descriptionInfo"
                            defaultValue={initialDescriptionValue}
                            onChange={(e) => setDescriptionState(e.target.value)}
                        />
                        <FormHelperText>
                            Edit your item name
                        </FormHelperText>
                    </div>
                     ) : (
                    <div className="descriptionInfoEdit">
                        <span>{initialDescriptionValue}</span>
                    </div>
                    )}
                    {user.id === item.user_id ?
                    <Fab className="fab-edit" size="small" float="right" aria-label="edit" align-item="right" justify-item="right">
                        <EditIcon onClick={handleEditDescription} sx={{ color: editDescriptionState ? "green" : null }} />
                    </Fab>
                    : null}
                </div>

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