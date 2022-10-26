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
    fetch("/api/items")
      .then((r) => r.json())
      .then(data => setItems(data))
  }, [])
  console.log(items)


  useEffect(() => {
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])
  console.log(user);


  useEffect(() => {
    fetch("/api/mycart")
      .then((r) => r.json())
      .then(data => setCartItems(data.items))
  }, [change])
  console.log(cartItems)


  function addCartItem(item){
    console.log("return item")
  }


  function addNewItem(newItem) {
    setItems(...items, newItem)
  }

  function deleteItem(id) {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== id);
    setCartItems(updatedCart);
  }


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
          <Route path="/profile" element={<Profile items={items} user={user} />} />
          <Route path="/sell" element={<AddItemForm addNewItem={addNewItem} user={user} />} />
            <Route path="/buy" element={<ItemsList addCartItem={addCartItem} items={items} setItems={setItems} change={change} setChange={setChange} user={user} />} />
          <Route path="/mycart" element={<ShoppingCart deleteItem={deleteItem} cartItems={cartItems} setCartItems={setCartItems} total={items} setChange={setChange} change={change} user={user} items={items} />} />
          {/* <Route path="/mysaves" element={<SavedContainer setChange={setChange} change={change} user={user} />} /> */}
          {/* <Route path="/checkout" element={<StripeContainer total={1000} />} /> */}
          {/* <Route path="/orderconfirmation" element={<PurchaseLandingPage items={items} user={user} />} />*/}
        </Route>
      </Routes>
      {/* <Footer /> */}
    </div>
    </div>
  )
}

export default App;