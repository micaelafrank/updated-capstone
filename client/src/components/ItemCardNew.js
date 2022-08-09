import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCart from '@mui/icons-material/Delete';

function ItemCardNew({ item, sold_by, setChange, items, setItems, handleCartClick, change, user, itemname, isForSale, id, color, price, description, images_url, material, condition, size }) {
    const [inCart, setInCart] = useState(false)
    const [details, setDetails] = useState(false)
    const [wasClicked, setWasClicked] = useState(false)
    const [open, setOpen] = useState(false);

    // console.log(open)
    // const handleModalBtn = (e) => {
    //     console.log(e.target)
    //     setOpen(true)
    //     console.log(open)
    // }

    function handleCartClick() {
        setInCart(inCart => (!inCart))
        setWasClicked(wasClicked => (!wasClicked));
        <Alert key={'success'} variant={'success'}>Added to cart</Alert>
    }

    function handleDelete(id) {
        fetch(`items/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then(data => setItems(items.filter((item) => item.id !== id)))
    }

    // code for editing an item: 
    // *************************
    // function editItem(id){
    //    fetch(`items/${id}`, {
    //     method: "PATCH",
    //     headers: {"Content-Type":"application/json"}
    //     ,
    //     body: JSON.stringify(item)

    //    }) 
    // }


    function renderUserCartItem() {
        console.log(user)

        const newItemToAdd = {
            user_cart_id: user.user_cart.id,
            item_id: item.id,
        }
        console.log(newItemToAdd)
        // const cartItem = item
        fetch("/addtocart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newItemToAdd),
        })
            .then(res => res.json())
            .then(setChange(!change))
        handleCartClick();
    }

    return (
        <>
            <div className="card-container" style={{ width: '25rem', maxHeight: "50rem" }}>
                <div style={{ height: "420px" }}>
                    <img variant="top" src={item.images_url} style={{ height: "auto", maxHeight: "420px", overflow: "hidden" }} />
                </div>
                <p>
                    <h1 className="card-title">{item.itemname}</h1>
                    <p className="card-description">{description}</p>
                    <p className="card-description">Seller: <span style={{ color: "blue" }}>{sold_by}</span></p>
                    <div className="item-card-flex-price-buybutton">
                        <div className="item-price">
                            <p>Price: ${price}</p>
                        </div>
                    </div>
                    {user.id === item.user_id ?
                        <button 
                            variant="outlined" startIcon={<DeleteIcon />}
                            onClick={() => {
                            <Alert severity="warning" variant="outlined" onClick={handleDelete} onClose={() => {}}>Are you sure you want to delete this item? This cannot be undone.</Alert>
                            // <Alert severity="warning">Are you sure you want to delete this item?</Alert>
                            // handleDelete(item.id);
                        }}>Delete
                        </button> :
                        (<button className={!wasClicked ? "cardButtonAddCart" : "cardButtonInCart"}
                            onClick={renderUserCartItem}
                            startIcon={<AddShoppingCart />}
                            variant="outlined">
                            Add To Cart
                        </button>)}
                    <button variant="outlined" startIcon={<DeleteIcon />}>
                        Delete
                    </button>
                    {/* {user.id === item.user_id ?
                        <Button
                        onClick={editItem}
                        >Edit Details</Button> :
                        null} */}
                    {wasClicked ? <Alert key={'success'} variant={'success'}>Added to cart</Alert> : null}
                </p>
            </div>
        </>
    )
}

export default ItemCardNew;