import React, { useEffect, useState } from 'react';
import StripeContainer from './StripeContainer';
import CartItem from "./CartItem";
import StripeCheckout from 'react-stripe-checkout';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

function ShoppingCart({deleteItem, addCartItem, cartItems, setCartItems, setCartValue, items, total, change, setChange, user}){
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
    //         .then(data => setCartItems(data.user_cart_items))
    // }, [])
    // console.log(cartItems)

    useEffect(() => {
        fetch("/api/mycart")
            .then((r) => r.json())
            .then(data => setCartItems(data))
    }, [])
    console.log("my cart items: ", cartItems)


    function togglePayment() {
        setShowCheckout(showCheckout => (!showCheckout));
    }


    useEffect(() => {
        let total = 0;
        cartItems.map((item) => {
            total += item.price
        })
        setAddedCartItems(total)
    }, [cartItems])

    const allInCart = cartItems.map((item) => {
        return (
            <CartItem
                cartItem={item.id}
                change={change}
                setChange={setChange}
                key={item.id}
                itemname={item.itemname}
                id={item.id}
                size={item.size}
                image={item.images_url[0]}
                price={item.price}
                material={item.material}
                setCartItems={setCartItems}
                cartItems={cartItems}
                deleteItem={deleteItem}
            >
            </CartItem>
        )})
    
    // function addCartItem(newCItem) {
    //     setCartItems(...cartItems, newCItem)
    // }
    console.log(cartItems)


    return(
    <>
        <h2>SHOPPING CART</h2>
        <div style={{height:"18em", marginTop:"3em", marginLeft: "10em", marginRight: "10em"}} className="container px-4 py-5 mx-auto">
            <div style={{display:"flex", width: "100%", flexDirection:"row"}} className="row d-flex justify-content-center">
                <div className="col-5" style={{ width:"50%", justifyContent:"center", marginLeft:"10em" }}>
                    <h3 style={{fontFamily:"monospace", textAlign:"left"}} className="heading">ITEM</h3>
                </div>
                {/* <div className="col-7" style={{width: "50%", marginRight: "5em"}}> */}
                <div className="row text-right" style={{ marginBottom: "3em", width: "50%", fontFamily: "monospace", alignItems: "center", display: "flex", flexDirection: "row", justifyContent:"space-evenly"}}>
                <div className="col4"
                        style={{ width: "100%"}}
                >
                    <h3>SIZE</h3>
                </div>
                    <div className="col4"
                        style={{ width: "100%", fontFamily: "monospace", alignItems: "center" }}
                    >                            
                        <h3>CATEGORY</h3>
                    </div>
                    <div className="col4"
                        style={{ width: "100%", fontFamily: "monospace", alignItems: "center" }}
                    >                            
                        <h3>REMOVE</h3>
                    </div>
                    <div className="col4" 
                        style={{ width: "100%", fontFamily: "monospace", alignItems: "center" }}
                    >
                        <h3>PRICE</h3>
                    </div>
                </div>
            </div>
            <div>
                {allInCart}
            </div>
            <div className="row text-right" style={{ marginBottom: "3em", width: "93%", fontFamily: "monospace", alignItems: "center",textAlign:"right", justifyContent: "space-evenly" }}>
                <div className="col4"
                    style={{ width: "100%", float:"right",fontWeight:"bold", fontFamily: "monospace", alignItems: "center", fontSize:"18px" }}
                >
                    Total: ${addedCartItems} 
                </div>
                <button className="checkoutBtn" onClick={togglePayment}>Check Out</button>
                {showCheckout ? <StripeContainer total={addedCartItems} /> : null}
                {/* <p className='col-4'>Total: {addedCartItems}</p> */}
            </div>
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
