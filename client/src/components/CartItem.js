import React, {useState} from "react"
import Alert from '@mui/material/Alert';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';

function CartItem({ cartItem, itemname, size, image, price, material, change, setChange, setCartValue, deleteItem, id }){
    const [wasClicked, setWasClicked] = useState(false)

    function removeFromCart(){
        fetch(`/api/edit_cart/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                inCartIcon: false,
                id: id,
            }),
        })
        .then((resp) => resp.json())
        .then(setCartValue);
        fetch(`/api/removefromcart`, {
            method: "DELETE"
        })
        .then((r) => {
            if (r.ok) {
                setChange(!change);
                deleteItem(id);
        }})
        setWasClicked(wasClicked => (!wasClicked));
        <Alert key={'success'} variant={'success'}>Item removed</Alert>
    };

//     fetch(`items/${id}`, {
//         method: "DELETE",
//     })
//         .then((res) => res.json())
//         .then(data => setItems(items.filter((item) => item.id !== id)))
// }


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
                            <IconButton className="mob-text" onClick={removeFromCart}>
                                <DeleteIcon onClick={removeFromCart} />
                            </IconButton>
                        </CardActions>
                        {wasClicked ? <Alert key={'success'} variant={'success'}>Item removed</Alert> : null}
                    </div>
                    <div className="col4"
                    style={{ width: "100%" }}
                    >
                        <h5>{price}</h5>
                    </div>
                </div>
                </div>
            </div>   
    )
}

export default CartItem;
