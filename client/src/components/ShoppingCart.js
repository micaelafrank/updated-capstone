import React, { useEffect, useState } from 'react';
// import StripeContainer from './StripeContainer';
import CartItem from "./CartItem";

function ShoppingCart({deleteItem, items, total, change, setChange, user}){
    const [cartItems, setCartItems] = useState([]);
    const [addedCartItems, setAddedCartItems] = useState(0);
    const [showCheckout, setShowCheckout] = useState(false)

    console.log(cartItems[0])

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
        <div className="row justify-content-center">
            <div className="col-lg-12">
                <div className="card" style={{width:"70%"}}>
                    <div className="row">
                        <div className="col-lg-3 radio-group" style={{ display: 'flex', flexDirection: "row" }}>
                            <div className="row d-flex px-3 radio">
                                <img className="pay" src="https://i.imgur.com/WIAP9Ku.jpg"/>
                                    <p className="my-auto">Credit Card</p>
                            </div>
                            <div className="row d-flex px-3 radio gray">
                                <img className="pay" src="https://i.imgur.com/OdxcctP.jpg"/>
                                    <p className="my-auto">Debit Card</p>
                            </div>
                            <div className="row d-flex px-3 radio gray mb-3">
                                <img className="pay" src="https://i.imgur.com/cMk1MtK.jpg"/>
                                    <p className="my-auto">PayPal</p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="row px-2">
                                <div className="form-group col-md-6">
                                    <label className="form-control-label">Name on Card</label>
                                    <input type="text" id="cname" name="cname" placeholder="Johnny Doe"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="form-control-label">Card Number</label>
                                    <input type="text" id="cnum" name="cnum" placeholder="1111 2222 3333 4444"/>
                                </div>
                            </div>
                            <div className="row px-2">
                                <div className="form-group col-md-6">
                                    <label className="form-control-label">Expiration Date</label>
                                    <input type="text" id="exp" name="exp" placeholder="MM/YYYY"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="form-control-label">CVV</label>
                                    <input type="text" id="cvv" name="cvv" placeholder="***"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-2">
                            <div className="row d-flex justify-content-between px-4">
                                <p className="mb-1 text-left">Subtotal</p>
                                <h6 className="mb-1 text-right">$23.49</h6>
                            </div>
                            <div className="row d-flex justify-content-between px-4">
                                <p className="mb-1 text-left">Shipping</p>
                                <h6 className="mb-1 text-right">$2.99</h6>
                            </div>
                            <div className="row d-flex justify-content-between px-4" id="tax">
                                <p className="mb-1 text-left">Total (tax included)</p>
                                <h6 className="mb-1 text-right">$26.48</h6>
                            </div>
                            <button className="btn-block btn-blue">
                                <span>
                                    <span id="checkout">Checkout</span>
                                    <span id="check-amt">$26.48</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
)}

export default ShoppingCart;
