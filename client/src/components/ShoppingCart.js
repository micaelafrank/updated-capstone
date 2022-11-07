import React, { useEffect, useState } from 'react';
import StripeContainer from './StripeContainer';
import CartItem from "./CartItem";
import StripeCheckout from 'react-stripe-checkout';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

function ShoppingCart({deleteItem, addCartItem,cartItems, setCartItems, setCartValue, items, total, change, setChange, user}){
    const [addedCartItems, setAddedCartItems] = useState(0);
    const [showCheckout, setShowCheckout] = useState(false)

    // function deleteItem(id) {
    //     const updatedCart = cartItems.filter((cartItem) => cartItem.id !== id);
    //     setCartItems(updatedCart);
    //     fetch(`/api/edit_cart/${id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //         inCartIcon: false,
    //         id: id,
    //     }),
    // })
    // .then((resp) => resp.json())
    // .then(setCartValue);
    // }

    // useEffect(() => {
    //     fetch("/api/mycart")
    //         .then((r) => r.json())
    //         .then(data => setCartItems(data))
    // }, [])
    // console.log(cartItems)

    // function addCartItem(newCItem) {
    //     setCartItems(...cartItems, newCItem)
    // }
    console.log(cartItems)


    const myCartItems = cartItems.user_cart_items.map((cartItem) => {
        return (
            <CartItem
                cartItem={cartItem.item}
                change={change}
                setChange={setChange}
                key={cartItem.id}
                itemname={cartItem.itemname}
                id={cartItem.id}
                image_url={cartItem.images_url}
                inCartIcon={cartItem}
                price={cartItem.price}
                material={cartItem.material}
                setCartItems={setCartItems}
                cartItems={cartItems}
                deleteItem={deleteItem}
            >
            </CartItem>
        )
    })


    function togglePayment() {
        setShowCheckout(showCheckout => (!showCheckout));
    }


    
    // useEffect(() => {
    //     let total = 0;
    //     cartItems.map((item) => {
    //         total += item.price
    //     })
    //     setAddedCartItems(total)
    // }, [cartItems])


    return(
    <>
        <div style={{height:"18em", marginTop:"3em", marginLeft: "10em", marginRight: "10em"}} className="container px-4 py-5 mx-auto">
            <div style={{display:"flex", width: "100%", flexDirection:"row"}} className="row d-flex justify-content-center">
                <div className="col-5" style={{ width:"50%", justifyContent:"center", marginLeft:"10em" }}>
                    <h4 style={{fontFamily:"monospace", textAlign:"left"}} className="heading">SHOPPING CART</h4>
                </div>
                {/* <div className="col-7" style={{width: "50%", marginRight: "5em"}}> */}
                <div className="row text-right" style={{ marginBottom: "3em", width: "50%", fontFamily: "monospace", alignItems: "center", display: "flex", flexDirection: "row", justifyContent:"space-evenly"}}>
                <div className="col4"
                        style={{ width: "100%"}}
                >
                    <h5>SIZE</h5>
                </div>
                    <div className="col4"
                        style={{ width: "100%", fontFamily: "monospace", alignItems: "center" }}
                    >                            
                        <h5>CATEGORY</h5>
                    </div>
                    <div className="col4"
                        style={{ width: "100%", fontFamily: "monospace", alignItems: "center" }}
                    >                            
                        <h5>REMOVE</h5>
                    </div>
                    <div className="col4" 
                        style={{ width: "100%", fontFamily: "monospace", alignItems: "center" }}
                    >
                        <h5>PRICE</h5>
                    </div>
                </div>
            </div>
            <div>{myCartItems}
            </div>
                <div>
                    <ul style={{ listStyleType: "none", fontWeight: "bold", display: "flex", margin: "50px" }}>
                        <li style={{ position: "absolute", right: "340px" }}>Total: {addedCartItems}</li>
                    </ul>
                </div>
                <button onClick={togglePayment}>Check Out</button>
                {showCheckout ? <StripeContainer total={addedCartItems} /> : null}
            </div>
            {/* <div className="col-lg-4 mt-2" style={{ width:"20%", display: "flex", flexDirection: "column", margin: "0" }}>
                <h5>Subtotal: {addedCartItems}</h5>
            </div> */}

            {/* <h6 style={{margin:"1em 1em 1em 0"}}>Shipping: 3.99 (Flat fee)</h6> */}
            {/* </div>
            </div>
                </div> */}
            {/* <button onClick={togglePayment} style={{ padding: "10px", width: "60%" }} className="btn-block btn-blue" id="checkout">Checkout</button>
            {showCheckout ? <StripeContainer total={addedCartItems} /> : null} */}
            {/* /* </div> */}
            {/* </div> */}
    </>
)}

export default ShoppingCart;
