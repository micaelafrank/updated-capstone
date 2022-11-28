import React, { useEffect, useState } from 'react';
import StripeContainer from './StripeContainer';
import CartItem from "./CartItem";
import StripeCheckout from 'react-stripe-checkout';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import Alert from '@mui/material/Alert';



function ShoppingCart({deleteCartItem, addCartItem, setCartValue, items, total, change, setChange, user}){
    const [addedCartItems, setAddedCartItems] = useState(0);
    const [showCheckout, setShowCheckout] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [itemCount, setItemCount] = useState(0);
    // const [wasClicked, setWasClicked] = useState(false)
    // console.log(itemCount)
    // console.log(cartItems.length)
    // console.log(addedCartItems)

    const navigate = useNavigate();

    useEffect(() => {
        fetch("/api/mycart")
            .then((r) => r.json())
            .then(data => setCartItems(data.items))
        // setItemCount(itemCount)})
    }, [])
    console.log("my cart items: ", cartItems)

    // const uniqueIds = [];

    // const uniqueCartItems = cartItems.filter(cartItem => {
    //     const isDuplicate = uniqueIds.includes(cartItem.id);

    //     if (!isDuplicate) {
    //         uniqueIds.push(cartItem.id);
    //         return true;
    //     }
    //     return false;
    // }
    // );

    function deleteCartItem(id) {
        const updatedCart = cartItems.filter((cartItem) => cartItem.id !== id);
        setCartItems(updatedCart);
    }

    function togglePayment() {
        setShowCheckout(showCheckout => (!showCheckout));
    }


    useEffect(() => {
        let total = 0;
        cartItems.map((item) => {
            setItemCount(itemCount + 1)
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
                image={item.images_url}
                price={item.price}
                material={item.material}
                setCartItems={setCartItems}
                cartItems={cartItems}
                deleteCartItem={deleteCartItem}
                // wasClicked={wasClicked}
                // setWasClicked={setWasClicked}
            >
            </CartItem>
        )})
    
    // function addCartItem(newCItem) {
    //     setCartItems(...cartItems, newCItem)
    // }
    console.log(cartItems)


    return(
        <> 
            <div style={{ height: "auto", marginLeft: "10em", marginRight: "10em" }} className="container px-4 py-5 mx-auto">
                <Typography
                    style={{marginTop: "1em", fontFamily: "monospace"}}
                    component="h2"
                    variant="h4"
                    align="left">
                        SHOPPING CART
                    </Typography> 
                <Typography
                style={{ marginBottom: '1em', fontFamily: "monospace" }}
                >THERE ARE {cartItems.length} ITEMS IN YOUR CART</Typography>
                {/* <h1 style={{ marginTop: "2em", fontWeight:"normal"}}>SHOPPING CART</h1>               */}
            {/* {myTotal >0 ? */}
                <div style={{display:"flex", lineHeight:"1", width: "100%", flexDirection:"row"}} className="row d-flex justify-content-center cartHeaderRow">
                    <div className="col-5" style={{ lineHeight: "1", width:"50%", justifyContent:"center", marginLeft:"10em" }}>
                        <h4 style={{textAlign:"left"}} className="heading">ITEM</h4>
                    </div>
                    {/* <div className="col-7" style={{width: "50%", marginRight: "5em"}}> */}
                    <div className="row text-right" style={{ width: "50%", alignItems: "center", display: "flex", flexDirection: "row", justifyContent:"space-evenly"}}>
                    <div className="col4"
                            style={{ width: "100%"}}
                    >
                            <h4>SIZE</h4>
                    </div>
                        <div className="col4"
                        style={{ width: "100%", alignItems: "center" }}
                    >                            
                            <h4>CATEGORY</h4>
                        </div>
                        <div className="col4"
                            style={{ width: "100%", alignItems: "center" }}
                        >                            
                            <h4>REMOVE</h4>
                        </div>
                        <div className="col4" 
                            style={{ width: "100%", alignItems: "center" }}
                        >
                            <h4>PRICE</h4>
                        </div>
                    </div>
                </div> 
                {/* : null}                 */}
                <div>
                    {allInCart}
                </div>
                <div className="row text-right" style={{ marginBottom: "3em", width: "93%", alignItems: "center",textAlign:"right", justifyContent: "space-evenly" }}>
                    <div className="col4"
                        style={{ width: "100%", float:"right",fontWeight:"bold", alignItems: "center", fontSize:"18px" }}
                    >
                        TOTAL: ${addedCartItems} 
                    </div> 
                    <button className="checkoutBtn" onClick={()=> navigate("/buy")}>CONTINUE SHOPPING</button> 
                    {/* {addedCartItems > 0 ? <button className="checkoutBtn" onClick={togglePayment}>CHECK OUT</button> : null} */}
                    <button className="checkoutBtn" onClick={()=> navigate("/payment")}>CHECK OUT</button>
                    {showCheckout ? <StripeContainer total={addedCartItems} /> : null}
                    {/* <p className='col-4'>Total: {addedCartItems}</p> */}
                </div>
            </div>
    </>
)}

export default ShoppingCart;
