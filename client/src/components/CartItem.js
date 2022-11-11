import React, {useState} from "react"
import Alert from '@mui/material/Alert';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';

function CartItem({ cartItem, itemname, size, image, price, material, change, setChange, setCartValue, deleteCartItem, id }){
    const [wasPressed, setWasPressed] = useState(false)

    function removeFromCart(){
        fetch(`/api/removefromcart/${id}`, {
            method: "DELETE"
        })
        .then((r) => {
            if (r.ok) {
                setWasPressed(true);
        }})
        setInterval(deleteCartItem, 1000, id);
        setWasPressed(false);
    };

    return(
        <div style={{ marginLeft: "10em"}} className="container px-4 py-5 mx-auto">
            <div style={{ width:"100%", display: "flex", flexDirection: "row" }} className="row d-flex justify-content-center">
                <div className="col-5" style={{width: "50%"}}>
                    <h3 className="mob-text">{itemname}</h3>
                    <div className="book">
                        <img src={image} alt={image} className="bookimg" />
                    </div>
                </div>
                <div className="row text-right" style={{ width: "50%", display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                    <div className="col4"
                    style={{ width: "100%" }}
                    >
                        <h5>{size}</h5>
                    </div>
                    <div className="col4"
                    style={{ width: "100%" }}
                    >
                        <h5>{material}</h5>
                    </div>
                    <div className="col4"
                    style={{ width: "100%" }}
                    >
                        <CardActions>
                            <IconButton id="deleteBtn" className="mob-text" onClick={removeFromCart}>
                                <DeleteIcon />
                            </IconButton>
                        </CardActions>
                        {wasPressed ? <Alert severity="success" color="success" variant='outlined'>Item removed</Alert> : null}
                    </div>
                    <div className="col4"
                    style={{ width: "100%" }}
                    >
                        <h5>${price}</h5>
                    </div>
                </div>
                </div>
            </div>   
    )
}

export default CartItem;
