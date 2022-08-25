// import './App.css';
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

function App({ addFavorite, addNewSave, handleUndoHeart, setInCart, setWasClicked, wasClicked, inCart, deleteFavorite }) {
  // setEditHeartState, editHeartState
  const [items, setItems] = useState([]);
  const [user, setUser] = useState({});
  const [change, setChange] = useState(false);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])
  console.log(user);


  function addNewItem(newItem) {
    setItems(...items, newItem)
  }

  // function addNewSave(newSave){
  //   setSavedItems(...savedItems, newSave)
  // }


  return (
    <div>
      <Routes>
          <Route path="/login" element={<LogIn user={user} setUser={setUser} />} />
          <Route path="/signup" element={<SignUp user={user} setUser={setUser} />} />
        <Route element={<WithNav user={user} setUser={setUser} />}>
          <Route path="/" element={<Homepage user={user} setUser={setUser} />} />
          <Route path="/profile" element={<Profile items={items} user={user} setUser={setUser} />} />
          <Route path="/sell" element={<AddItemForm addNewItem={addNewItem} user={user} />} />
          <Route path="/buy" element={<ItemsList change={change} items={items} setItems={setItems} setChange={setChange} user={user} />} />
          <Route path="/mycart" element={<ShoppingCart total={items} setChange={setChange} change={change} user={user} items={items} />} />
          <Route path="/mylikes" element={<SavedContainer setChange={setChange} change={change} user={user} />} />
          <Route path="/checkout" element={<StripeContainer total={1000} />} />
          {/* <Route path="/orderconfirmation" element={<PurchaseLandingPage items={items} user={user} />} />*/}
        </Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App;