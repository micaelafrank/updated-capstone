import React, { useEffect, useState } from 'react';
// import StripeContainer from './StripeContainer';
import CartItem from "./CartItem";

function ShoppingCart({deleteItem, items, total, change, setChange, user}){
    const [cartItems, setCartItems] = useState([]);
    const [addedCartItems, setAddedCartItems] = useState(0);
    const [showCheckout, setShowCheckout] = useState(false)

    console.log(cartItems[0])

    function togglePayment() {
        setShowCheckout(showCheckout => (!showCheckout));
    }

    function deleteItem(id) {
        const updatedCart = uniqueCartItems.filter((cartItem) => cartItem.id !== id);
        setCartItems(updatedCart);
    }

    const uniqueIds = [];

    const uniqueCartItems = cartItems.filter(cartItem => {
        const isDuplicate = uniqueIds.includes(cartItem.id);

        if (!isDuplicate) {
            uniqueIds.push(cartItem.id);
            return true;
        }
        return false;
    });
    
    useEffect(() => {
        fetch("/api/mycart")
            .then((r) => r.json())
            .then(data => setCartItems(data.items))
    }, [])
    
    useEffect(() => {
        let total = 0;
        uniqueCartItems.map((item) => {
            total += item.price
        })
        setAddedCartItems(total)
    }, [cartItems])


    return(
    <>
        <div className="container px-4 py-5 mx-auto">
            <div style={{display:"flex", flexDirection:"row"}} className="row d-flex justify-content-center">
                <div className="col-5" style={{ width:"50%", textAlign:"left", paddingLeft:"10em" }}>
                    <h4 className="heading">Shopping Cart</h4>
                </div>
                    <div className="col-7" style={{width: "50%"}}>
                        <div className="row text-right" style={{ display: "flex", flexDirection: "row", justifyContent:"flex-start" }}>
                            <div className="col-4" style={{ paddingRight: "7em", paddingLeft: "4em" }}>
                            <h6 className="mt-2">Category</h6>
                        </div>
                        <div className="col-4" style={{ paddingRight: "7em", paddingLeft: "4em" }}>
                            <h6 className="mt-2">Remove Item</h6>
                        </div>
                        <div className="col-4" style={{ paddingRight: "7em", paddingLeft: "4em" }}>
                            <h6 className="mt-2">Price</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div>{uniqueCartItems.map((cartItem) => {
                return (
                    <CartItem
                        cartItem={cartItem}
                        key={cartItem.id}
                        id={cartItem.id}
                        price={cartItem.price}
                        material={cartItem.material}
                        setCartItems={setCartItems}
                        cartItems={cartItems}
                        deleteItem={deleteItem}
                    >
                    </CartItem>
                )
            })}
            </div>
            {user.userCartItems >1 ? 
            (<div className="row justify-content-center" style={{marginTop:"4em"}}>
                <div className="col-lg-12">
                    <div className="card" style={{ width: "65%", alignItems: "center", justifyContent:"space-evenly", margin: "auto" }}>
                        <div className="row" style={{display:"flex", flexDirection:"row"}}>
                            <div className="col-lg-3 radio-group" style={{ display: 'flex', flexDirection: "column", width:"25%", justifyContent:"left", marginLeft:"2em"}}>
                                <div className="row d-flex px-3 radio" style={{display:"flex", flexDirection: "row", paddingTop:".7em"}}>
                                    <img className="pay" src="https://i.imgur.com/WIAP9Ku.jpg" />
                                    <p className="my-auto">Credit Card</p>
                                </div>
                                <div className="row d-flex px-3 radio gray" style={{display: "flex", flexDirection: "row", paddingTop: ".7em"}}>
                                    <img className="pay" src="https://i.imgur.com/OdxcctP.jpg"/>
                                    <p className="my-auto">Debit Card</p>
                                </div>
                                <div className="row d-flex px-3 radio gray" style={{ display: "flex", flexDirection: "row", paddingTop: ".7em"}}>
                                    <img className="pay" src="https://i.imgur.com/cMk1MtK.jpg" />
                                    <p className="my-auto">PayPal</p>
                                </div>
                            </div>
                            <div className="col-lg-5" style={{ display: 'flex', flexDirection: 'row' }} >
                                <div className="row px-2" style={{ display: 'flex', flexDirection: 'column', paddingTop:".7em", justifyContent:"left"}}>
                                    <div className="form-group col-md-6" style={{padding:"10px", width: "60%", paddingLeft:".7em" }}>
                                        <label className="form-control-label">Name on Card</label>
                                        <input style={{marginTop:"10px"}} type="text" id="cname" name="cname" placeholder="Johnny Doe"/>
                                    </div>
                                    <div className="form-group col-md-6" style={{ padding: "10px", width: "60%" }}>
                                        <label className="form-control-label">Card Number</label>
                                        <input style={{ marginTop: "10px" }} type="text" id="cnum" name="cnum" placeholder="1111 2222 3333 4444"/>
                                    </div>
                                </div>
                                <div className="row px-2" style={{ display: 'flex', flexDirection: 'column', paddingTop: ".7em", justifyContent:"left" }}>
                                    <div className="form-group col-md-6" style={{ padding: "10px", width: "60%" }}>
                                        <label className="form-control-label">Expiration Date</label>
                                        <input style={{ marginTop: "10px" }} type="text" id="exp" name="exp" placeholder="MM/YYYY"/>
                                    </div>
                                    <div className="form-group col-md-6" style={{ padding: "10px", width: "60%" }}>
                                        <label className="form-control-label">CVV</label>
                                        <input style={{ marginTop: "10px" }} type="text" id="cvv" name="cvv" placeholder="***"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-2" style={{ width:"20%", display: "flex", flexDirection: "column", margin: "0" }}>
                                <h5>Subtotal: {addedCartItems}</h5>
                                <h6 style={{margin:"1em 1em 1em 0"}}>Shipping: 3.99 (Flat fee)</h6>
                                <button style={{ padding:"10px", width:"60%"}} className="btn-block btn-blue" id="checkout">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>) : null}
        </div>
    </>
)}

export default ShoppingCart;
