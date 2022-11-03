import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '65%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pl: 4, pr: 4,
    pt: 6, pb: 6,
};

function ConfirmDelete({ open, item, id, deleteItemFromList, handleClose, handleOpen, setOpen}){

    function handleDelete() {
        console.log(item.id)
        console.log("I was clicked")
        fetch(`/api/items/${item.id}`, {
            method: "DELETE",
        })
        .then((r) => {
            if (r.ok) {
                deleteItemFromList(item.id);
                handleClose();
            }
        })
    }

return (
    <Modal className="modal-container"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box className="modal-content" sx={style}>
            <Typography style={{textAlign:"center", fontWeight: "bold", fontFamily:"monospace", fontSize:"30px"}} className="modal-title1" id="modal-modal-title" variant="h6" component="h2">
                Are You Sure? 
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, width: "70%", letterSpacing:"0.05rem", textAlign:"center", marginLeft:"auto", marginRight: "auto" }}>
                Deleting an item cannot be undone, and anyone with {item.itemname} in their carts will no longer be able purchase it.  
            </Typography>
            <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", marginTop:"12px"}}>
                <Button variant="secondary" id="modal1" onClick={handleClose}>
                    CANCEL
                </Button>
                <Button variant="primary" className="modal-btn" id="modal2"
                onClick={handleDelete}>
                    CONFIRM AND DELETE ITEM
                </Button>
            </div>
        </Box>
    </Modal>
    );
}

export default ConfirmDelete;