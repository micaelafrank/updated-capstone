import LogIn from './LogIn';
import WithNav from './WithNav';
import SignUp from './SignUp';
import React, { useState, useEffect } from 'react';
import Profile from './Profile';
import Homepage from './Homepage';
import ItemsList from './ItemsList';
import AddItemForm from './AddItemForm';
import { Route, Routes } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';
import { brown, blueGrey } from '@mui/material/colors';
import SavedContainer from './SavedContainer';
// import NavBar from './NavBar';
import StripeContainer from './StripeContainer';
// import PurchaseLandingPage from './PurchaseLandingPage';

function App() {
  const storedDarkMode = JSON.parse(localStorage.getItem("DARK_MODE"));
  const [items, setItems] = useState([]);
  const [user, setUser] = useState({});
  const [change, setChange] = useState(false);
  const [darkMode, setDarkMode] = useState(storedDarkMode);
  const [cartItems, setCartItems] = useState([]);


  useEffect(() => {
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])
  console.log(user);

  function addNewItem(newItem) {
    setItems(...items, newItem)
  }

  useEffect(() => {
    fetch("/api/items")
      .then((r) => r.json())
      .then(data => setItems(data))
  }, [])
  console.log(items)


  const darkBrown = brown[300];
  const mainBrown = brown[200];
  const lightBrown = brown['A100'];


  // let yellowLight = "#f4f0ad";
  // let yellowDark = "#c1be7d";
  // let yellowMain = "#f4f0ad";
  // let greenLight = "#eefffd";
  // let greenDark = "#8ab399";
  // let greenMain = "#bbe5ca";
  let newGreen = '#cfe0c3';
  const purple = '#bca5bb';
  
  // let taupeLight = "#ffffff";
  // let taupeDark = "#bcb3a9";
  // let taupeMain = "#efe5db";

  
  // function deleteItemFromList(id) {
  //   const updatedItemsList = items.filter((item) => item.id !== id);
  //   setItems(updatedItemsList);
  // }


  // function addCartItem(item){
  //   console.log("return item")
  // }



  // function deleteItem(id) {
  //   const updatedCart = cartItems.filter((cartItem) => cartItem.id !== id);
  //   setCartItems(updatedCart);
  // }

  // function deleteCartIcon(id) {
  //   setEditCartState(!editCartState);
  //   fetch(`/api/edit_cart/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       inCartIcon: false,
  //       id: item.id,
  //     }),
  //   })
  //     .then((resp) => resp.json())
  //     .then(data => setInitialCartValue(data.inCartIcon));
  //   setIsAddedCart(isAddedCart => (!isAddedCart))
  // }


  useEffect(() => {
    localStorage.setItem("DARK_MODE", darkMode);
  }, [darkMode]);


  return (
    <div className={darkMode ? "App dark" : "App"}>
      <div className="h-auto dark:bg-slate-900" >

    {/* <div> */}
      <Routes>
        <Route path="/login" element={<LogIn user={user} setUser={setUser} />} />
        <Route path="/signup" element={<SignUp user={user} setUser={setUser} />} />
          <Route element={<WithNav user={user} setUser={setUser} darkMode={darkMode} setDarkMode={setDarkMode} />}>
          <Route path="/" element={<Homepage user={user} />} /> 
          <Route path="/profile" element={<Profile setItems={setItems} setUser={setUser} items={items} user={user} />} />
          <Route path="/sell" element={<AddItemForm addNewItem={addNewItem} user={user} />} />
          <Route path="/buy" element={<ItemsList cartItems={cartItems} setCartItems={setCartItems} change={change} setChange={setChange} user={user} />} />
          <Route path="/mycart" element={<ShoppingCart total={items} cartItems={cartItems} setCartItems={setCartItems} setChange={setChange} change={change} user={user} />} />
          {/* <Route path="/mysaves" element={<SavedContainer setChange={setChange} change={change} user={user} />} /> */}
          <Route path="/checkout" element={<StripeContainer total={1000} />} />
          {/* <Route path="/orderconfirmation" element={<PurchaseLandingPage items={items} user={user} />} />*/}
        </Route>
      </Routes>
      {/* <Footer /> */}
    </div>
    </div>
  )
}

export default App;