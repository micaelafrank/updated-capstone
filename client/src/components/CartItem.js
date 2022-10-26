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
        <div style={{ marginLeft: "10em"}} className="container px-4 py-5 mx-auto">
            <div style={{ width:"100%", display: "flex", flexDirection: "row" }} className="row d-flex justify-content-center">
                <div className="col-5" style={{width: "50%"}}>
                    <h3 className="mob-text">{cartItem.itemname}</h3>
                    <div className="book">
                        <img src={cartItem.images_url} alt="blueberry-icecream-recipe1-1652730148.jpg" className="book-img" />
                    </div>
                </div>
                <div className="row text-right" style={{ width: "50%", float: "right", display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                    <div className="col-4"
                    style={{ width: "100%" }}
                    >
                        <h5>{cartItem.size}</h5>
                    </div>
                    <div className="col-4"
                    style={{ width: "100%" }}
                    >
                        <h5>{cartItem.material}</h5>
                    </div>
                    <div className="col-4"
                    style={{ width: "100%" }}
                    >
                        <CardActions>
                            <IconButton className="mob-text" onClick={removeFromCart}>
                                <DeleteIcon />
                            </IconButton>
                        </CardActions>
                        {wasClicked ? <Alert key={'success'} variant={'success'}>Item removed</Alert> : null}
                    </div>
                    <div className="col-4"
                    style={{ width: "100%" }}
                    >
                        <h5>{cartItem.price}</h5>
                    </div>
                </div>
                </div>
            </div>   
    )
}

export default CartItem;
