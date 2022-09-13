import React, {useState} from "react"
import Alert from '@mui/material/Alert';

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
        <div class="row d-flex justify-content-center border-top">
            <div class="col-5">
                <div class="row d-flex">
                    <div class="book">
                        <img src={cartItem.images_url} class="book-img" />
                    </div>
                    <div class="my-auto flex-column d-flex pad-left">
                        <h6 class="mob-text">{cartItem.itemname}</h6>
                        <h6 class="mob-text">Size: {cartItem.size}</h6>
                    </div>
                </div>
            </div>
            <div class="my-auto col-7">
                <div class="row text-right">
                    <div class="col-4">
                        <p class="mob-text">{cartItem.category}</p>
                    </div>
                    <div class="col-4">
                        <button class="mob-text" onClick={removeFromCart}>REMOVE ITEM</button>
                    </div>
                    {wasClicked ? <Alert key={'success'} variant={'success'}>Item removed</Alert> : null}
                    <div class="col-4">
                        <h6 class="mob-text">${cartItem.price}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
