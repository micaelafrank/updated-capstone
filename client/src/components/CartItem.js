import React, {useState} from "react"
import Alert from '@mui/material/Alert';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';

function CartItem({ cartItem, deleteItem, id }){
    const [wasClicked, setWasClicked] = useState(false)

    function removeFromCart(){
        fetch(`/api/user_cart_items/${id}`, {
            method: "DELETE"
        })
        .then((r) => {
            if (r.ok) {
                deleteItem(id);
        }})
            setWasClicked(wasClicked => (!wasClicked));
            <Alert key={'success'} variant={'success'}>Item removed</Alert>                
    };

    return(
        <div className="row d-flex justify-content-center border-top">
            <div className="col-5">
                <div className="row d-flex" style={{ paddingLeft: "10em" }}>
                    <div className="book">
                        <img src={cartItem.images_url} className="book-img" />
                    </div>
                    <div className="my-auto flex-column d-flex pad-left" style={{paddingLeft:"1em"}}>
                        <h6 className="mob-text">{cartItem.itemname}</h6>
                        <h6 className="mob-text">Size: {cartItem.size}</h6>
                    </div>
                </div>
            </div>
            <div className="my-auto col-7" style={{ width: "50%", float:"right"}} >
                <div className="row text-right" style={{ display: "flex", flexDirection: "row", paddingLeft: "4em", alignItems:"center", justifyContent:"flex-start" }}>
                    <div className="col-4" style={{width:"33%", paddingLeft:"4em"}}>
                        <p className="mob-text">{cartItem.material}</p>
                    </div>
                    <CardActions style={{ width: "33%", paddingLeft: "4em" }}>
                        <IconButton className="mob-text" onClick={removeFromCart}>
                            <DeleteIcon/>
                        </IconButton>
                    </CardActions>
                    {wasClicked ? <Alert key={'success'} variant={'success'}>Item removed</Alert> : null}
                    <div className="col-4" style={{ width: "33%", paddingLeft: "4em" }}>
                        <h6 className="mob-text">${cartItem.price}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
